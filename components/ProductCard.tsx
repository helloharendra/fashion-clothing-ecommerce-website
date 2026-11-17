import Link from 'next/link'
import { inr } from '@/lib/utils'
import type { Product } from '@/lib/data'

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.id}`} className="group block">
      <div className="relative overflow-hidden bg-stone-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-[1.2s] group-hover:scale-105" />
        {p.tag && <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.15em] text-stone-900">{p.tag}</span>}
        <div className="absolute inset-x-3 bottom-3 flex translate-y-3 justify-center gap-1 bg-white/90 py-2.5 text-xs font-medium text-stone-700 opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">
          {p.sizes.map((s) => <span key={s} className="px-1.5">{s}</span>)}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-stone-900">{p.name}</p>
          <p className="mt-0.5 text-xs text-stone-500">{p.colors.length} colour{p.colors.length > 1 ? 's' : ''}</p>
        </div>
        <div className="text-right text-sm">
          <p className="font-semibold text-stone-900">{inr(p.price)}</p>
          {p.mrp && <p className="text-xs text-stone-400 line-through">{inr(p.mrp)}</p>}
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">{p.colors.map((c) => <span key={c.name} className="h-3 w-3 rounded-full ring-1 ring-stone-300" style={{ background: c.hex }} />)}</div>
    </Link>
  )
}
