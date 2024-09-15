"use client";

import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider, GluestackConfig } from "@/components/gluestack-base";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="gs gs-dark">
      <body className={inter.className} style={{ display: "flex" }}>
        <StyledJsxRegistry>
          <GluestackUIProvider config={GluestackConfig}>{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
