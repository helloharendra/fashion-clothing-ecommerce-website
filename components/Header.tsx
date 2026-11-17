'use client'

import Link from 'next/link'
import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useContact } from './ContactModal'

const links = ['New In', 'Women', 'Men', 'Collections', 'Sale']

export default function Header() {
  const { count, setOpen } = useCart()
  const { openContact } = useContact()
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf8f5]/85 backdrop-blur-xl">
      <div className="container-x grid h-20 grid-cols-[1fr_auto_1fr] items-center">
        <nav className="hidden gap-7 text-[13px] font-medium uppercase tracking-[.15em] text-stone-600 lg:flex">
          {links.map((l) => <Link key={l} href="/#shop" className={`hover:text-stone-900 ${l === 'Sale' ? 'text-rose-700' : ''}`}>{l}</Link>)}
        </nav>
        <span className="lg:hidden" />
        <Link href="/" className="text-center font-display text-3xl italic tracking-tight text-stone-900">Maison Vogue</Link>
        <div className="flex items-center justify-end gap-1 text-stone-700">
          <button onClick={() => openContact('Smart Product Search')} className="rounded-full p-2.5 hover:bg-stone-100" aria-label="Search"><Search className="h-5 w-5" /></button>
          <button onClick={() => openContact('Customer Accounts')} className="hidden rounded-full p-2.5 hover:bg-stone-100 sm:block" aria-label="Account"><User className="h-5 w-5" /></button>
          <button onClick={() => openContact('Wishlist')} className="hidden rounded-full p-2.5 hover:bg-stone-100 sm:block" aria-label="Wishlist"><Heart className="h-5 w-5" /></button>
          <button onClick={() => setOpen(true)} className="relative rounded-full p-2.5 hover:bg-stone-100" aria-label="Bag">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && <span className="absolute right-0.5 top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-stone-900 px-1 text-[10px] font-bold text-white">{count}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}
