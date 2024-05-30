import "@/app/globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { resources } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          GeistSans.className,
          "overflow-hidden max-h-svh w-screen",
        )}
      >
        <>
          <Toaster position="top-center" />
          <ScrollToTop />
        </>

        <div className="grid w-full h-full bg-blue-50 grid-flow-col-dense">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
