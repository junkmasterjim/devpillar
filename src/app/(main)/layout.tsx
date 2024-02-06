import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Sidebar } from "@/components/Navigation";
import { resources } from "../../../resources";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: `DevPillar | ${resources.length} Resources`,
	description:
		"A collection of resources for developers, designers, and creators. Find the best tools, libraries, and frameworks to build your next project. 🚀",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={(poppins.className, "overflow-hidden")}>
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

				<Navbar />
				<main className="flex px-2 max-w-screen-2xl mx-auto gap-4 justify-between max-h-screen">
					<Sidebar />
					<div className="max-w-screen-xl py-8 pt-24 lg:pr-4 overflow-auto mx-auto flex flex-col justify-between ">
						{children}
						<Footer />
					</div>
				</main>
			</body>
		</html>
	);
}
