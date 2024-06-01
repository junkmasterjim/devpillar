import "@/app/globals.css";

import { ScrollToTop } from "@/components/scroll-to-top";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { resources } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `DevPillar | ${resources.length} Resources`,
  description:
    "A collection of resources for developers, designers, and creators. Find the best tools, libraries, and frameworks to build your next project. 🚀",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.className,
          "overflow-hidden max-h-svh h-screen w-screen",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Toaster position="top-center" />
            <ScrollToTop />
          </>

          <div className="grid grid-flow-col xl:grid-cols-[360px,_1fr]">
            <Sidebar />
            <div className="max-h-svh overflow-y-auto w-full relative">
              <div className="h-96 absolute inset-0 bg-gradient-to-b from-secondary -z-50" />
              <Suspense>{children}</Suspense>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { toast } from "sonner";

const Footer = () => {
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
