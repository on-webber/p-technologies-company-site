import "./globals.css";

export const metadata = {
  title: "P Technologies | Practical Software for Growing Businesses",
  description: "We design and build practical software, digital products and custom technology for businesses.",
};

const nav = [
  ["Solutions", "/solutions"],
  ["Custom Development", "/custom-development"],
  ["Industries", "/industries"],
  ["Products", "/products"],
  ["About", "/about"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="P Technologies home">
            <span className="brand-mark">P<span>.</span></span>
            <span className="brand-name">TECHNOLOGIES</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="header-cta" href="/contact">Let&apos;s talk <span>↗</span></a>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="footer-top">
            <div>
              <a className="brand footer-brand" href="/">
                <span className="brand-mark">P<span>.</span></span>
                <span className="brand-name">TECHNOLOGIES</span>
              </a>
              <p className="footer-note">Practical technology. Thoughtfully built.</p>
            </div>
            <div className="footer-links">
              <a href="/solutions">Solutions</a><a href="/custom-development">Custom development</a>
              <a href="/products">Products</a><a href="/about">About</a><a href="/contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} P Technologies</span><span>Building with purpose.</span></div>
        </footer>
      </body>
    </html>
  );
}
