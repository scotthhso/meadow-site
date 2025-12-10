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
			<section className="mx-auto max-w-6xl px-6 py-12">
				<FadeIn>
					<div className="grid gap-10 md:grid-cols-2">
						{/* Sticker grid */}
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
								Why Meadow Matcha?
							</h2>
							<span>
								<p className="text-xs font-semibold tracking-tight text-neutral-900">
									Origin Guizhou, China:
								</p>
								<p className="mt-2 max-w-xl text-neutral-600">
									Known as the matcha capital of China Largest exporter in
									China, #3 worldwide.
								</p>
							</span>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								{meadow?.highlights.map((h: any, idx: number) => (
									<div
										key={idx}
										className="flex items-start gap-3 rounded-2xl border border-emerald-200/60 bg-white p-4 shadow-[0_1px_0_#0000000d]"
									>
										<div className="rounded-lg bg-emerald-50 p-2 text-emerald-700">
											{h.icon}
										</div>
										<div>
											<div className="font-medium text-neutral-900">
												{h.title}
											</div>
											<div className="text-sm text-neutral-600">{h.text}</div>
										</div>
									</div>
								))}
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

			<section className="mx-auto max-w-6xl px-6 py-12">
				<FadeIn>
					{/* Process as playful list */}
					<div>
						<h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
							Production Process
						</h3>
						<p className="mt-2 max-w-md text-neutral-600">
							From shade to stone mill—how Meadow keeps its color and calm.
						</p>
						{/* <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-3"> */}
						{/* <Accordion type="single" collapsible className="w-full">
								{meadow.process.map((p: any, i: number) => (
									<AccordionItem key={i} value={`step-${i}`}>
										<AccordionTrigger className="text-left">
											{p.step}
										</AccordionTrigger>
										<AccordionContent>{p.details}</AccordionContent>
									</AccordionItem>
								))}
							</Accordion> */}
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
