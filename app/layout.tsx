import type { Metadata } from "next";
import "./globals.css";
import DarkToggle from "./components/darkmodetoggle";

export const metadata: Metadata = {
  title: "Timer App",
  description: "Timer App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,0,1;wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={'antialiased'}>
      <DarkToggle />
        {children}
      </body>
    </html>
  );
}
