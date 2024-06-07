import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { metadata } from "@/Components/MetaData/metadata";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/Components/Navbar/Nav";
import Footer from "@/Components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Nav />
            {children}
            <Footer />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
