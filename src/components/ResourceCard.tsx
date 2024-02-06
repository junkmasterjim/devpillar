import Link from "next/link";
import { Badge } from "./ui/badge";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import { Resource } from "../../resources";

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
			<Card key={name} className="max-w-md max-h-96">
				<CardHeader className="justify-between space-y-2 p-4">
					<div className="space-y-4">
						<CardTitle>
							<Link
								href={url}
								target="_blank"
								className="flex items-center group"
							>
								{name}
								<ArrowUpRightFromSquare className="ml-2 inline h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
							</Link>
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

							<div className="">
								{paid == "Paid" && (
									<Badge
										className="font-normal opacity-50"
										variant={"secondary"}
									>
										$$$
									</Badge>
								)}
								{paid == "Free" && (
									<Badge
										className="font-normal opacity-50"
										variant={"secondary"}
									>
										Free
									</Badge>
								)}
								{paid == "Free Plan Available" && (
									<Badge
										className="font-normal opacity-50"
										variant={"secondary"}
									>
										Free Plan
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