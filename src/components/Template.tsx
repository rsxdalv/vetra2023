import React from "react";
import { Header } from "./Header";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const Template = ({ children }: { children: React.ReactNode }) => (
  <main
    className={`flex min-h-screen flex-col items-center justify-between p-12 space-y-4 ${inter.className}`}
  >
    <Header />
    {children}
  </main>
);
