'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Header from './component/Header'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Header />
          {children}
        </Provider>
        </body>
    </html>
  )
}
