import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const navLinks = [
    { href: "/writing", label: "writing" },
    { href: "/projects", label: "projects" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#faf7f2]/90 border-b border-[#e4ddd4]">
      <div className="flex items-center justify-between px-10 max-md:px-4 py-4">
        <Link
          to="/"
          className="nav-brand transition-colors hover:text-[#b5856a]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Josh Chang
        </Link>
        <div className="flex items-center gap-8 max-md:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="nav-link lowercase tracking-wide transition-colors hover:text-[#b5856a]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                color: location.pathname === link.href ? '#b5856a' : 'inherit'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
