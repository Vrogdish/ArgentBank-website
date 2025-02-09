import Header from "@/modules/header/Header";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/modules/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
