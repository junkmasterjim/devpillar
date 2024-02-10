import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export const SignInButton = () => {
	return (
		<Button variant={"outline"} className="text-muted-foreground" size={"sm"}>
			<Link
				id="signInLink"
				className="flex items-center gap-2"
				href={"/signin"}
			>
				<LogIn className=" h-5 w-5 rotate-180" />
				Sign In
			</Link>
		</Button>
	);
};
