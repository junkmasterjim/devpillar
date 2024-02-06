import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sidebar } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<body className={"overflow-hidden max-h-screen"}>
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

			<Navbar />
			<main className="flex px-2 max-w-screen-2xl mx-auto gap-4 justify-between max-h-screen">
				<Sidebar />
				<div className="max-w-screen-xl text-center py-8 pt-24 lg:pr-4 overflow-auto mx-auto ">
					<h1 className="text-4xl font-medium text-foreground">
						404 - Page Not Found
					</h1>
					<p className="text-muted-foreground">
						We couldn&apos;t find the page you were looking for.
					</p>

					<div className="mt-4">
						<Button asChild variant={"outline"}>
							<Link href={"/"}>Return to Home</Link>
						</Button>
					</div>
				</div>
			</main>
		</body>
	);
}
