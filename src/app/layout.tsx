import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        <Script id="leads2b-config" strategy="beforeInteractive">
          {`window.l2bConfig = { token: 'Yzc4ODE2MjUtNWIxZi00NzgzLWFjZmQtMjYwZmI0YTE0ZmNk', workerUrl: 'https://js.app.leads2b.com' };`}
        </Script>
        {children}
        <Script
          id="leads2b"
          src="https://js.app.leads2b.com/latest"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
