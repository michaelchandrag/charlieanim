import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: ["sans"],
  display: "swap"
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  fallback: ["sans"],
  display: "swap"
});

export const metadata = {
  title: "Lexovate",
  description: "Empowering You to Build Smarter DeFi Agents",
};

// export const viewport = {
//   // width: 'device-width',
//   // initialScale: 1,
//   // maximumScale: 1,
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
