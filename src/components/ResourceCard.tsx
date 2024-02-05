import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";

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
	category: (
		| "Boilerplate"
		| "Website Builder"
		| "npm"
		| "CSS"
		| "Components"
		| "Documentation"
		| "Backgrounds"
		| "Images"
		| "Video"
		| "UI/UX"
		| "Hooks"
		| "Authentication"
		| "Animations"
		| "CMS"
		| "API"
		| "AI"
		| "Database"
		| "Practice"
		| "SaaS"
		| "Design"
		| "Fonts"
	)[];
	url: string;
	paid: "Free" | "Paid" | "Free Plan Available";
	image: string;
}) => {
	return (
		<>
			<Card key={name} className="max-w-md">
				<CardHeader className="h-full justify-between space-y-2 p-4">
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
						<div className="w-full relative aspect-video bg-muted rounded-lg">
							<Image
								loading="lazy"
								placeholder="blur"
								blurDataURL={`${image}`}
								src={image}
								alt={name}
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
						<CardDescription>{description}</CardDescription>
					</div>

					{/* Badges */}
					<div>
						<div className="grid grid-flow-col justify-between items-end flex-wrap w-full ">
							<div className="flex flex-wrap gap-2">
								{category.map((cat) => (
									<Badge
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
