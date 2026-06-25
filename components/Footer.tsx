export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="14" height="14" rx="3" fill="#3F6EE9" />
              <rect x="22" y="4" width="14" height="14" rx="3" fill="#5C9DFF" opacity="0.7" />
              <rect x="4" y="22" width="14" height="14" rx="3" fill="#5C9DFF" opacity="0.7" />
              <rect x="22" y="22" width="14" height="14" rx="3" fill="#3F6EE9" opacity="0.5" />
            </svg>
            <div className="footer-logo-text">
              <span className="footer-logo-name">FRISSON</span>
              <span className="footer-logo-sub">TECHNOLOGIES</span>
            </div>
          </div>
          <p className="footer-tagline">
            Engineering intelligent embedded electronics, smart surveillance, solar energy, and IoT
            solutions for utility, infrastructure, and enterprise environments.
          </p>
        </div>

        {/* Address column */}
        <div className="footer-address-col">
          <div className="footer-section-label">Office Address</div>
          <div className="footer-address-card">
            <div className="footer-address-main">
              <div className="footer-address-icon">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" fill="#3F6EE9" opacity="0.9"/>
                  <circle cx="10" cy="7" r="2" fill="#1A1D24"/>
                </svg>
              </div>
              <address className="footer-address-text">
                <strong>H-61, 401 Fourth Floor</strong>
                <span>Noida Sector 63, Noida</span>
                <span>Uttar Pradesh — 201301</span>
              </address>
            </div>
            <a
              href="https://maps.app.goo.gl/AGtRh5f7m33zgUH38"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-directions"
            >
              Get Directions
              <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Frisson Technologies. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
