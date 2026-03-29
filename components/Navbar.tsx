"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container">
        <div className="nav-brand">Financial Prudence</div>
        <a href="#order" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
          Buy Now
        </a>
      </div>
    </header>
  );
}
