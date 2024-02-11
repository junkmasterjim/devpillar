import Link from "next/link";
import { Badge } from "./ui/badge";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRightFromSquare, Bookmark } from "lucide-react";
import Image from "next/image";
import { Resource } from "../../resources";
import { Button } from "./ui/button";
import { toast } from "sonner";

const ResourceCard = ({
	name,
	description,
	category,
	url,
	paid,
	image,
}: {
	name: string;
	description: string;
	category: Resource["category"];
	url: string;
	paid: "Free" | "Paid" | "Free Plan Available";
	image: string;
}) => {
	return (
		<>
			<Card key={name} className="max-w-md max-h-[30rem]">
				<CardHeader className="space-y-2 p-4 justify-between h-full">
					<div className="space-y-4">
						<CardTitle className="grid auto-cols-min grid-cols-1 grid-flow-col justify-between ">
							<Link
								href={url}
								target="_blank"
								className="flex items-center group"
							>
								{name}
								<ArrowUpRightFromSquare className="ml-2 inline h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
							</Link>
							<Button
								variant={"ghost"}
								size={"icon"}
								className=""
								onClick={() => {
									toast.info("Feature coming soon!", { duration: 1500 });
								}}
							>
								<Bookmark
									className="h-4 w-4 
								-fill-yellow-500 -text-yellow-500
								"
								/>
							</Button>
						</CardTitle>

						<div className="w-full relative aspect-video bg-muted rounded-lg hover:opacity-90 transition-opacity">
							<Link href={url} target="_blank">
								<Image
									loading="lazy"
									placeholder="blur"
									blurDataURL={`${image}`}
									src={image}
									alt={name}
									fill
									className="rounded-lg object-cover"
								/>
							</Link>
						</div>
						<CardDescription>{description}</CardDescription>
					</div>

					{/* Badges */}
					<div>
						<div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
							<div className="flex flex-wrap gap-2">
								{category.map((cat) => (
									<Badge
										key={Math.random()}
										className="font-medium opacity-75"
										variant={"secondary"}
									>
										{cat}
									</Badge>
								))}
							</div>
							<div className="invert">
								{paid == "Paid" && (
									<Badge
										className="font-normal opacity-100"
										variant={"secondary"}
									>
										$$$
									</Badge>
								)}
								{paid == "Free" && (
									<Badge
										className="font-normal opacity-100"
										variant={"secondary"}
									>
										Free
									</Badge>
								)}
								{paid == "Free Plan Available" && (
									<Badge
										className="font-normal opacity-100"
										variant={"secondary"}
									>
										Free Plan Available
									</Badge>
								)}
							</div>
						</div>
					</div>
				</CardHeader>
			</Card>
		</>
	);
};

export default ResourceCard;
