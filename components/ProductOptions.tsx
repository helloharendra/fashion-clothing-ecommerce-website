'use client'

import { useState } from 'react'
import { Heart, Ruler } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { useContact } from './ContactModal'
import type { Product } from '@/lib/data'

export default function ProductOptions({ p }: { p: Product }) {
  const { add } = useCart()
  const { openContact } = useContact()
  const [color, setColor] = useState(p.colors[0])
  const [size, setSize] = useState<string | null>(null)
  const [warn, setWarn] = useState(false)

  const addToBag = () => {
    if (!size) return setWarn(true)
    add({ id: `${p.id}-${color.name}-${size}`, name: p.name, price: p.price, image: p.image, variant: `${color.name} · Size ${size}` })
  }

  return (
    <div className="mt-8 space-y-7">
      <div>
        <p className="text-xs uppercase tracking-[.2em] text-stone-500">Colour · <span className="text-stone-900">{color.name}</span></p>
        <div className="mt-3 flex gap-3">
          {p.colors.map((c) => (
            <button key={c.name} onClick={() => setColor(c)} aria-label={c.name} className={`h-9 w-9 rounded-full ring-1 ring-stone-300 transition ${color.name === c.name ? 'ring-2 ring-stone-900 ring-offset-2' : ''}`} style={{ background: c.hex }} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className={`text-xs uppercase tracking-[.2em] ${warn && !size ? 'text-rose-700' : 'text-stone-500'}`}>{warn && !size ? 'Please select a size' : 'Size'}</p>
          <button onClick={() => openContact('Size Guide & Fit Finder')} className="flex items-center gap-1 text-xs text-stone-500 underline-offset-4 hover:underline"><Ruler className="h-3.5 w-3.5" /> Size guide</button>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {p.sizes.map((s) => (
            <button key={s} onClick={() => setSize(s)} className={`border py-3 text-sm transition ${size === s ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300 text-stone-700 hover:border-stone-900'}`}>{s}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={addToBag} className="btn flex-1 rounded-none bg-stone-900 py-4 text-xs uppercase tracking-[.2em] text-white hover:bg-stone-800">Add to bag</button>
        <button onClick={() => openContact('Wishlist')} aria-label="Wishlist" className="grid w-14 place-items-center border border-stone-300 hover:border-stone-900"><Heart className="h-5 w-5" /></button>
      </div>
    </div>
  )
}
