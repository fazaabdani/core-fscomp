import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CORE FS COMP",
  description: "Sistem Manajemen Laptop FS Comp",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
