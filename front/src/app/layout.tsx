import type { Metadata } from "next";

import "./globals.css";
import NavBarComponent from "@/components/HeaderComponents/NavBarComponent/NavBarComponent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="sfRegular bg-white-200">
        <header className="flex justify-center w-full">
          <div className="absolute inset-0 -z-10 bg-image"></div>
          <div className="absolute inset-0 -z-10 bg-black opacity-40"></div>
          <NavBarComponent />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
