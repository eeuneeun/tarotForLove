import type { Metadata } from "next";
import "./css/reset.css";
import "./css/globals.css";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
