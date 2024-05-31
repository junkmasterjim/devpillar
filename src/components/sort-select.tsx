import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SortAsc, SortDesc } from "lucide-react";

export const SortSelect = ({
  sort,
  setSort,
  side = "left",
  className,
}: {
  sort: "A-Z" | "Z-A";
  setSort: (sort: "A-Z" | "Z-A") => void;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}) => {
  return (
    <Select
      onValueChange={(e: "A-Z" | "Z-A") => setSort(e)}
      defaultValue={sort}
    >
      <SelectTrigger className={cn("w-fit bg-secondary", className)}>
        {sort === "A-Z" ? (
          <SortDesc className="mr-2 size-4" />
        ) : (
          <SortAsc className="mr-2 size-4" />
        )}
        <span>Sort by: {sort || "A-Z"}</span>
      </SelectTrigger>
      <SelectContent side={side} className="p-0">
        <SelectItem value={"A-Z"}>
          <span className="text-muted-foreground">Sort by: </span>
          A-Z
        </SelectItem>
        <SelectItem value={"Z-A"}>
          <span className="text-muted-foreground">Sort by: </span>
          Z-A
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
