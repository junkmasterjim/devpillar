import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="flex w-full justify-center backdrop-blur-md items-center py-2 ">
			<div className="flex max-w-screen-2xl justify-between items-center w-full">
				<div className="select-none">
					<h1 className="text-2xl tracking-tight font-medium">
						<span className="text-muted-foreground">dev</span>Pillar
					</h1>
				</div>
				<div className="flex items-center gap-4">
					<Button>Add Resource</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
