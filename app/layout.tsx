import Link from "next/link"

import "@/styles/globals.css"

import { Inter } from "next/font/google"

import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <header>
              <div className="flex items-center justify-between gap-6 md:gap-10">
                <Link
                  href="https://hnsnml.co/"
                  className="flex items-center space-x-2"
                >
                  <span className="inline-block text-lg font-bold">
                    @hnsnml.co
                  </span>
                </Link>

                <nav className="ml-auto space-x-6 font-medium">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}