import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppNav } from "@/src/components/server/AppNav/AppNav";
import { Provider } from "@/src/api/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description: "Check all your todos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNav />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
