import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import ProductOptions from '@/components/ProductOptions'
import { getProduct, products } from '@/lib/data'
import { inr } from '@/lib/utils'

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const p = getProduct(params.id)
  if (!p) notFound()
  const more = products.filter((x) => x.id !== p.id).slice(0, 4)

  return (
    <div className="container-x py-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={p.image.replace('w=800', 'w=1000')} alt={p.name} className={`aspect-[3/4] w-full object-cover ${i === 0 ? 'col-span-2' : ''} ${i === 3 ? 'hidden' : ''}`} />
          ))}
        </div>
        <div className="lg:sticky lg:top-28 lg:h-fit animate-fade-up">
          <p className="text-xs uppercase tracking-[.3em] text-stone-500">{p.collection}</p>
          <h1 className="mt-3 font-display text-4xl text-stone-900">{p.name}</h1>
          <p className="mt-4 text-xl text-stone-900">{inr(p.price)} {p.mrp && <span className="ml-2 text-base text-stone-400 line-through">{inr(p.mrp)}</span>}</p>
          <p className="mt-1 text-xs text-stone-500">Inclusive of all taxes · Free shipping over ₹2,999</p>
          <ProductOptions p={p} />
          <div className="mt-10 divide-y divide-stone-200 border-y border-stone-200 text-sm">
            {[['Details', p.details], ['Fabric & care', 'Dry clean or gentle hand wash. Do not tumble dry. Iron on low heat.'], ['Shipping & returns', 'Dispatched in 24 hours. Free 15-day exchanges and easy returns.']].map(([t, d]) => (
              <details key={t} className="group py-4" open={t === 'Details'}>
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium uppercase tracking-[.15em] text-stone-900">{t}<span className="text-lg transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 leading-relaxed text-stone-600">{d}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-28">
        <h2 className="mb-10 text-center font-display text-4xl text-stone-900">Complete the look</h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">{more.map((m) => <ProductCard key={m.id} p={m} />)}</div>
      </section>
    </div>
  )
}
