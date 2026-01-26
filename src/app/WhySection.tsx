/* eslint-disable @typescript-eslint/no-explicit-any */
import { FadeIn } from "./UiHelpers";
import { BadgeCheck, MapPin, Mountain, ShieldCheck } from "lucide-react";
import { InfoPillCard, NoPillList } from "@/components/ui/pill";

export const WhySection = ({ meadow }: { meadow: any }) => {
	const noPoints =
		meadow.highlights.find(
			(item: { title: string }) => item.title === "Clean growing practices",
		)?.points ?? [];
	const highlightItems = meadow.highlights.filter(
		(item: { title: string }) => item.title !== "Clean growing practices",
	);

	return (
		<div className=" bg-[#FFF8F0]">
			<section
				className="relative mx-auto max-w-6xl scroll-mt-24 bg-[#FFF8F0] px-6 py-12"
				id="why"
				style={{ color: "#42531D" }}
			>
				<div
					className="pointer-events-none absolute -right-6 top-32 z-0 h-36 w-40 rotate-3"
					aria-hidden
				>
					<div className="absolute inset-0 rounded-[55%_45%_60%_40%/55%_45%_55%_45%] bg-[#D3C7EA]/55" />
					<span className="absolute -left-2 top-20 h-10 w-10 rounded-full bg-[#D3C7EA]/55" />
					<span className="absolute right-1 top-0 h-8 w-8 rounded-full bg-[#D3C7EA]/55" />
				</div>
				<div className="relative z-10">
					<FadeIn>
						<div className="grid gap-10">
							<div>
								<h2 className="font-condensed text-2xl font-semibold tracking-tight">
									WHY MEADOW MATCHA?
								</h2>
								<p
									className="mt-2 max-w-xl text-lg"
									style={{ color: "#22181C" }}
								>
									Origin Guizhou, China — known as the matcha capital of China,
									largest exporter in China, #3 worldwide.
								</p>

								<div className="mt-6 space-y-6">
									{highlightItems.map((h: any, idx: number) => (
										<div key={idx} className="rounded-3xl  ">
											<h3 className="text-xl font-semibold text-[#42531D]">
												{h.title}
											</h3>
											<div className="mt-3 text-lg text-neutral-600">
												{h.title === "Unique terroir" ? (
													<div className="flex flex-col gap-6 md:flex-row md:items-start">
														<ul
															className="md:flex-1 list-none"
															style={{ fontSize: 16 }}
														>
															{h.points.map(
																(point: string, pointIdx: number) => (
																	<li key={pointIdx}>{point}</li>
																),
															)}
														</ul>
														<dl className="grid gap-3 md:w-72 md:shrink-0">
															<div className="flex gap-3 rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-[0_1px_0_#0000000d]">
																<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#42531D]">
																	<MapPin className="h-4 w-4" />
																</span>
																<div>
																	<dt className="text-xs font-semibold uppercase tracking-wide text-[#42531D]">
																		Region
																	</dt>
																	<dd className="mt-1 text-base font-semibold text-neutral-900">
																		{meadow.region}
																	</dd>
																</div>
															</div>
															<div className="flex gap-3 rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-[0_1px_0_#0000000d]">
																<span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#42531D]">
																	<Mountain className="h-4 w-4" />
																</span>
																<div>
																	<dt className="text-xs font-semibold uppercase tracking-wide text-[#42531D]">
																		Elevation
																	</dt>
																	<dd className="mt-1 text-base font-semibold text-neutral-900">
																		1000+ m average
																	</dd>
																	<dd className="mt-1 text-sm text-neutral-600">
																		92.5% mountainous terrain
																	</dd>
																</div>
															</div>
														</dl>
													</div>
												) : h.title === "Proven Quality" ? (
													<div className="flex flex-col gap-6  md:items-start">
														<ul
															className="space-y-1 md:flex-1"
															style={{ fontSize: 16 }}
														>
															{h.points.map(
																(point: string, pointIdx: number) => (
																	<li key={pointIdx}>{point}</li>
																),
															)}
														</ul>
														<div className="flex w-full flex-col gap-3 md:flex-row md:items-start">
															<NoPillList
																points={[
																	"Synthetic pesticides, Herbicides, Insecticides",
																]}
																className="w-full md:flex-1"
															/>
															{/* <dl className="flex flex-col gap-3 md:flex-row md:items-start"> */}
															<InfoPillCard
																icon={<ShieldCheck className="h-4 w-4" />}
																title="Certifications"
																description="ISO 9001, ISO 22000, FSSC 22000, HACCP, and AIB"
																className="w-full md:flex-1 "
															/>
															<InfoPillCard
																icon={<BadgeCheck className="h-4 w-4" />}
																title="Compliant"
																description={meadow.certifications.join(", ")}
																className="w-full md:flex-1 "
															/>
															{/* </dl> */}
														</div>
													</div>
												) : (
													<ul className="space-y-1" style={{ fontSize: 16 }}>
														{h.points.map((point: string, pointIdx: number) => (
															<li key={pointIdx}>{point}</li>
														))}
													</ul>
												)}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</FadeIn>
				</div>
				<div
					className="pointer-events-none absolute -left-10 bottom-10 z-0 h-44 w-52 -rotate-6"
					aria-hidden
				>
					{/* <div className="absolute inset-0 rounded-[58%_42%_64%_36%/55%_48%_52%_45%] bg-[#F8DFC2]" /> */}
					{/* <span className="absolute -left-3 top-6 h-12 w-12 rounded-full bg-lime-300/70" /> */}
					{/* <span className="absolute right-0 top-0 h-10 w-10 rounded-full bg-lime-300/70" />
					<span className="absolute -right-4 top-12 h-14 w-14 rounded-full bg-lime-300/70" /> */}
					{/* <span className="absolute left-10 -bottom-4 h-12 w-12 rounded-full bg-lime-300/70" />
					<span className="absolute -left-1 -bottom-2 h-8 w-8 rounded-full bg-lime-300/70" /> */}
				</div>
			</section>

			<section
				className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-12"
				id="process"
			>
				<FadeIn>
					{/* Process as playful list */}
					<div className="relative z-10">
						<h3 className="font-condensed text-3xl font-semibold tracking-tight text-[#42531D]">
							Production Process
						</h3>
						<p className="mt-2 max-w-md text-neutral-600 text-lg">
							From shade to stone mill—how Meadow keeps its color and calm.
						</p>
						<div
							className="pointer-events-none absolute -left-20 -top-0 z-0 h-44 w-52 rotate-6 rounded-[55%_45%_60%_40%/55%_50%_50%_45%] bg-emerald-300/20 blur-[1px]"
							aria-hidden
						/>
						<div
							className="pointer-events-none absolute left-10 top-6 z-0 h-24 w-28 -rotate-8 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] bg-emerald-200/20"
							aria-hidden
						/>
						<ol className="relative mt-6 space-y-6">
							{meadow.process.map((p: any, i: number) => {
								const number = i + 1;
								const displayNumber = number < 10 ? `0${number}` : number;
								return (
									<li key={i} className="relative pl-10">
										{/* Numbered node aligned to the line with enough gutter so it doesn't overlap */}
										<span
											className="absolute left-0 top-0 text-4xl font-extrabold leading-none text-[#3F531D]"
											style={{ fontSize: "42px" }}
										>
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
