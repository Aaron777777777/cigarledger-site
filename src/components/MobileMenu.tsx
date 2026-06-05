"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu-panel">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <Link onClick={() => setOpen(false)} href="/cigar-price-comparison">Compare prices</Link>
          <Link onClick={() => setOpen(false)} href="/cheap-cigars-uk">Cheap cigars</Link>
          <Link onClick={() => setOpen(false)} href="/about">About</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
          <Link onClick={() => setOpen(false)} href="/privacy">Privacy</Link>
          <Link onClick={() => setOpen(false)} href="/terms">Terms</Link>
        </div>
      )}
    </>
  );
}
