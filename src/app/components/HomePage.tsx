import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function HomePage() {
  const [hovered, setHovered] = useState(false);

  const recentPosts = [
    {
      date: "May 2026",
      title: "What I Learned Turning Blockchain Research Into a Working Prototype",
      href: "https://medium.com/@joshchang.0928/what-i-learned-turning-blockchain-research-into-a-working-prototype-f8f80f7eea93",
    },
    {
      date: "May 2025",
      title: "Cornell Tech Spring 2025 回顧：課程、收穫與心態變化",
      href: "https://medium.com/@joshchang.0928/cornell-tech-spring-2025-%E5%9B%9E%E9%A1%A7-%E8%AA%B2%E7%A8%8B-%E6%94%B6%E7%A9%AB%E8%88%87%E5%BF%83%E6%85%8B%E8%AE%8A%E5%8C%96-19fa76876b73",
    },
  ];

  const projects = [
    {
      title: "Crossroads",
      description: "Chain-abstracted wallet framework. One place to hold, swap, and move assets across chains. Selected for IC3 Blockchain Accelerator.",
      tags: ["Blockchain", "Startup"],
      url: "https://drive.google.com/file/d/1kA_rvstHnfwAPRQrqkVOQy_3kVKAtr_C/view?usp=sharing",
    },
    {
      title: "Minitorch",
      description: "Deep learning framework built from scratch, simulating PyTorch core architecture including tensor ops and autodifferentiation.",
      tags: ["AI"],
      url: "https://github.com/Josh9281/Minitorch",
    },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 max-w-[1140px] items-stretch">
          <div>
          <p
            className="uppercase tracking-widest mb-6"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              color: '#b0a89e',
              letterSpacing: '0.15em'
            }}
          >
            Hi, I'm Josh
          </p>

          <h1
            className="mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '64px',
              lineHeight: '1.2',
              color: '#1a1714'
            }}
          >
            engineer,
            <br />
            <span className="italic" style={{ color: '#b5856a' }}>writer,</span>
            <br />
            builder.
          </h1>

          <div
            className="space-y-4 mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '17px',
              lineHeight: '1.85',
              color: '#1a1714'
            }}
          >
            <p>
              I'm a Cornell Tech grad interested in AI, blockchain, and design.
              Previously interned at companies from early-stage startups to public companies,
              and did blockchain research at Cornell with Prof. Ari Juels (
              <a
                href="https://ic3research.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 transition-colors hover:text-[#b5856a]"
              >
                IC3
              </a>
              ).
            </p>
            <p>
              I write about technology, startups, and ideas that don't fit in a README.
            </p>
          </div>

          <div className="flex gap-6 mb-12">
            {[
              { label: 'writing', href: '/writing' },
              { label: 'projects', href: '/projects' },
              { label: 'github', href: 'https://github.com/Josh9281' },
              { label: 'linkedin', href: 'https://www.linkedin.com/in/joshchang928/' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline underline-offset-4 transition-colors hover:text-[#b5856a]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Status Bar */}
          <div
            className="grid grid-cols-3 gap-8 pt-6"
            style={{ borderTop: '1px solid #e4ddd4' }}
          >
            <div>
              <div
                className="uppercase tracking-widest mb-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  color: '#b0a89e',
                  letterSpacing: '0.15em'
                }}
              >
                Education
              </div>
              <div style={{ fontSize: '14px', color: '#1a1714' }}>Cornell MS '26</div>
              <div style={{ fontSize: '14px', color: '#1a1714' }}>Purdue BS '24</div>
            </div>
            <div>
              <div
                className="uppercase tracking-widest mb-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  color: '#b0a89e',
                  letterSpacing: '0.15em'
                }}
              >
                Location
              </div>
              <div style={{ fontSize: '14px', color: '#1a1714' }}>San Francisco, CA</div>
            </div>
            <div>
              <div
                className="uppercase tracking-widest mb-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  color: '#b0a89e',
                  letterSpacing: '0.15em'
                }}
              >
                Status
              </div>
              <div style={{ fontSize: '14px', color: '#b5856a' }}>Open to opportunities</div>
            </div>
          </div>
          </div>
          <div
            className="hidden lg:flex items-start"
            style={{ marginRight: '-40px' }}
          >
            <img
              src="/profile.jpg"
              alt="Josh Chang"
              className="object-cover"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: '380px',
                height: '480px',
                borderRadius: '12px',
                objectPosition: 'center top',
                marginLeft: 'auto',
                marginTop: '40px',
                transform: hovered ? 'scale(1.03)' : 'scale(1)',
                filter: hovered ? 'brightness(1.05)' : 'brightness(1)',
                transition: 'transform 0.4s ease, filter 0.4s ease',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="px-10 py-20">
        <h2
          className="italic mb-8"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '36px',
            color: '#1a1714'
          }}
        >
          Recent writing
        </h2>

        <div className="max-w-[900px]">
          {recentPosts.map((post, index) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 transition-all hover:translate-x-2"
              style={{
                borderTop: index === 0 ? '1px solid #e4ddd4' : 'none',
                borderBottom: '1px solid #e4ddd4'
              }}
            >
              <div
                className="w-24"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  color: '#5a5450'
                }}
              >
                {post.date}
              </div>
              <div
                className="flex-1 text-center transition-all group-hover:italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  color: '#1a1714'
                }}
              >
                {post.title}
              </div>
              <div className="w-24 flex justify-end">
                <ArrowUpRight size={18} style={{ color: '#5a5450' }} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="px-10 py-20">
        <h2
          className="italic mb-8"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '36px',
            color: '#1a1714'
          }}
        >
          Selected projects
        </h2>

        <div className="grid grid-cols-2 gap-px bg-[#e4ddd4] max-w-[900px]">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#faf7f2] p-8 transition-all hover:bg-[#f3efe7] block"
            >
              <ArrowUpRight
                size={20}
                className="absolute top-6 right-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                style={{ color: '#5a5450' }}
              />
              <h3
                className="mb-3 pr-8 transition-all group-hover:italic"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: '#1a1714'
                }}
              >
                {project.title}
              </h3>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#5a5450'
                }}
              >
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 uppercase"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      border: '1px solid #e4ddd4',
                      color: '#5a5450'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
