import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="flex p-2 fixed z-50 bg-gradient-to-b from-background via-background/50 to-background/0 w-full justify-center backdrop-blur-lg backdrop-brightness-90 items-center py-2 ">
			<div className="flex max-w-screen-2xl justify-between items-center w-full px-2">
				<div className="select-none">
					<Link
						href={"/"}
						className="text-2xl tracking-tight font-medium flex gap-2"
					>
						<Image
							alt="DevPillar Logo"
							width={32}
							height={32}
							src={"/logo.png"}
						/>
						<p>
							<span className="text-muted-foreground">Dev</span>Pillar
						</p>
					</Link>
				</div>
				<div className="flex items-center gap-4">
					{/* <Button>Add Resource</Button> */}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
