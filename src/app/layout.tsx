import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import BackgroundAnimation from "@/components/BackgroundAnimation"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SchoolSync - A Parent Teacher Interaction Management System",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"inter.className"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
              <main className="flex flex-col antialiased bg-gradient-to-br from-indigo-200 to-indigo-700 dark:from-black dark:to-indigo-800">
              <BackgroundAnimation />
                {children}
                <Footer />
              </main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
