"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function DemoNav() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <header className="demo-nav">
        <div className="logo">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="14" height="14" rx="3" fill="#3F6EE9" />
            <rect x="22" y="4" width="14" height="14" rx="3" fill="#5C9DFF" opacity="0.7" />
            <rect x="4" y="22" width="14" height="14" rx="3" fill="#5C9DFF" opacity="0.7" />
            <rect x="22" y="22" width="14" height="14" rx="3" fill="#3F6EE9" opacity="0.5" />
          </svg>
          FRISSON
        </div>
        <nav>
          {/* <a href="#">Home</a> */}
          {/* <a href="#">About Us</a> */}
          {/* <a href="#">Services</a> */}
          {/* <a href="#">Blogs</a> */}
          <button type="button" className="nav-contact-btn" onClick={() => setContactOpen(true)}>
            Contact Us
          </button>
        </nav>
      </header>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
