"use client";

import React from "react";
import { motion } from "framer-motion";
import {
	Leaf,
	Mail,
	Sparkles,
	FlaskConical,
	Factory,
	Mountain,
	Droplets,
} from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// -------- Data --------
const meadow = {
	brand: "Meadow",
	region: "Guizhou, China",
	highlights: [
		{
			icon: <Mountain className="h-5 w-5" />,
			title: "High-altitude terroir",
			text: "Average elevation 1000+ m; 92.5% mountainous with natural cloud and mist cover.",
		},
		{
			icon: <Droplets className="h-5 w-5" />,
			title: "Ideal climate & soil",
			text: "Acidic soil, subtropical humid monsoon climate between the Yangtze and Pearl River basins.",
		},
		{
			icon: <FlaskConical className="h-5 w-5" />,
			title: "Clean growing practices",
			text: "No synthetic pesticides, herbicides, or insecticides used by source farms.",
		},
		{
			icon: <Sparkles className="h-5 w-5" />,
			title: "Safety & scale",
			text: "EU food safety standard compliant; China’s largest matcha producer and a top global exporter.",
		},
	],
	grades: [
		{
			key: "ceremonial",
			name: "Ceremonial",
			origin: "Guizhou",
			photo: "https://placehold.co/800x600?text=Ceremonial+Matcha",
			description:
				"Youngest first-harvest leaves, shade-grown and traditional stone-milled.",
			taste: "Smooth texture with natural sweetness and layered umami.",
			color: "Vibrant, bright jade green.",
			sizes: "Assorted sizes available based on your needs.",
			samples: true,
		},
		{
			key: "barista",
			name: "Barista Grade",
			origin: "Guizhou",
			photo: "https://placehold.co/800x600?text=Barista+Grade+Matcha",
			description:
				"Shade-grown, stone-milled first harvest with more character—perfect for lattes and blended drinks.",
			taste: "Mildly sweet, creamy body with light astringency for balance.",
			color: "Deep green that stays vivid in milk.",
			sizes: "Assorted sizes available based on your needs.",
			samples: true,
		},
	],
	process: [
		{
			step: "Shade Growing (覆い下栽培)",
			details:
				"Tea gardens are shaded 3–4 weeks before harvest to boost chlorophyll, amino acids (L-theanine), and sweetness.",
		},
		{
			step: "First Harvest Picking",
			details:
				"Tender young leaves are selectively plucked at peak freshness for color and flavor.",
		},
		{
			step: "Steaming & Cooling",
			details:
				"Leaves are steamed to halt oxidation, then quickly cooled to preserve jade color.",
		},
		{
			step: "Drying & Destemming",
			details:
				"Dried tencha is carefully destemmed and deveined to ensure silky texture.",
		},
		{
			step: "Stone-Milling",
			details:
				"Slow granite milling protects delicate aromatics; typical output ~30–40 g/hour per mill.",
		},
		{
			step: "Nitrogen-Flush & Seal",
			details:
				"Packed in oxygen-barrier bags under nitrogen to protect freshness and color.",
		},
	],
};

// -------- UI helpers --------
const FadeIn: React.FC<{ delay?: number; children: React.ReactNode }> = ({
	delay = 0,
	children,
}) => (
	<motion.div
		initial={{ opacity: 0, y: 12 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6, delay }}
	>
		{children}
	</motion.div>
);

export default function MeadowProductPage() {
	return (
		<div className="min-h-screen bg-neutral-50 text-neutral-800">
			{/* Header / Hero */}
			<header className="relative overflow-hidden">
				{/* playful blob background */}
				<div className="absolute inset-0">
					<div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-emerald-200/60 blur-3xl" />
					<div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-lime-200/60 blur-3xl" />
					<div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-teal-200/50 blur-2xl" />
				</div>
				<div className="relative mx-auto max-w-6xl px-6 py-16">
					<FadeIn>
						<div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-sm backdrop-blur">
							<Leaf className="h-4 w-4" />
							Meadow • Matcha from {meadow.region}
						</div>
					</FadeIn>

					<FadeIn delay={0.1}>
						<h1 className="mt-6 text-pretty text-5xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl">
							🍵 Bright matcha for calm, happy cups.
						</h1>
					</FadeIn>

					<FadeIn delay={0.2}>
						<p className="mt-4 max-w-3xl text-lg text-neutral-700">
							Shade-grown • stone-milled • Guizhou tea plateau. Smooth, low
							bitterness, and a color that pops in milk.
						</p>
					</FadeIn>

					<FadeIn delay={0.3}>
						<div className="mt-6 flex flex-wrap items-center gap-2">
							<span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
								EU food-safety compliant
							</span>
							<span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm">
								No synthetic pesticides / herbicides / insecticides
							</span>
							<span className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-sm">
								Shade-grown • Stone-milled
							</span>
						</div>
					</FadeIn>

					<FadeIn delay={0.35}>
						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href="#contact"
								className="rounded-full bg-neutral-900 px-5 py-3 text-white shadow-sm transition hover:opacity-90"
							>
								Request Samples
							</a>
							<a
								className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50"
								href="#"
							>
								Download Product Sheet
							</a>
						</div>
					</FadeIn>
				</div>

				{/* wavy divider */}
				<svg
					className="text-[length:0]"
					aria-hidden
					viewBox="0 0 1440 80"
					preserveAspectRatio="none"
				>
					<path
						d="M0,64 C240,16 480,16 720,64 C960,112 1200,112 1440,64 L1440,80 L0,80 Z"
						fill="#ffffff"
						opacity="0.9"
					/>
				</svg>
			</header>

			{/* Region & Highlights */}
			<section className="mx-auto max-w-6xl px-6 py-12">
				<FadeIn>
					<div className="grid gap-10 md:grid-cols-2">
						{/* Sticker grid */}
						<div>
							<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
								Why Guizhou
							</h2>
							<p className="mt-2 max-w-xl text-neutral-600">
								China’s only high-altitude, low-latitude, high-mist,
								low-sunshine tea plateau.
							</p>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								{meadow.highlights.map((h, idx) => (
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
						</div>

						{/* Process as playful list */}
						<div>
							<h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
								Production Process
							</h3>
							<p className="mt-2 max-w-md text-neutral-600">
								From shade to stone mill—how Meadow keeps its color and calm.
							</p>
							<div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-3">
								<Accordion type="single" collapsible className="w-full">
									{meadow.process.map((p, i) => (
										<AccordionItem key={i} value={`step-${i}`}>
											<AccordionTrigger className="text-left">
												{p.step}
											</AccordionTrigger>
											<AccordionContent>{p.details}</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</div>
					</div>
				</FadeIn>
			</section>

			{/* Grades */}
			<section id="grades" className="mx-auto max-w-6xl px-6 pb-12">
				<FadeIn>
					<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
						Our Grades
					</h2>
					<p className="mt-2 max-w-2xl text-neutral-600">
						Choose your profile. Sizes are flexible; samples on request.
					</p>
				</FadeIn>

				<div className="mt-8 space-y-6">
					{meadow.grades.map((g, i) => (
						<FadeIn key={g.key} delay={0.05 * i}>
							<div className="grid items-stretch gap-4 rounded-3xl border border-neutral-200 bg-white p-4 md:grid-cols-[2fr_1fr]">
								<div className="flex flex-col justify-between gap-4">
									<div>
										<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
											{g.name}
										</div>
										<h3 className="mt-3 text-xl font-semibold text-neutral-900">
											Origin: {g.origin}
										</h3>
										<dl className="mt-3 grid gap-3 text-sm text-neutral-700">
											<div>
												<dt className="font-medium text-neutral-900">
													Description
												</dt>
												<dd>{g.description}</dd>
											</div>
											<div>
												<dt className="font-medium text-neutral-900">Taste</dt>
												<dd>{g.taste}</dd>
											</div>
											<div>
												<dt className="font-medium text-neutral-900">Color</dt>
												<dd>{g.color}</dd>
											</div>
											<div>
												<dt className="font-medium text-neutral-900">Sizes</dt>
												<dd>{g.sizes}</dd>
											</div>
										</dl>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs">
												Shade-grown
											</span>
											<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs">
												Stone-milled
											</span>
										</div>
										<Button size="sm">Request Sample</Button>
									</div>
								</div>
								<div className="overflow-hidden rounded-2xl border border-neutral-200">
									<img
										src={g.photo}
										alt={`${g.name} matcha`}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</section>

			{/* Contact / Samples */}
			<section id="contact" className="mx-auto max-w-3xl px-6 py-12">
				<FadeIn>
					<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_#0000000d]">
						<div className="mb-4 flex items-center gap-2">
							<Mail className="h-5 w-5" />
							<h3 className="text-lg font-semibold">
								Samples & Wholesale Inquiries
							</h3>
						</div>
						<p className="mb-6 text-neutral-600">
							Tell us about your café or program, and we’ll tailor sizes and
							grades to your menu.
						</p>
						<form
							className="grid gap-4 md:grid-cols-2"
							onSubmit={async (e) => {
								e.preventDefault();
								const form = e.currentTarget as HTMLFormElement;
								const data = new FormData(form);
								const payload = Object.fromEntries(data.entries());
								try {
									const res = await fetch("/api/meadow-contact", {
										method: "POST",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify(payload),
									});
									if (!res.ok) throw new Error("Request failed");
									alert("Thanks! We’ll get back to you shortly.");
									form.reset();
								} catch (err) {
									alert(
										"Sorry—something went wrong. Please email hello@drinkmeadow.com."
									);
								}
							}}
						>
							<input
								type="text"
								name="_hp"
								className="hidden"
								tabIndex={-1}
								autoComplete="off"
							/>
							<div className="md:col-span-1">
								<label className="mb-1 block text-sm font-medium">Name</label>
								<Input name="name" required placeholder="Your name" />
							</div>
							<div className="md:col-span-1">
								<label className="mb-1 block text-sm font-medium">Email</label>
								<Input
									name="email"
									required
									type="email"
									placeholder="you@cafe.com"
								/>
							</div>
							<div className="md:col-span-1">
								<label className="mb-1 block text-sm font-medium">
									Business
								</label>
								<Input
									name="business"
									placeholder="Cafe / Restaurant / Retail"
								/>
							</div>
							<div className="md:col-span-1">
								<label className="mb-1 block text-sm font-medium">
									City / Country
								</label>
								<Input name="location" placeholder="e.g., Irvine, USA" />
							</div>
							<div className="md:col-span-2">
								<label className="mb-1 block text-sm font-medium">
									What are you looking for?
								</label>
								<Textarea
									name="message"
									rows={5}
									placeholder="Tell us about volumes, drinks, preferred grades, and packaging sizes."
								/>
							</div>
							<div className="md:col-span-2 flex items-center justify-between">
								<div className="text-xs text-neutral-500">
									By submitting, you agree to be contacted about Meadow products
									and pricing.
								</div>
								<Button type="submit" className="rounded-full">
									Send Request
								</Button>
							</div>
						</form>
					</div>
				</FadeIn>
			</section>

			{/* Footer */}
			<footer className="border-t bg-white/60">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
					<div className="flex items-center gap-2 text-sm text-neutral-600">
						<Factory className="h-4 w-4" />
						<span>Meadow • Guizhou matcha • Exporting to 30+ countries</span>
					</div>
					<div className="text-xs text-neutral-500">
						© {new Date().getFullYear()} Meadow. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
