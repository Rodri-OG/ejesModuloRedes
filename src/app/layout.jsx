import Sidebar from '@/components/Sidebar'

import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ejes de comunicación',
  description: 'Ejes modulo redes sociales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
     <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
    <body>
      
      <div className={`${inter.className} grid grid-cols-1 grid-rows-[0.01fr_1fr_0.01fr]  md:grid-cols-[0.01fr_1fr] md:grid-rows-[1fr_0.1fr] w-screen h-screen gap-2 my-1 `} >
        <div className="row-start-1 row-end-2 h-full p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
            <Sidebar />
        </div>
        <main className="grid row-start-2 row-end-3 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 h-full w-full p-4 rounded-xl justify-items-center ">
          <div className="grid justify-items-center	w-full h-full">{children}</div>
        </main>

        <div className="row-start-3 row-end-4 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 p-2">
          <Footer/>
        </div>

      </div>
    </body>      
    </html>
  )
}
