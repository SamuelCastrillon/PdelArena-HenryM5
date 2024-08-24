import type { Metadata } from "next";

import "./globals.css";
import NavBarComponent from "@/components/HeaderComponents/NavBarComponent/NavBarComponent";
import BackGroudComponent from "@/components/GeneralComponents/BackGroudComponent/BackGroudComponent";
import Footer from "@/components/FooterComponent/Footer";
import GlobalContext from "@/context/GlobalContext";

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
      <GlobalContext>
        <body className="flex relative sfRegular bg-white-200 min-h-screen flex-col justify-between">
          <BackGroudComponent />
          <header className="flex justify-center w-full">
            <NavBarComponent />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContext>
    </html>
  );
}