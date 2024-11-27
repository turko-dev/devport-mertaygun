import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lex = localFont({
  src: "./fonts/Lexend-VariableFont_wght.ttf",
  variable: "--lex",
  weight: "100 900",
});
const title = localFont({
  src: "./fonts/DynaPuff-VariableFont_wdth,wght.ttf",
  variable: "--title",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Mert Aygun",
  description: "Mert Aygun is a Full-Stack Web-Developer & Software Engineer based in Manchester, UK. Currently busy with many projects but you can keep up to date with what I do through my Instagram & LinkedIn pages.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lex.variable} ${title.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
