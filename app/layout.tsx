import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CORE FS COMP",
  description: "Sistem Manajemen Laptop Second FS Comp",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
