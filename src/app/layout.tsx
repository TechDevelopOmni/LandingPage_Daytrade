import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soluções Financeiras",
  description:
    "Site institucional para uma empresa do setor financeiro.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
