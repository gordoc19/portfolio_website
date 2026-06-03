import "../global.css";
import { Metadata } from "next";
import { Navigation } from "./components/nav";

export const metadata: Metadata = {
  title: "Corin Gordon",
  description: "Portfolio",
  icons: {
    icon: "/peryl-nobg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
