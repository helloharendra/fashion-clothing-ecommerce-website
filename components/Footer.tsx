'use client'

import { useState } from 'react'
import { contact } from '@/lib/contact'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <footer className="mt-28 bg-stone-950 text-stone-400">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="font-display text-4xl italic text-white">Maison Vogue</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed">Considered clothing, made to last. Join the list for early access to new collections and members-only offers.</p>
          <form onSubmit={(e) => { e.preventDefault(); setDone(true) }} className="mt-6 flex max-w-md gap-2">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Your email" className="input rounded-full border-stone-700 bg-stone-900 text-white" />
            <button className="btn bg-white text-stone-900 hover:bg-stone-200">{done ? 'Subscribed ✓' : 'Join'}</button>
          </form>
        </div>
        <div className="grid grid-cols-3 gap-8 text-sm">
          {[['Shop', ['Women', 'Men', 'New in', 'Sale']], ['Help', ['Size guide', 'Shipping', 'Returns', 'Track order']], ['About', ['Our story', 'Sustainability', 'Stores', 'Careers']]].map(([t, ls]) => (
            <div key={t as string}><p className="text-xs font-semibold uppercase tracking-[.2em] text-white">{t as string}</p><ul className="mt-4 space-y-2.5">{(ls as string[]).map((l) => <li key={l}>{l}</li>)}</ul></div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} Maison Vogue · UI demo by <a href={contact.website} className="text-stone-200 underline-offset-4 hover:underline">Naya Prayog Technologies</a> · {contact.email}
      </div>
    </footer>
  )
}
