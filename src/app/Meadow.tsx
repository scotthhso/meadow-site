"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { Product } from "./Product";
import { details } from "framer-motion/client";

// -------- Data --------
const meadow = {
	brand: "Meadow",
	region: "Guizhou, China",
	highlights: [
		{
			icon: <Mountain className="h-5 w-5" />,
			title: "Unique Terroir",
			points: [
				"China’s only high-altitude, low-latitude, pollution-free plateau tea region",
				"Acidic, well-drained soils and a subtropical humid monsoon climate between the Yangtze and Pearl River basins, bringing natural clouds and mist.",
				"This unique ecology yields tea leaves rich in organic compounds, vivid in color, and naturally sweet.",
			],
		},
		{
			icon: <Sparkles className="h-5 w-5" />,
			title: "Proven Quality",
			points: [
				"Producers excel in physicochemical and hygiene indicators vs. national standards (Chinese Ministry of Agriculture & Rural Affairs)",
			],
		},
		// {
		// 	icon: <FlaskConical className="h-5 w-5" />,
		// 	title: "Clean growing practices",
		// 	points: ["NO synthetic pesticides, NO herbicides, NO insecticides"],
		// },
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
	const navRef = useRef<HTMLElement>(null);
	const [isStuck, setIsStuck] = useState(false);

	useEffect(() => {
		let rafId = 0;
		const handleScroll = () => {
			if (rafId) return;
			rafId = window.requestAnimationFrame(() => {
				rafId = 0;
				const top = navRef.current?.getBoundingClientRect().top ?? 0;
				setIsStuck(top <= 0);
			});
		};
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll);
		return () => {
			if (rafId) window.cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, []);

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
					className="font-title mt-10 flex min-h-16 w-full items-center justify-center px-4 text-center text-[clamp(2.75rem,12vw,5rem)] font-bold leading-[0.85] text-[#FFF8F0] drop-shadow-[0_4px_0_rgba(110,32,0,0.35)] sm:mt-14 md:mt-20"
				>
					Meadow Matcha
				</div>
				<div className="mt-6 flex w-full justify-center px-4 pb-10 sm:mt-8 sm:pb-12 md:mt-10 md:pb-16">
					<div
						ref={circleRef}
						className="circle-ripple relative h-[min(70vw,20rem)] w-[min(70vw,20rem)] rounded-full bg-[#42531D] sm:h-72 sm:w-72 md:h-80 md:w-80"
						onMouseMove={handleRippleMove}
						onMouseLeave={handleRippleLeave}
					>
						<span className="ripple-surface pointer-events-none absolute inset-0 rounded-full" />
						<span className="ripple-surface ripple-delay pointer-events-none absolute inset-0 rounded-full" />
					</div>
				</div>

				{/* wavy divider */}
				<svg
					className="-mb-px block w-full text-[length:0]"
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
			<nav
				ref={navRef}
				className={`sticky top-0 z-40 bg-[#FFF8F0] backdrop-blur transition-shadow ${
					isStuck ? "shadow-[0_6px_12px_-10px_#00000040]" : "shadow-none"
				}`}
			>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<ul
						className="font-condensed flex items-center justify-start gap-2 overflow-x-auto whitespace-nowrap py-3 text-sm sm:justify-center sm:gap-4 md:gap-6"
					>
						<li>
							<a
								href="#why"
								className="block rounded-full px-3 py-2 text-[0.95rem] font-bold text-[#42531D] transition-colors hover:text-neutral-900 sm:px-2 sm:py-1"
							>
								WHY MEADOW MATCHA
							</a>
						</li>
						<li>
							<a
								href="#process"
								className="block rounded-full px-3 py-2 text-[0.95rem] font-bold text-[#42531D] transition-colors hover:text-neutral-900 sm:px-2 sm:py-1"
							>
								PROCESS
							</a>
						</li>
						<li>
							<a
								href="#product"
								className="block rounded-full px-3 py-2 text-[0.95rem] font-bold text-[#42531D] transition-colors hover:text-neutral-900 sm:px-2 sm:py-1"
							>
								PRODUCT
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="block rounded-full px-3 py-2 text-[0.95rem] font-bold text-[#42531D] transition-colors hover:text-neutral-900 sm:px-2 sm:py-1"
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
			<Product meadow={meadow} />

			{/* Contact / Samples */}
			<section
				id="contact"
				className="mx-auto max-w-3xl scroll-mt-24 px-6 py-12"
			>
				<FadeIn>
					<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_1px_0_#0000000d]">
						<div className="mb-4 flex items-center gap-2">
							<Mail className="h-5 w-5" />
							<h3 className="font-condensed text-lg font-semibold">
								Samples & Wholesale Inquiries
							</h3>
						</div>
						<p className="mb-6 text-neutral-600">
							Tell us about your café or program, and we’ll tailor sizes and
							grades to your menu.
						</p>
						<form
							className="grid gap-4 md:grid-cols-2"
							onSubmit={(e) => {
								e.preventDefault();
								const form = e.currentTarget as HTMLFormElement;
								const data = new FormData(form);
								const getValue = (key: string) =>
									String(data.get(key) ?? "").trim();
								const name = getValue("name");
								const email = getValue("email");
								const business = getValue("business");
								const location = getValue("location");
								const message = getValue("message");
								const subject = `Meadow wholesale inquiry from ${name || "website visitor"}`;
								const body = [
									"Hello Meadow,",
									"",
									"I'd like to learn more about your matcha offerings.",
									"",
									`Name: ${name}`,
									`Email: ${email}`,
									`Business: ${business || "-"}`,
									`Location: ${location || "-"}`,
									"",
									"Inquiry:",
									message || "-",
								].join("\n");
								const mailtoUrl = `mailto:hello@drinkmeadow.com?subject=${encodeURIComponent(
									subject,
								)}&body=${encodeURIComponent(body)}`;

								try {
									window.location.href = mailtoUrl;
								} catch {
									alert(
										"Please email hello@drinkmeadow.com if your mail app did not open.",
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
