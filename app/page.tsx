import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Shop from '@/components/Shop'
import { collections } from '@/lib/data'
import { img } from '@/lib/utils'

export default function Home() {
  return (
    <>
      {/* Editorial hero */}
      <section className="container-x grid gap-6 pt-6 lg:grid-cols-12">
        <div className="relative overflow-hidden lg:col-span-7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img('1539109136881-3be0616acf4b', 1400)} alt="Autumn/Winter collection" className="h-[620px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 p-8 text-white sm:p-12 animate-fade-up">
            <p className="text-xs uppercase tracking-[.3em] text-white/80">Autumn / Winter 2026</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">The art of<br /><em>quiet luxury</em></h1>
            <Link href="#shop" className="btn mt-8 rounded-none bg-white px-8 py-4 text-xs uppercase tracking-[.2em] text-stone-900 hover:bg-stone-100">Shop the collection</Link>
          </div>
        </div>
        <div className="grid gap-6 lg:col-span-5">
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('1529139574466-a303027c1d8b', 900)} alt="Women" className="h-[298px] w-full object-cover" />
            <Link href="#shop" className="absolute bottom-5 left-5 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[.2em] text-stone-900">Women</Link>
          </div>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img('1617137968427-85924c800a22', 900)} alt="Men" className="h-[298px] w-full object-cover" />
            <Link href="#shop" className="absolute bottom-5 left-5 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[.2em] text-stone-900">Men</Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden border-y border-stone-200 py-4">
        <p className="whitespace-nowrap text-center font-display text-2xl italic text-stone-400">
          Free shipping over ₹2,999 · Easy 15-day exchanges · Ethically made · Members get early access ·
        </p>
      </div>

      {/* Collections */}
      <section className="container-x mt-24">
        <div className="text-center"><p className="text-xs uppercase tracking-[.3em] text-stone-500">Curated for you</p><h2 className="mt-3 font-display text-4xl text-stone-900 sm:text-5xl">Shop by collection</h2></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((c) => (
            <Link key={c.name} href="#shop" className="group relative block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display text-2xl">{c.name}</p>
                <p className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[.2em] text-white/80">{c.sub} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section id="shop" className="container-x mt-28 scroll-mt-24">
        <div className="mb-8 text-center"><p className="text-xs uppercase tracking-[.3em] text-stone-500">Just landed</p><h2 className="mt-3 font-display text-4xl text-stone-900 sm:text-5xl">New arrivals</h2></div>
        <Shop />
      </section>

      {/* Story */}
      <section className="container-x mt-28 grid items-center gap-12 lg:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img('1434389677669-e08b4cac3105', 1000)} alt="Our atelier" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[.3em] text-stone-500">Our story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-stone-900 sm:text-5xl">Made slowly.<br /><em>Worn endlessly.</em></h2>
          <p className="mt-6 max-w-lg leading-relaxed text-stone-600">Every piece is designed in our studio and crafted by small ateliers using natural fibres and fair practices. Fewer, better things, made for the long run.</p>
          <Link href="#shop" className="btn mt-8 rounded-none bg-stone-900 px-8 py-4 text-xs uppercase tracking-[.2em] text-white hover:bg-stone-800">Discover more</Link>
        </div>
      </section>
    </>
  )
}
