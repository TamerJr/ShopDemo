import Navbar from "./Components/Navbar";
import { ProdContextProvider } from "./context/Context";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Demo Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProdContextProvider>
        <body className={inter.className}>
          <Navbar/>
          {children}
          </body>
      </ProdContextProvider>
    </html>
  );
}
