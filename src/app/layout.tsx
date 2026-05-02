import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pavan Jinugu — Data Analyst",
  description: "Data Analyst specializing in sales analytics, KPI reporting, and business intelligence. SQL · Python · Power BI.",
  keywords: ["Data Analyst", "SQL", "Python", "Power BI", "Sales Analytics", "NIT Warangal"],
  authors: [{ name: "Pavan Jinugu" }],
  openGraph: {
    title: "Pavan Jinugu — Data Analyst",
    description: "Turning raw sales data into decisions that move revenue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
