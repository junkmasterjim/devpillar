"use client";

import Image from "next/image";
import Link from "next/link";
import { Burger } from "./Navigation";
import { Button } from "./ui/button";
import { Inbox, LogIn, User } from "lucide-react";
import { ResponsiveDialog } from "./ResponsiveDialog";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

const Navbar = () => {
	const [isAuth, setIsAuth] = useState<boolean | null>(null);

	useEffect(() => {
		const getSession = async () => {
			const { data, error } = await supabase.auth.getSession();

			if (error) {
				console.error(error);
				setIsAuth(false);
			} else if (data) {
				if (data.session?.user) setIsAuth(true);
				else setIsAuth(false);
			}
		};

		getSession();
	}, []);

	return (
		<nav className="flex p-3 fixed z-50 bg-gradient-to-b from-background via-background/50 to-background/0 w-full justify-center backdrop-blur-lg backdrop-brightness-90 items-center select-none">
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

				<div className="lg:flex flex-row-reverse hidden items-center gap-4 pr-2">
					<ResponsiveDialog />

					{/* {isAuth !== true ? (
						<Button
							variant={"outline"}
							disabled={isAuth === null}
							className="text-muted-foreground"
							size={"sm"}
						>
							<Link
								id="signInLink"
								className="flex items-center gap-2"
								href={"/login"}
							>
								<LogIn className="h-5 w-5 rotate-180" />
								Sign In
							</Link>
						</Button>
					) : (
						<div>
							<Button
								variant={"outline"}
								disabled
								className="text-muted-foreground"
								size={"sm"}
								onClick={async () => {
									let { error } = await supabase.auth.signOut();
									if (!error) setIsAuth(false);
								}}
							>
								<User className="h-5 w-5 mr-2" />
								Profile
							</Button>
						</div>
					)} */}

					<Button
						variant={"outline"}
						asChild
						className="text-muted-foreground"
						size={"sm"}
					>
						<Link
							id="newsletterLink"
							className="flex items-center gap-2 scroll-smooth"
							scroll
							href={"#newsletter"}
						>
							<Inbox className=" h-5 w-5" />
							Newsletter
						</Link>
					</Button>
				</div>

				<div className="lg:hidden flex items-center gap-4">
					<Burger />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
