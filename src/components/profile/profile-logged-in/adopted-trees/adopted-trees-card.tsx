import React from "react";

export interface AdoptedTreesCardProps {
	sectionTitle?: string;
}

export const AdoptedTreesCard: React.FC<
	AdoptedTreesCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({ sectionTitle, ...props }) => {
	return (
		<div className="md:shadow-gdk-soft mb-3 md:rounded-2xl md:border-2 md:p-7">
			<div className="flex items-center w-full justify-between">
				<h2 className="text-2xl font-semibold">{sectionTitle}</h2>
			</div>
			{props.children}
		</div>
	);
};
