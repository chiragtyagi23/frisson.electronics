"use client";

import { useEffect, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !loading) onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, loading]);

  useEffect(() => {
    if (!open) {
      setMessage(null);
      setLoading(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setMessage({
          type: "error",
          text: data.error ?? "Failed to send enquiry. Please try again.",
        });
        return;
      }

      setMessage({ type: "success", text: "Enquiry sent successfully!" });
      setName("");
      setEmail("");
      setTimeout(() => onClose(), 1500);
    } catch {
      setMessage({ type: "error", text: "Failed to send enquiry. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-modal-overlay" onClick={loading ? undefined : onClose} role="presentation">
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          disabled={loading}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id="contact-modal-title" className="contact-modal-title">Contact Us</h2>
        <p className="contact-modal-sub">We&apos;ll get back to you shortly.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-label">
            Name
            <input
              type="text"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              disabled={loading}
            />
          </label>
          <label className="contact-label">
            Email
            <input
              type="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={loading}
            />
          </label>
          {message && (
            <p className={`contact-form-message contact-form-message--${message.type}`}>
              {message.text}
            </p>
          )}
          <button type="submit" className="btn-primary contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
