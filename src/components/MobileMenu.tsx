"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="vanta-mobile-wrap">
      <button
        className="vanta-burger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="vanta-mobile-menu">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/cigar-price-comparison">Compare prices</Link>
          <Link onClick={() => setOpen(false)} href="/cheap-cigars-uk">Cheap cigars</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
}
