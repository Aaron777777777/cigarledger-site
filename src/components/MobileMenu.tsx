"use client";

import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <button
        className="menu-button"
        aria-label="Open menu"
        onClick={() => document.body.classList.toggle("menu-open")}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="mobile-menu">
        <Link href="/" onClick={() => document.body.classList.remove("menu-open")}>Home</Link>
        <Link href="/cigar-price-comparison" onClick={() => document.body.classList.remove("menu-open")}>Compare prices</Link>
        <Link href="/cheap-cigars-uk" onClick={() => document.body.classList.remove("menu-open")}>Cheap cigars</Link>
        <Link href="/about" onClick={() => document.body.classList.remove("menu-open")}>About</Link>
        <Link href="/contact" onClick={() => document.body.classList.remove("menu-open")}>Contact</Link>
      </div>
    </>
  );
}
