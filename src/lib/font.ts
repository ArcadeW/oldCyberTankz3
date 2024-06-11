import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const distopianFont = localFont({
  src: "./fonts/SD-Dystopian.otf",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });
