"use client";

import React, { useRef } from "react";
import Image from "next/image";
import meadowHero from "./meadowhero.png";
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
import { WhySection } from "./WhySection";
import { details } from "framer-motion/client";

// -------- Data --------
const meadow = {
	brand: "Meadow",
	region: "Guizhou, China",
	highlights: [
		{
			icon: <Mountain className="h-5 w-5" />,
			title: "Unique terroir",
			points: [
				"China’s only high-altitude, low-latitude, pollution-free plateau tea region",
				"1000+ m average elevation with 92.5% mountainous terrain",
				"Acidic, well-drained soils and a subtropical humid monsoon climate between the Yangtze and Pearl River basins, bringing natural clouds and mist.",
				"This unique ecology yields tea leaves rich in organic compounds, vivid in color, and naturally sweet.",
			],
		},
		{
			icon: <FlaskConical className="h-5 w-5" />,
			title: "Clean growing practices",
			points: ["NO synthetic pesticides, NO herbicides, NO insecticides"],
		},
		{
			icon: <Sparkles className="h-5 w-5" />,
			title: "Proven Quality",
			points: [
				"Producers excel in physicochemical and hygiene indicators vs. national standards (Chinese Ministry of Agriculture & Rural Affairs)",
				"EU standard compliant",
			],
		},
	],
	certifications: ["EU Food Safety Compliant"],

	grades: [
		{
			key: "ceremonial",
			name: "Ceremonial",
			photo: "https://placehold.co/800x600?text=Ceremonial+Matcha",
			description:
				"Youngest first-harvest leaves, shade-grown and traditional stone-milled.",
			taste: "Smooth texture with natural sweetness and layered umami.",
			color: "Vibrant, bright jade green.",
			samples: true,
		},
		{
			key: "barista",
			name: "Barista Grade",
			photo: "https://placehold.co/800x600?text=Barista+Grade+Matcha",
			description:
				"Shade-grown, stone-milled first harvest with more character—perfect for lattes and blended drinks.",
			taste: "Mildly sweet, creamy body with light astringency for balance.",
			color: "Deep green that stays vivid in milk.",
			samples: true,
		},
	],
	process: [
		{
			step: "Shade-Grown First Harvest",
			details:
				"Tea gardens are shaded for 3–4 weeks to boost chlorophyll, L-theanine, and sweetness, then only tender first-flush leaves are hand-picked at peak freshness.",
		},
		{
			step: "Gentle Withering & Pre-Sort",
			details:
				"Fresh leaves are lightly aerated to slow enzymatic browning, then pre-cleaned to remove old stems, foreign matter, and broken or wrapped leaves for a uniform feed.",
		},
		{
			step: "Steam-Fix, Cool & Tencha Drying",
			details:
				"Rapid steaming (sha-qing) deactivates enzymes to lock in green color, aroma precursors, and umami, followed by forced-air cooling and primary tencha roasting for even dehydration.",
		},
		{
			step: "Separation & Shiage Finishing",
			details:
				"Moisture/weight-based sorting removes stems (kuki), while shiage finishing de-veins midribs and sizes the leaf lamina to tencha specifications.",
		},
		{
			step: "Conditioning, Refining & Lot Standardization",
			details:
				"Moisture is brought to a precise target for stable storage and consistent milling, then multi-stage refining removes residual stems and impurities as lots are blended to color, aroma, and taste profiles.",
		},
		{
			step: "Granite Stone-Milling",
			details:
				"Tencha is slow-milled on granite into ultra-fine matcha, protecting aromatics and yielding a silky powder that whisks to a dense, creamy foam.",
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
	const circleRef = useRef<HTMLDivElement>(null);

	const handleRippleMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const node = circleRef.current;
		if (!node) return;
		const rect = node.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;
		node.style.setProperty("--ripple-x", `${x}%`);
		node.style.setProperty("--ripple-y", `${y}%`);
	};

	const handleRippleLeave = () => {
		const node = circleRef.current;
		if (!node) return;
		node.style.setProperty("--ripple-x", "50%");
		node.style.setProperty("--ripple-y", "50%");
	};

	return (
		<div className="min-h-screen bg-meadow-50 text-neutral-800">
			{/* Header / Hero */}
			<header className="relative overflow-hidden  bg-[#D64B00]">
				<div
					className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
					style={{
						backgroundImage:
							"repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0 1px, transparent 31px 2.6px)",
					}}
					aria-hidden
				/>
				<div
					className="mt-20 font-title flex h-20 w-full items-center justify-center"
					style={{
						fontSize: "80px",
						fontWeight: "700",
						lineHeight: "40px",
						color: "#FFF8F0",
						textShadow: "-3px 3px 0 rgba(110, 32, 0, 0.45)",
					}}
				>
					Meadow Matcha
				</div>
				<div className="mt-10 flex w-full justify-center pb-16">
					<div
						ref={circleRef}
						className="circle-ripple relative h-80 w-80 rounded-full bg-[#42531D]"
						onMouseMove={handleRippleMove}
						onMouseLeave={handleRippleLeave}
					>
						<span className="ripple-surface pointer-events-none absolute inset-0 rounded-full" />
						<span className="ripple-surface ripple-delay pointer-events-none absolute inset-0 rounded-full" />
					</div>
				</div>

				{/* wavy divider */}
				<svg
					className="text-[length:0]"
					aria-hidden
					viewBox="0 0 1440 80"
					preserveAspectRatio="none"
				>
					<path
						d="M0,42 C240,4 480,4 720,42 C960,80 1200,80 1440,42 L1440,80 L0,80 Z"
						fill="#FFF8F0"
						// opacity="0.9"
					/>
				</svg>
			</header>
			<nav className="sticky top-0 z-40 bg-[#FFF8F0] backdrop-blur pt-4">
				<div className="mx-auto max-w-6xl px-6">
					<ul
						className="flex flex-wrap gap-6 py-3 text-sm"
						style={{ justifyContent: "center" }}
					>
						<li>
							<a
								href="#why"
								className="text-[#42531D] hover:text-neutral-900 font-bold"
								style={{ fontSize: "16px" }}
							>
								WHY MEADOW MATCHA
							</a>
						</li>
						<li>
							<a
								href="#process"
								className="text-[#42531D] hover:text-neutral-900 font-bold"
								style={{ fontSize: "16px" }}
							>
								PROCESS
							</a>
						</li>
						<li>
							<a
								href="#product"
								className="text-[#42531D] hover:text-neutral-900 font-bold"
								style={{ fontSize: "16px" }}
							>
								PRODUCT
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="text-[#42531D] hover:text-neutral-900 font-bold"
								style={{ fontSize: "16px" }}
							>
								CONTACT
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* Region & Highlights */}
			<WhySection meadow={meadow} />

			{/* Grades */}
			<div className="bg-[#FFF8F0]">
				<section
					id="product"
					className="mx-auto max-w-6xl scroll-mt-24 px-6 py-12 pb-12"
				>
					<FadeIn>
						<div>
							<h2 className="text-3xl font-semibold tracking-tight text-[#42531D]">
								Product
							</h2>
							<p className="text-neutral-800">Origin: Guizhou</p>
						</div>
						<p className="mt-2 max-w-2xl text-neutral-600">
							Choose your profile. Sizes are flexible; samples on request.
						</p>
					</FadeIn>

					<div className="mt-8 grid gap-6 md:grid-cols-2">
						{meadow.grades.map((g, i) => (
							<FadeIn key={g.key} delay={0.05 * i}>
								<div className="grid items-stretch gap-4 rounded-3xl border border-neutral-200 bg-white p-4 md:grid-cols-[7fr_3fr]">
									<div className="min-w-0 flex flex-col justify-between gap-4">
										<div>
											<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-base text-emerald-800">
												{g.name}
											</div>
											<dl className="mt-3 grid gap-3 text-lg text-neutral-700">
												<div>
													<dt className="font-medium text-neutral-900">
														Description
													</dt>
													<dd style={{ fontSize: 16 }}>{g.description}</dd>
												</div>
												<div>
													<dt className="font-medium text-neutral-900">
														Taste
													</dt>
													<dd style={{ fontSize: 16 }}>{g.taste}</dd>
												</div>
												<div>
													<dt className="font-medium text-neutral-900">
														Color
													</dt>
													<dd style={{ fontSize: 16 }}>{g.color}</dd>
												</div>
											</dl>
										</div>
									</div>
									<div className="overflow-hidden rounded-2xl border border-neutral-200">
										<img
											src={g.photo}
											alt={`${g.name} matcha`}
											className=" object-cover"
											style={{ width: "100%", height: "100%" }}
											loading="lazy"
										/>
									</div>
								</div>
							</FadeIn>
						))}
					</div>
				</section>
			</div>
			{/* Contact / Samples */}
			<section
				id="contact"
				className="mx-auto max-w-3xl scroll-mt-24 px-6 py-12"
			>
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
										"Sorry—something went wrong. Please email hello@drinkmeadow.com.",
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
