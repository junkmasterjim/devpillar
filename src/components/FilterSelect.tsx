import { Category, categories } from "../../resources";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";

export const FilterSelect = ({
	filter,
	setFilter,
}: {
	// change this to change the type of the filter state
	filter: Category["name"] | "none";
	setFilter: (filter: Category["name"] | "none") => void;
}) => {
	return (
		<Select
			onValueChange={(e: Category["name"] | "none") => setFilter(e)}
			defaultValue={filter}
		>
			<SelectTrigger className="w-fit max-w-[24ch] items-center text-start  focus-visible:ring-0 focus-visible:bg-primary/15">
				<SelectValue placeholder="Filter: " />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel></SelectLabel>
					<SelectItem value={"none"}>
						<span className="text-muted-foreground">Filter: </span>
						None
					</SelectItem>
					<div className="py-4">
						<Separator />
					</div>
					{categories.map((category) => (
						<SelectItem value={category.name} className="truncate">
							<span className="text-muted-foreground">Filter: </span>
							{category.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
