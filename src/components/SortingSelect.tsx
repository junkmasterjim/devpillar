// This component takes a sort state and a setSort function as props and returns a Select component with two options:
// A-Z and Z-A. The value of the Select component is the sort state and the onValueChange function is the setSort function.

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export const SortingSelect = ({
	sort,
	setSort,
}: {
	// change this to change the type of the sort state
	sort: "A-Z" | "Z-A";
	setSort: (sort: "A-Z" | "Z-A") => void;
}) => {
	return (
		<Select
			onValueChange={(e: "A-Z" | "Z-A") => setSort(e)}
			defaultValue={sort}
		>
			<SelectTrigger className="w-fit focus-visible:ring-0 focus-visible:bg-primary/15">
				<SelectValue placeholder="Sort by: " />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel></SelectLabel>
					<SelectItem value={"A-Z"}>
						<span className="text-muted-foreground">Sort by: </span>
						A-Z
					</SelectItem>
					<SelectItem value={"Z-A"}>
						<span className="text-muted-foreground">Sort by: </span>
						Z-A
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
