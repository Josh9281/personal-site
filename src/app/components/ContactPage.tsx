import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function ContactPage() {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Josh9281" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/joshchang928/" },
    { icon: FileText, label: "Medium", href: "https://medium.com/@joshchang.0928" },
    { icon: Mail, label: "Email", href: "mailto:JoshChang.0928@gmail.com" },
  ];

  return (
    <div className="min-h-screen pt-32 px-10">
      <div className="max-w-[900px] mx-auto">
        <h1
          className="mb-2"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            color: '#1a1714',
            lineHeight: '1.2'
          }}
        >
          Let's grab coffee
        </h1>
        <h2
          className="italic mb-16"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            color: '#b5856a',
            lineHeight: '1.2'
          }}
        >
          or build something.
        </h2>

        <div className="grid grid-cols-2 gap-16">
          {/* Social Links */}
          <div>
            <div className="space-y-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <div
                      className="w-8 h-px transition-all group-hover:w-12"
                      style={{ backgroundColor: '#e4ddd4' }}
                    />
                    <Icon size={20} style={{ color: '#5a5450' }} />
                    <span
                      className="transition-colors group-hover:text-[#b5856a]"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '16px',
                        color: '#1a1714'
                      }}
                    >
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              action="https://formspree.io/f/xbdbpprk"
              method="POST"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full pb-3 bg-transparent outline-none transition-colors focus:border-[#b5856a]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    color: '#1a1714',
                    borderBottom: '1px solid #e4ddd4'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full pb-3 bg-transparent outline-none transition-colors focus:border-[#b5856a]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    color: '#1a1714',
                    borderBottom: '1px solid #e4ddd4'
                  }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  className="w-full pb-3 bg-transparent outline-none resize-none transition-colors focus:border-[#b5856a]"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    color: '#1a1714',
                    borderBottom: '1px solid #e4ddd4'
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 transition-colors hover:bg-[#1a1714]/90"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  backgroundColor: '#1a1714',
                  color: '#faf7f2'
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
