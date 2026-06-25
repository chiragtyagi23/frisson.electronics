"use client";

type DemoNavProps = { onOpenContact: () => void };

export default function DemoNav({ onOpenContact }: DemoNavProps) {
  return (
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
        <button type="button" className="nav-contact-btn" onClick={onOpenContact}>
          Contact Us
        </button>
      </nav>
    </header>
  );
}
