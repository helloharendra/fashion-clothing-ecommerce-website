import { img } from './utils'

// Sample catalogue for the UI demo. The complete project loads products from the admin panel / database.
export type Product = {
  id: string
  name: string
  collection: string
  gender: 'Women' | 'Men' | 'Unisex'
  price: number
  mrp?: number
  image: string
  colors: { name: string; hex: string }[]
  sizes: string[]
  tag?: string
  details: string
}

const S = ['XS', 'S', 'M', 'L', 'XL']

export const products: Product[] = [
  { id: 'aviator-leather-jacket', name: 'Aviator Leather Jacket', collection: 'Outerwear', gender: 'Men', price: 8999, mrp: 11999, image: img('1551028719-00167b16eac5'), colors: [{ name: 'Onyx', hex: '#1c1917' }, { name: 'Cognac', hex: '#92400e' }], sizes: S, tag: 'Bestseller', details: 'Full-grain lambskin leather, quilted satin lining and antique brass hardware.' },
  { id: 'satin-jogger-trousers', name: 'Satin Jogger Trousers', collection: 'Summer Edit', gender: 'Women', price: 4499, image: img('1594633312681-425c7b97ccd1'), colors: [{ name: 'Blush', hex: '#e8a598' }, { name: 'Sage', hex: '#9ca986' }, { name: 'Ivory', hex: '#f5f0e6' }], sizes: S, tag: 'New', details: 'Fluid satin with an elasticated waist, cuffed hems and deep side pockets.' },
  { id: 'rust-bomber-jacket', name: 'Rust Bomber Jacket', collection: 'Outerwear', gender: 'Unisex', price: 5999, mrp: 7499, image: img('1591047139829-d91aecb6caea'), colors: [{ name: 'Rust', hex: '#b4532a' }, { name: 'Olive', hex: '#4d5d3a' }], sizes: S, details: 'Lightweight water-repellent shell with ribbed trims and a utility sleeve pocket.' },
  { id: 'printed-chambray-shirt', name: 'Printed Chambray Shirt', collection: 'Essentials', gender: 'Men', price: 2499, image: img('1596755094514-f87e34085b2c'), colors: [{ name: 'Chambray', hex: '#4b6a8c' }, { name: 'White', hex: '#fafafa' }], sizes: S, details: 'Soft chambray cotton with an all-over micro print. Relaxed fit.' },
  { id: 'essential-tee', name: 'Organic Essential Tee', collection: 'Essentials', gender: 'Unisex', price: 1299, image: img('1521572163474-6864f9cf17ab'), colors: [{ name: 'White', hex: '#fafafa' }, { name: 'Black', hex: '#111' }, { name: 'Clay', hex: '#c2410c' }], sizes: S, tag: 'Restocked', details: '220 GSM organic cotton jersey with a structured, relaxed fit.' },
  { id: 'selvedge-denim', name: 'Selvedge Straight Denim', collection: 'Denim', gender: 'Men', price: 3999, mrp: 4999, image: img('1542272604-787c3835535d'), colors: [{ name: 'Indigo', hex: '#1e3a8a' }], sizes: ['28', '30', '32', '34', '36'], details: '13.5 oz Japanese selvedge denim that fades beautifully with wear.' },
  { id: 'graphic-tee', name: 'Atelier Graphic Tee', collection: 'Essentials', gender: 'Women', price: 1499, image: img('1503342217505-b0a15ec3261c'), colors: [{ name: 'White', hex: '#fafafa' }, { name: 'Black', hex: '#111' }], sizes: S, details: 'Screen-printed artwork on a soft, pre-shrunk cotton tee.' },
  { id: 'suede-court-sneakers', name: 'Suede Court Sneakers', collection: 'Footwear', gender: 'Unisex', price: 5499, image: img('1549298916-b41d501d3772'), colors: [{ name: 'Tan', hex: '#b7793a' }], sizes: ['6', '7', '8', '9', '10'], tag: 'New', details: 'Premium suede upper, cushioned insole and a durable gum cupsole.' },
]

export const collections = [
  { name: 'The Winter Edit', sub: 'Outerwear & knits', image: img('1515886657613-9f3515b0c78f', 1000) },
  { name: 'Effortless Essentials', sub: 'Everyday staples', image: img('1490481651871-ab68de25d43d', 1000) },
  { name: 'Weekend Getaway', sub: 'Light & breezy', image: img('1483985988355-763728e1935b', 1000) },
]

export const getProduct = (id: string) => products.find((p) => p.id === id)
