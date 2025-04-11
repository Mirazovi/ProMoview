import Link from 'next/link'
import React from 'react'
import { ProfileIcons, SearchIcons, SunThemeIcons } from '../../Icons/Icons'
import Container from '@/Component/ui/Container'

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Left - Logo + Links */}
          <div className="flex items-center gap-6">
            <h5 className="text-2xl font-bold text-white">ProMoview</h5>
            <nav className="hidden sm:flex gap-4 text-sm text-gray-300">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/movies" className="hover:text-white transition">Movies</Link>
            </nav>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center gap-5 text-xl text-gray-300">
            <button className="hover:text-white transition"><SearchIcons /></button>
            <button className="hover:text-white transition"><SunThemeIcons /></button>
            <Link href={'/dashboard'}>            <button className="hover:text-white transition"><ProfileIcons /></button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
