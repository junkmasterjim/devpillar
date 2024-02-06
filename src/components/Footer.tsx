import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Footer = () => {
	return (
		<footer className="mt-16 flex gap-4 flex-col">
			<Separator />
			<div>
				<div className="flex items-end justify-between">
					<ul className="flex gap-4">
						<Button
							disabled
							variant={"link"}
							className="text-muted-foreground hover:text-foreground px-0 disabled:line-through"
						>
							<Link href="/about">Contact</Link>
						</Button>
						<Button
							disabled
							variant={"link"}
							className="text-muted-foreground hover:text-foreground px-0 disabled:line-through"
						>
							<Link href="/about">Contribute</Link>
						</Button>
					</ul>

					<div className="flex items-end text-end gap-0.5 flex-col">
						<p>
							<span className="tracking-tight font-medium leading-none text-muted-foreground">
								Dev
							</span>
							Pillar
						</p>
						<p className="text-muted-foreground text-xs">
							© {new Date().getFullYear()} DevPillar
						</p>
						<p className="text-muted-foreground text-xs">
							Made with ❤️ by{" "}
							<Link
								className="text-foreground hover:underline"
								href={"https://github.com/noahpittman"}
							>
								Noah Pittman
							</Link>
						</p>
						{/* <p className="text-muted-foreground text-xs">
                    Resources by{" "}
                    <Link className="text-foreground hover:underline" href={""}>
                        the community
                    </Link>
                </p> */}
					</div>
				</div>
			</div>
		</footer>
	);
};
