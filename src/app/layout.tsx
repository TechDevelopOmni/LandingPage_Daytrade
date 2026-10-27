import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DayTrade Invest | Crédito Inteligente",
  description:
    "Site institucional para uma empresa do setor financeiro.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
