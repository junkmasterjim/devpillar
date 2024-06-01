"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import { SortSelect } from "./sort-select";
import { Dispatch, SetStateAction } from "react";

const RouteHeading = ({
  h1,
  h2,
  noSort = false,
  sort,
  setSort,
  extraHeadings,
}: {
  h1: string;
  h2: string;
  noSort?: boolean;
  sort: "A-Z" | "Z-A";
  setSort: Dispatch<SetStateAction<"A-Z" | "Z-A">>;
  extraHeadings?: React.ReactNode;
}) => {
  return (
    <div className="flex px-4 py-8 justify-center flex-col select-none border-b-2">
      <span>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
          {h1}
        </h1>
        <div className="flex place-items-start justify-between">
          <div>
            <h2 className="xl:text-4xl sm:text-2xl text-xl font-medium capitalize text-foreground/80 tracking-tighter">
              {h2}
            </h2>

            <div>{extraHeadings ?? null}</div>
          </div>

          <div className="flex gap-2 flex-col place-items-center">
            <Button variant={"ghost"} className="text-muted-foreground" asChild>
              <Link
                href={"https://github.com/noahpittman/devpillar/"}
                target="_blank"
              >
                <PlusCircle className="mr-2 size-4" />
                Add a resource
              </Link>
            </Button>

            {!noSort ? <SortSelect setSort={setSort} sort={sort} /> : null}
          </div>
        </div>
      </span>
    </div>
  );
};

export default RouteHeading;
