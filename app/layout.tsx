import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const font = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
