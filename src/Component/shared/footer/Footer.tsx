import React from "react";
import Link from "next/link";
import {
  FacebookIcons,
  InstagramIcons,
  TwitterIcons,
  YoutubeIcons,
} from "../../Icons/Icons";
import Container from "@/Component/ui/Container";

const Footer = () => {
  return (
    <div className="bg-[#1c1917]">
      <Container className="text-gray-300 pt-10">
        <footer>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Left Section */}
            <div className="w-full">
              <h2 className="text-2xl font-bold text-white mb-3">MovieHub</h2>
              <p className="text-sm mb-4">
                Download your favorite movies in high quality. The best movie downloading platform with a vast collection of films across all genres.
              </p>
              <div className="flex gap-4 mt-4 text-lg">
                <a href="#"><FacebookIcons /></a>
                <a href="#"><TwitterIcons /></a>
                <a href="#"><InstagramIcons /></a>
                <a href="#"><YoutubeIcons /></a>
              </div>
            </div>

            {/* Center Section - Quick Links & Categories */}
            <div className="grid grid-cols-2 gap-4 w-full md:col-span-2">
              <div>
                <h3 className="text-white font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/movies">Movies</Link></li>
                  <li><Link href="/categories">Categories</Link></li>
                  <li><Link href="/admin">Admin Login</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Categories</h3>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/categories/action">Action</Link></li>
                  <li><Link href="/categories/comedy">Comedy</Link></li>
                  <li><Link href="/categories/drama">Drama</Link></li>
                  <li><Link href="/categories/scifi">Sci-Fi</Link></li>
                  <li><Link href="/categories/horror">Horror</Link></li>
                </ul>
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="w-full">
              <h3 className="text-white font-semibold mb-2">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to get updates on new releases and exclusive content.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded bg-zinc-800 text-sm text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-6 text-sm space-y-1">
                <p>contact@moviehub.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 MovieHub. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/dmca">DMCA</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
