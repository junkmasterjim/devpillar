import "../globals.css";
import { Navbar, Sidebar } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={"overflow-hidden"}>
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

				<Navbar />
				<main className="flex px-4 max-w-screen-2xl mx-auto gap-4 justify-between max-h-screen">
					<div
						id="mainContent"
						className="max-w-screen-xl w-full py-8 pt-24 lg:pr-4 overflow-auto mx-auto flex flex-col justify-between "
					>
						<div className="min-h-screen">{children}</div>
						<Footer />
					</div>
				</main>
			</body>
		</html>
	);
}
