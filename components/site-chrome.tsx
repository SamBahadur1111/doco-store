'use client';

import Link from 'next/link';
import { ArrowUpRight, Instagram, Mail, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const wa = 'https://wa.me/9779869114712';
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="absolute left-0 right-0 top-0 z-30 border-b border-white/15 bg-transparent text-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link href="/" className="font-display text-2xl font-bold tracking-tighter">DOCO<span className="text-lime">.</span></Link>
      <nav className="hidden items-center gap-8 text-sm font-semibold md:flex"><a href="#shop" className="transition hover:text-lime">Shop</a><a href="#story" className="transition hover:text-lime">Our story</a><a href="#visit" className="transition hover:text-lime">Visit us</a><Link href={wa} className="flex items-center gap-1 rounded-full bg-lime px-4 py-2 text-ink transition hover:bg-white"><MessageCircle className="h-4 w-4" /> Order now</Link><ThemeToggle /></nav>
      <div className="flex items-center gap-3 md:hidden"><ThemeToggle /><button onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <div className="border-t border-white/15 bg-ink px-5 py-5 md:hidden"><div className="flex flex-col gap-5 font-semibold"><a href="#shop" onClick={() => setOpen(false)}>Shop</a><a href="#story" onClick={() => setOpen(false)}>Our story</a><a href="#visit" onClick={() => setOpen(false)}>Visit us</a><Link href={wa} className="text-lime">Order on WhatsApp →</Link></div></div>}
  </header>;
}

export function WhatsAppFloat() { return <Link href={wa} target="_blank" aria-label="Order on WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"><MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">Chat to order</span></Link>; }
export function Footer() { return <footer className="border-t border-black/10 bg-card py-12 dark:border-white/10"><div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3 lg:px-8"><div><div className="font-display text-2xl font-bold">DOCO<span className="text-orange">.</span></div><p className="mt-3 max-w-xs text-sm text-muted">Gear up. Show up. Stand out. Premium sportswear for Kathmandu and beyond.</p></div><div><p className="mb-3 font-bold">Get in touch</p><div className="space-y-2 text-sm text-muted"><a className="flex items-center gap-2 hover:text-orange" href="mailto:docoteams@gmail.com"><Mail className="h-4 w-4" /> docoteams@gmail.com</a><a className="flex items-center gap-2 hover:text-orange" href="https://instagram.com/docosportswear"><Instagram className="h-4 w-4" /> @docosportswear</a><p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kathmandu, Nepal</p></div></div><div><p className="mb-3 font-bold">Ready for your next match?</p><a href={wa} className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-orange dark:bg-lime dark:text-ink">Message us <ArrowUpRight className="h-4 w-4" /></a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-black/10 px-5 pt-5 text-xs text-muted dark:border-white/10 lg:px-8">© {new Date().getFullYear()} DOCO Sportswear. Made for the beautiful game.</div></footer>; }
