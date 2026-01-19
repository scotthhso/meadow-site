/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { FadeIn } from "./UiHelpers";
import { BadgeCheck } from "lucide-react";

export const WhySection = ({ meadow }: { meadow: any }) => {
	return (
		<div className=" bg-[#FFF8F0]">
			<section
				className="mx-auto max-w-6xl scroll-mt-24 bg-[#FFF8F0] px-6 py-12"
				id="why"
				style={{ color: "#42531D" }}
			>
				<FadeIn>
					<div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-start">
						<div>
							<h2 className="text-2xl font-semibold tracking-tight">
								WHY MEADOW MATCHA?
							</h2>
							<p className="mt-2 max-w-xl text-neutral-600 text-lg">
								Origin Guizhou, China — known as the matcha capital of China,
								largest exporter in China, #3 worldwide.
							</p>

							<Accordion
								type="multiple"
								className="mt-6 space-y-3"
								defaultValue={meadow.highlights.map(
									(_: any, idx: number) => `highlight-${idx}`,
								)}
							>
								{meadow.highlights.map((h: any, idx: number) => (
									<AccordionItem
										key={idx}
										value={`highlight-${idx}`}
										className="py-2"
									>
										<AccordionTrigger className="flex w-full items-center py-3 text-left">
											<span className="flex-1 text-left text-xl font-semibold">
												{h.title}
											</span>
										</AccordionTrigger>
										<AccordionContent className="pb-4 text-lg text-neutral-600">
											<ul className="space-y-1 ">
												{h.points.map((point: string, pointIdx: number) => (
													<li key={pointIdx}>• {point}</li>
												))}
											</ul>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>

						<div className="grid gap-4">
							<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-[0_1px_0_#0000000d]">
								<div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
									Region
								</div>
								<div className="mt-2 text-lg font-semibold text-neutral-900">
									{meadow.region}
								</div>
							</div>
							<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-[0_1px_0_#0000000d]">
								<div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
									Elevation
								</div>
								<div className="mt-2 text-lg font-semibold text-neutral-900">
									1000+ m average
								</div>
								<div className="mt-1 text-sm text-neutral-600">
									92.5% mountainous terrain
								</div>
							</div>
							<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-[0_1px_0_#0000000d]">
								<div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
									Quality
								</div>
								<div className="mt-2 text-sm text-neutral-700">
									ISO 9001, ISO 22000, FSSC 22000, HACCP, and AIB
								</div>
								<div className="mt-2 flex items-center gap-2 text-sm font-medium text-neutral-700">
									<BadgeCheck />
									Quality Assurance
								</div>
							</div>
							<div className="rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-[0_1px_0_#0000000d]">
								<div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
									Certifications
								</div>
								<div className="mt-2 text-sm text-neutral-700">
									{meadow.certifications.join(", ")}
								</div>
							</div>
						</div>
					</div>
				</FadeIn>
			</section>

			<section
				className="mx-auto max-w-6xl scroll-mt-24 px-6 py-12"
				id="process"
			>
				<FadeIn>
					{/* Process as playful list */}
					<div>
						<h3 className="text-3xl font-semibold tracking-tight text-[#42531D]">
							Production Process
						</h3>
						<p className="mt-2 max-w-md text-neutral-600 text-lg">
							From shade to stone mill—how Meadow keeps its color and calm.
						</p>
						<ol className="relative mt-6 space-y-6">
							{meadow.process.map((p: any, i: number) => {
								const number = i + 1;
								const displayNumber = number < 10 ? `0${number}` : number;
								return (
									<li key={i} className="relative pl-10">
										{/* Numbered node aligned to the line with enough gutter so it doesn't overlap */}
										<span className="absolute left-0 top-0 text-4xl font-extrabold leading-none text-emerald-700">
											{displayNumber}
										</span>
										{/* Title */}
										<div className="mt-0.5 font-medium text-neutral-900 ml-[14px] text-xl">
											{p.step}
										</div>
										{/* Details */}
										<p className="mt-1.5 text-neutral-600 ml-[14px] text-lg">
											{p.details}
										</p>
									</li>
								);
							})}
						</ol>
						{/* </div> */}
					</div>
				</FadeIn>
			</section>
		</div>
	);
};
