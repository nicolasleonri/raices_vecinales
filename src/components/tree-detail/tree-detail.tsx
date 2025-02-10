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

	// State for confirmation
	const [isConfirmed, setIsConfirmed] = useState(false);

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

	// Handle confirmation box change
	const handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsConfirmed(event.target.checked);
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

			<div className="mb-4">
						<label>
							<input
								type="checkbox"
								checked={isConfirmed}
								onChange={handleConfirmChange}
								className="mr-2"
							/>
							{` ${i18n.treeDetail.confirmationText}`}
						</label>
					</div>

			
		</div>
	);
};
