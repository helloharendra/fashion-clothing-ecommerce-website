import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ContactProvider, DemoBar } from '@/components/ContactModal'
import { CartProvider } from '@/lib/cart'
import CartDrawer from '@/components/CartDrawer'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display', style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Maison Vogue – Fashion & Clothing E-commerce Demo | Naya Prayog Technologies',
  description: 'Premium fashion e-commerce website UI demo with lookbooks, size & colour selection, cart and checkout. Contact Naya Prayog Technologies for the complete project.',
}

const APP = 'Maison Vogue'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="bg-[#faf8f5] font-sans">
        <ContactProvider appName={APP}>
          <CartProvider>
            <DemoBar appName={APP} />
            <Header />
            <main>{children}</main>
            <Footer />
            <CartDrawer freeShippingAt={2999} />
          </CartProvider>
        </ContactProvider>
      </body>
    </html>
  )
}
