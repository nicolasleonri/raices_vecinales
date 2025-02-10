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

export const TreeDetail: React.FC = () => {
	const i18n = useI18nStore().i18n();
	const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
	const [frozenTreeId, setFrozenTreeId] = useState<string | null>(null);

	const [url, removeSearchParam] = useUrlState((state) => [
		state.url,
		state.removeSearchParam,
	]);

	const { selectedTreeId, setSelectedTreeId, setHoveredTreeId } =
		useTreeStore();

	const treeId = url.searchParams.get("treeId");
	console.log(treeId)
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
		console.log("Tree ID Selected:", treeId);
	  };

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
				<p>[Alter]</p> {/* Tree ID */}
			</div>

			<div className="mb-6">
				<p className="font-semibold">{i18n.treeDetail.isAdopted}</p>
				<p>[GD]</p> {/* Tree ID */}
			</div>

			<div className="mb-6">
				<p className="font-semibold">{i18n.treeDetail.adoptIt}</p>
				<p>[Anzahl]</p> {/* Tree ID */}
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
