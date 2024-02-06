import { LucideIcon } from "lucide-react";
import { categories } from "../../resources";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export const Sidebar = () => {
	return (
		<div className="lg:flex flex-col hidden max-w-sm w-full pt-24">
			<div className="py-4 w-3/4">
				<Input
					disabled
					className="line-through"
					placeholder={"Search for a resource"}
				/>
			</div>

			<div className="flex flex-col w-3/4 overflow-auto max-w-sm max-h-[calc(100svh-99px)]">
				{categories.map((cat: { name: string; icon: LucideIcon }) => (
					<Button
						key={cat.name}
						asChild
						variant={"link"}
						className="my-1 text-left block text-muted-foreground hover:text-foreground transition-all"
					>
						<Link href={`/${cat.name}`}>
							<cat.icon className="h-4 w-4 mr-2 inline" />
							{cat.name}
						</Link>
					</Button>
				))}
			</div>
		</div>
	);
};

export const Burger = () => {};
