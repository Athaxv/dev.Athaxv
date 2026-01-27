import { Playfair_Display, JetBrains_Mono } from "next/font/google";

export const fontMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
    display: "swap",
});

export const fontSerif = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    style: ["italic"],
    display: "swap",
});
