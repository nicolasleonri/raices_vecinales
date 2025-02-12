import React, { useEffect, useMemo, useState } from "react";
import { CloseIcon } from "../icons/close-icon";
import { useUrlState } from "../router/store";
import { useFetchTreeData } from "./hooks/use-fetch-tree-data";
import { TreeAge } from "./tree-age";
import { TreeAdoptCard } from "./tree-adopt-card";
import { useTreeStore } from "./stores/tree-store";
import { useI18nStore } from "../../i18n/i18n-store";
import { TreeWaterNeed } from "./tree-water-needs/tree-water-needs";
import { useTreeAgeClassification } from "./hooks/use-tree-age-classification";
import { LastWaterings } from "./last-waterings/last-waterings";
import { ProblemCard } from "./problem-card";
import { TreeFlier } from "./tree-flier";
import { Loading } from "../loading/loading";
import { TreeIcon } from "../icons/tree-icon";
import { supabaseClient } from "../../auth/supabase-client"; // Adjust path if needed
import { useMapStore } from "../map/map-store";
import * as turf from "@turf/turf";

export const TreeDetail: React.FC = () => {
	const i18n = useI18nStore().i18n();
	const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
	const [frozenTreeId, setFrozenTreeId] = useState<string | null>(null);
	const [treeData, setTreeData] = useState(null);
	const [neighbors, setNeighbors] = useState<any[]>([]); // Store the neighbor data
	const { map, isMapLoaded } = useMapStore();
    const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

	const createCircleLayer = (map: mapboxgl.Map, lat: number, lng: number, radius: number) => {
        const center = turf.point([lng, lat]);
        const circle = turf.circle(center, radius, { units: 'meters' });

		if (!map.getSource('circle-source')) {
            map.addSource('circle-source', {
                type: 'geojson',
                data: circle
            });

            map.addLayer({
                id: 'circle-layer',
                type: 'fill',
                source: 'circle-source',
                paint: {
                    'fill-color': '#007cbf',
                    'fill-opacity': 0.5
                }
            });
        } else {
            const source = map.getSource('circle-source') as mapboxgl.GeoJSONSource;
            source.setData(circle);
        }
    };

	const insertData = async (input_tree_id: string) => {
		try {
		  // Step 1: Fetch the maximum id from the user_info table
		  const { data: maxIdData, error: maxIdError } = await supabaseClient
			.from("user_info")
			.select("id")
			.order("id", { ascending: false }) // Order by id in descending order
			.limit(1); // Get only the first row (max id)
	  
		  if (maxIdError) throw maxIdError;
	  
		  const maxId = maxIdData?.[0]?.id;
	  
		  if (!maxId) {
			throw new Error("No rows found in the user_info table");
		  }
	  
		  const { error: updateError } = await supabaseClient
			.from("user_info")
			.update({ tree_id: input_tree_id }) // Convert tree_id to a number
			.eq("id", maxId); // Update the row with the max id
	  
		  if (updateError) throw updateError;
	  
		//   console.log(`Updated row with id ${maxId} to include tree_id: ${tree_id}`);
		  return null;
		} catch (error) {
		  console.error("Error in insertData:", error);
		  throw error;
		}
	  };

	const [url, removeSearchParam] = useUrlState((state) => [
		state.url,
		state.removeSearchParam,
	]);

	const { selectedTreeId, setSelectedTreeId, setHoveredTreeId } =
		useTreeStore();

	const treeId = url.searchParams.get("treeId");
	if (!treeId) {
		return null;
	}

	useEffect(() => {
		if (treeId && treeId !== selectedTreeId) {
			setSelectedTreeId(treeId);
		}
	}, [treeId]);

	const { setTreeCoreData, treeCoreData, treeWateringData } = useTreeStore();

	useFetchTreeData(treeId);

	const { treeAge, treeAgeClassification } =
		useTreeAgeClassification(treeCoreData);
	const treeTypeInfo = useMemo(() => {
		return i18n.treeDetail.treeTypeInfos.find(
			(treeType) => treeType.id === treeCoreData?.gattung_deutsch,
		);
	}, [treeCoreData, i18n]);

	const onClose = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		removeSearchParam("treeId");
		setTreeCoreData(undefined);
		setSelectedTreeId(undefined);
		/**
		 * We set the hovered tree id so users can see
		 * which was the tree they just closed
		 */
		setHoveredTreeId(treeId);
	};

	const handleTreeSelection = (e: React.FormEvent) => {
		e.preventDefault();
		setIsConfirmed(true);
		// You can add any additional logic to handle the treeId here.
		setFrozenTreeId(treeId);
		insertData(treeId);
		console.log("Tree ID Selected:", treeId);
		// HERE: TAKE FROM SQL
		// console.log("Neighbors:", neighbors);
		const treeIds = neighbors.map((neighbor) => neighbor.tree_id);
		const lat = url.searchParams.get("lat");
		const lng = url.searchParams.get("lng");
		setCoordinates({ lat: parseFloat(lat), lng: parseFloat(lng)});
		// console.log("Coordinates:", lat, lng);
	  };

	useEffect(() => {
        if (coordinates) {
            console.log("Coordinates:", coordinates);
			createCircleLayer(map, parseFloat(coordinates.lat), parseFloat(coordinates.lng), 10);
        }
    }, [coordinates]);

	useEffect(() => {
        if (neighbors && neighbors.length > 0 && coordinates != null) {
			console.log("Neighbors length:", neighbors.length);
			createCircleLayer(map, parseFloat(coordinates.lat), parseFloat(coordinates.lng), neighbors.length*4.5);
        }
    }, [neighbors]);

	  const getInfo = async (id: string) => {
		try {
			const { data, error } = await supabaseClient
			.from("trees")
			.select("standalter, baumhoehe, tpz_m, kronedurch") // Fetch only required columns
			.eq("id", id) // Filter by the provided `id`
			.limit(1); // Since `id` is unique, limit to 1 result
		
			if (error) throw error; // Ensure error is handled
		
			// console.log("Fetched Data:", data);
			return data; // Return data for further use
		} catch (err) {
			console.error("Error fetching data:", err);
			return null; // Return null on error
		}
		};

	useEffect(() => {
	const fetchData = async () => {
		const result = await getInfo(treeId);
		setTreeData(result);
	};

	fetchData();
	}, []);

	const get_neighbors = async () => {
		try {
			const { data, error } = await supabaseClient
			.from("found_neighbors")
			.select("tree_id") // Fetch only required columns

			if (error) throw error; // Ensure error is handled
		
			// console.log("Fetched Data:", data);
			setNeighbors(data); // Store the fetched neighbors
			return data; // Return data for further use
		} catch (err) {
			console.error("Error fetching data:", err);
			return null; // Return null on error
		}
		};

	useEffect(() => {
		const fetchData = async () => {
			const result = await getInfo(treeId);
			setTreeData(result);
			};
			
		if (treeId && treeId !== selectedTreeId) {
			fetchData();
		}
	}, [treeId]);

	const findNeighbors = async (treeId: string, depth: int) => {
		try {
			await supabaseClient.from("found_neighbors").delete().neq("tree_id", ""); // Deletes all rows
			const { data: directNeighbors, error: directError } = await supabaseClient.rpc("find_direct_neighbors", { tree_id_input: treeId }); 
			// Using an RPC (see below)
			if (directError) throw directError;
			console.log("Inserted Direct Neighbors!");
			// Step 3: Recursively find neighbors up to a depth of 5
			const { data: recursiveNeighbors, error: recursiveError } = await supabaseClient.rpc("find_recursive_neighbors", { max_depth: depth });
	  
			if (recursiveError) throw recursiveError;
	  
			console.log(`Inserted Recursive Neighbors at Depth ${depth}:`, recursiveNeighbors);
			console.log("Neighbor finding process completed.");

			const result = await get_neighbors(treeId);
			
			// console.log(result);

		} catch (err) {
		  console.error("Error finding neighbors:", err);
		}
	  };

	  useEffect(() => {
		const fetchDataneighbors = async () => {
			setNeighbors(null); // Clear the neighbor state
			const result = await findNeighbors(treeId, 10);
			// console.log(result)
			};
			
		if (treeId && treeId !== selectedTreeId) {
			setNeighbors(null); // Clear the neighbor state
			get_neighbors(treeId);
			fetchDataneighbors();
		}
	}, [treeId]);

	// useEffect(() => {
	// 	if (treeId && treeId !== selectedTreeId) {
			
	// 	}
	//   }, [treeId]);


	  


	  

	return (
		<div className="pointer-events-auto h-full bg-white rounded-l shadow-gdk-hard-up flex w-[100vw] flex-col gap-4 overflow-scroll p-5 lg:w-[400px] lg:min-w-[400px]">
			<a href="/map" className="flex flex-row justify-end" onClick={onClose}>
				<CloseIcon />
			</a>

			<div className="flex flex-row items-center gap-1">
				<TreeIcon />
				<div className="text-xl font-bold">{i18n.treeDetail.title}</div>
			</div>
			
			<div className="mb-4">
				<p className="font-semibold">{i18n.treeDetail.adoptHintTitle}</p>
				<p>{treeId}</p> {/* Tree ID */}
			</div>

			<div className="mb-5">
				<p className="font-semibold">{i18n.treeDetail.ageTitle}</p>
				<div>{treeData ? treeData[0].standalter : "Loading..."}</div>
			</div>

			<div className="mb-6">
				<p className="font-semibold">{i18n.treeDetail.isAdopted}</p>
				<div>{treeData ? treeData[0].baumhoehe : "Loading..."}</div>
				<div>{treeData ? treeData[0].kronedurch : "Loading..."}</div>
			</div>

			<div className="mb-6">
				<p className="font-semibold">{i18n.treeDetail.adoptIt}</p>
				{/* <p>Number of Neighbors: {neighbors.length}</p>  */}
				<div>{neighbors ? neighbors.length : "Loading..."}</div>

			</div>

			<div className="mb-6">
				<p className="font-semibold">{i18n.treeDetail.onlyAdoptedByOtherUsers}</p>
				<p>[Name: Info]</p> {/* Tree ID */}
			</div>
			
			{isConfirmed ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-md">
              <h2 className="text-2xl font-semibold text-center">Selection Confirmed! ✅</h2>
              <p className="mt-2 text-center">You have selected tree ID: {frozenTreeId}</p>
            </div>
          	) : (
			<form onSubmit={handleTreeSelection} className="space-y-6">
              {/* Tree ID Input */}
              <div className="flex flex-col gap-y-2">
				<label htmlFor="treeId" className="block font-semibold">Tree ID:</label>
				{isConfirmed ? (
					<p className="text-lg p-3 border border-gray-300 rounded-md">{treeId}</p>  // Display as text after confirmation
				) : (
					<input
					id="treeId"
					type="text"
					value={treeId}
					onChange={(e) => setTreeId(e.target.value)}
					className="w-full p-3 text-lg border border-gray-300 rounded-md"
					required
					readOnly={isConfirmed} // If confirmed, make the field read-only
					/>
				)}
				</div>

              {/* Confirm Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gdk-neon-green text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300"
                >
                  Confirm Selection
                </button>
              </div>
            </form>)}	
		</div>
	);
};
