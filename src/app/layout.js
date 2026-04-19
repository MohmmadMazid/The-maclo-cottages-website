import { Josefin_Sans } from "next/font/google";
import "../styles/globals.css"
import Header from "@/components/Header";

const josfin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});


export const metadata = {
  // title: "The Maclo Cottages",
  title: {
    template: "%s | The Maclo Cottages",
    default: "Welcome | The Maclo Cottages"
  },
  description: "Luxirious cottages hotel, located in the heart of Delhi India ,surrounded by beautifull sites and area",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body  className={`${josfin.className} h-full antialiased bg-primary-950 text-primary-100  min-h-screen flex flex-col relative`}>
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
