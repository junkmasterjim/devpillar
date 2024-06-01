"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";

export const Footer = () => {
  return (
    <footer className="border-t-2 p-4 mt-16 pb-8">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium text-foreground capitalize tracking-tighter">
        DevPillar
      </h1>
      <div className="flex gap-4 justify-between flex-col sm:flex-row">
        <div className="w-full max-w-xl">
          <h2 className="xl:text-4xl sm:text-2xl text-xl font-medium capitalize text-foreground/80 tracking-tighter truncate">
            Quality resources & tools.
          </h2>
          <p className="text-muted-foreground">
            ©️ {new Date().getFullYear()} by{" "}
            <Link
              target="_blank"
              className="font-semibold hover:text-foreground transition-colors"
              href={"https://twitter.com/_pittman"}
            >
              @_pittman
            </Link>{" "}
            &amp;{" "}
            <Link
              target="_blank"
              className="font-semibold hover:text-foreground transition-colors"
              href={"https://twitter.com/_pittman"}
            >
              the people.
            </Link>
          </p>
          <iframe
            scrolling="no"
            src="https://embeds.beehiiv.com/083e2abd-d1cb-4d50-b5d5-3146de92c860?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            className="scale-[80%] overflow-hidden rounded-md w-full opacity-95 border origin-left mt-2 max-w-sm "
          />
          <div className="max-w-sm w-full mx-auto overflow-hidden"></div>
        </div>

        <div className="flex flex-col gap-2 text-muted-foreground">
          <p
            onClick={() => {
              navigator.clipboard.writeText("noah@devpillar.org");
              toast.success("Email copied to clipboard");
            }}
            className="font-semibold hover:text-foreground transition-colors cursor-pointer"
          >
            Contact
          </p>
          <Link
            href={"https://github.com/noahpittman/devpillar"}
            target="_blank"
            className="font-semibold hover:text-foreground transition-colors"
          >
            Contribute
          </Link>
          <Link
            href="/privacy-policy"
            className="font-semibold hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/tos"
            className="font-semibold hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
