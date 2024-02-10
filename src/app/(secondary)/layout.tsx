import Navbar from "@/components/Navbar";
import "../globals.css";

export const metadata = {
	title: "DevPillar | Request Log",
	description:
		"The DevPillar request log. A collection of resources requested by the community. 🚀",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="overflow-hidden">
				<div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
				<main className="max-w-screen-xl py-8 pt-24 lg:pr-4 overflow-auto pb-24 max-h-screen mx-auto flex flex-col justify-between ">
					{children}
				</main>
			</body>
		</html>
	);
}
