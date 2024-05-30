import "@/app/globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
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
            <div className="max-h-svh overflow-y-auto w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
