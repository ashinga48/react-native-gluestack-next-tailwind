"use client";

import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/gluestack-ui-provider/index.web";

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
          <GluestackUIProvider mode="light" >{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
