import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"]
});

export const metadata: Metadata = {
  title: "Top app",
  description: "My description"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/image/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
