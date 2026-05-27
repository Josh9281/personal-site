const footerTextStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  color: '#b0a89e',
  letterSpacing: '0.15em',
} as const;

export function Footer() {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/Josh9281' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshchang928/' },
    { label: 'Medium', href: 'https://medium.com/@joshchang.0928' },
    { label: 'Email', href: 'mailto:JoshChang.0928@gmail.com' },
  ];

  return (
    <footer
      className="border-t border-[#e4ddd4] mt-20"
      style={{ backgroundColor: '#faf7f2' }}
    >
      <div className="grid grid-cols-3 items-center px-10 py-6">
        <div className="uppercase" style={footerTextStyle}>
          © 2026 Josh Chang
        </div>
        <div
          className="uppercase text-center"
          style={footerTextStyle}
        >
          Last updated May 2026
        </div>
        <div className="flex justify-end gap-6">
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase transition-colors hover:text-[#b5856a]"
              style={footerTextStyle}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
