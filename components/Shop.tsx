'use client'

import { useState } from 'react'
import { products } from '@/lib/data'
import ProductCard from './ProductCard'

export default function Shop() {
  const [g, setG] = useState('All')
  const list = products.filter((p) => g === 'All' || p.gender === g || p.gender === 'Unisex')
  return (
    <>
      <div className="mb-10 flex justify-center gap-8 text-sm uppercase tracking-[.2em]">
        {['All', 'Women', 'Men'].map((x) => (
          <button key={x} onClick={() => setG(x)} className={`pb-1 transition ${g === x ? 'border-b border-stone-900 text-stone-900' : 'text-stone-400 hover:text-stone-700'}`}>{x}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.id} p={p} />)}</div>
    </>
  )
}
