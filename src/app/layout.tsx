import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
const oswald = Oswald({
	variable: "--font-condensed",
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});
const beautyRachela = localFont({
	src: "./BeautyRachela-Regular.otf",
	variable: "--font-beauty-rachela",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Meadow Matcha",
	description: "Bright matcha for calm, happy cups.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${beautyRachela.variable} ${oswald.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
