import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <main className="max-w-screen-xl py-8 pt-24 lg:pr-4 overflow-auto pb-24 max-h-screen mx-auto flex flex-col justify-between ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
