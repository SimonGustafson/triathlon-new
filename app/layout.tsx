import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import { orbitron, exo2 } from "./fonts";

import "./globals.css"

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}> 
      <body className="flex flex-col p-8 min-h-screen bg-orange-100">
        <header>
          <NavBar />
        </header>
        <main className="grow">
          {children}
        </main>
        <footer className="border-t text-center py-2">
          Game data and images courtesy of <a href="https://rawg.io/" target="_blank" className="text-blue-500 hover:text-blue-800">RAWG</a>
        </footer>
      </body>
    </html>
  );
}
