"use client";

import { Inter } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/gluestack-ui-provider/index.web";

import { Provider } from 'react-redux'
import { store } from '@/shared/store/store'

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="gs gs-dark">
      <body className={inter.className} style={{ display: "block" }}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light" >
            <Provider store={store}>
            {children}
            </Provider>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
