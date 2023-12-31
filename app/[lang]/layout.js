

// import dynamic from "next/dynamic";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google';
// const Header = dynamic(() => import("./header"), { ssr: false });
import Header from "./header";


import { AuthContextProvider } from "./context/authcontext";


// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }


export default function RootLayout({ children, params }) {




  return (
    <html lang={params?.lang}>
      <body>
        <AuthContextProvider>
          <Header lang={params?.lang} />
          <section>
            {children}
          </section>

        </AuthContextProvider>
      </body>
    </html>
  )
}
