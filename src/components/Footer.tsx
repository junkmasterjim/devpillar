import Link from "next/link";
import { Separator } from "./ui/separator";

export const Footer = () => {
	return (
		<footer className="mt-16 pb-16 flex gap-4 flex-col">
			<Separator />
			<div>
				<div className="flex items-end gap-4 justify-between">
					<ul className="flex leading-none flex-wrap gap-4">
						<Link
							className="hover:text-foreground font-medium
								line-through pointer-events-none text-muted"
							href="/contact"
						>
							Contact
						</Link>
						<Link
							className="hover:text-foreground font-medium
								line-through pointer-events-none text-muted"
							href="/contact"
						>
							Contribute
						</Link>
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
								target="_blank"
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
