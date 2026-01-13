/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@radix-ui/react-accordion";
import { FadeIn } from "./UiHelpers";
import { BadgeCheck } from "lucide-react";

export const WhySection = ({ meadow }: { meadow: any }) => {
	return (
		<>
			<section className="mx-auto max-w-6xl px-6 py-12" id="why">
				<FadeIn>
					<div className="grid gap-10">
						{/* Sticker grid */}
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
								Why Meadow Matcha?
							</h2>
							<div>
								<p className="text-xs font-semibold tracking-tight text-neutral-900">
									Origin Guizhou, China:
								</p>
								<p className="mt-2 max-w-xl text-neutral-600">
									Known as the matcha capital of China Largest exporter in
									China, #3 worldwide.
								</p>
							</div>
							<div className="mt-6 grid gap-4 md:grid-cols-2">
								{/* Left column: single featured highlight */}
								<div>
									{(() => {
										const h = meadow.highlights[0];
										return (
											<div className="grid grid-cols-[auto,1fr] items-start gap-3 rounded-2xl border border-emerald-200/60 bg-white p-5 shadow-[0_1px_0_#0000000d]">
												<div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
													{h.icon}
												</div>
												<div>
													<div className="text-lg font-semibold text-neutral-900">
														{h.title}
													</div>
													<div className="mt-1 text-sm text-neutral-600">
														{h.points.map((point: string, idx: number) => (
															<div key={idx} className="mb-1">
																• {point}
															</div>
														))}
													</div>
												</div>
											</div>
										);
									})()}
								</div>

								{/* Right column: the remaining highlights stacked */}
								<div className="space-y-4">
									{meadow.highlights.slice(1).map((h: any, idx: number) => (
										<div
											key={idx}
											className="grid grid-cols-[auto,1fr] items-start gap-3 rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-[0_1px_0_#0000000d]"
										>
											<div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
												{h.icon}
											</div>
											<div>
												<div className="font-medium text-neutral-900">
													{h.title}
												</div>
												<div className="text-sm text-neutral-600">
													{h.points.map((point: string, idx: number) => (
														<div key={idx} className="mb-1">
															• {point}
														</div>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-700">
								ISO 9001, ISO 22000, FSSC 22000, HACCP, and AIB
							</div>
							<div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-700">
								4 + 1 framework (4 management systems + 1 audit)
							</div>
							<div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-700">
								<BadgeCheck />
								Quality Assurance
							</div>
						</div>
					</div>
				</FadeIn>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-12" id="process">
				<FadeIn>
					{/* Process as playful list */}
					<div>
						<h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
							Production Process
						</h3>
						<p className="mt-2 max-w-md text-neutral-600">
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
										<div className="mt-0.5 font-medium text-neutral-900 ml-[14px]">
											{p.step}
										</div>
										{/* Details */}
										<p className="mt-1.5 text-sm text-neutral-600 ml-[14px]">
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
		</>
	);
};
