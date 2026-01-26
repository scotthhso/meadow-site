import { Ban } from "lucide-react";

export const InfoPillCard = ({
	icon,
	title,
	description,
	footer,
	className,
}: {
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
}) => (
	<div
		className={`flex flex-col gap-2 rounded-2xl bg-[#F3E7D8] p-3 shadow-[0_1px_0_#0000000d] ${className ?? ""}`.trim()}
	>
		<div className="flex items-center gap-3">
			<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
				{icon}
			</span>
			<dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
				{title}
			</dt>
		</div>
		<dd className="text-sm text-neutral-700 pl-1">{description}</dd>
		{footer ? (
			<div className="flex items-center gap-2 text-sm font-medium text-neutral-700">
				{footer}
			</div>
		) : null}
	</div>
);

export const NoPillList = ({
	points,
	className,
}: {
	points: string[];
	className?: string;
}) => (
	<InfoPillCard
		icon={<Ban className="h-4 w-4" />}
		title="Quality Assurance"
		description={
			<div className="flex flex-wrap ">
				<span className="inline-flex items-center text-sm text-neutral-700 line-through">
					{points}
				</span>
			</div>
		}
		className={className}
	/>
);
