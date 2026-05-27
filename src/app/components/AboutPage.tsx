export function AboutPage() {
  const interests = [
    {
      name: "AI and Machine Learning",
      description: "Neural networks, transformers, and reinforcement learning. Interested in the gap between research and something that actually works in production.",
    },
    {
      name: "Human-Computer Interaction",
      description: "How people experience technology in everyday environments. Interested in ubiquitous computing and interfaces that disappear into the background.",
    },
    {
      name: "Blockchain and Crypto",
      description: "Started with DeFi and smart contracts, now more interested in the infrastructure layer and what decentralization actually enables.",
    },
    {
      name: "Entrepreneurship",
      description: "Finding a real problem and shipping something fast. Figuring out what matters along the way.",
    },
    {
      name: "Writing",
      description: "Documenting what I'm thinking and sharing it with people. Mostly for myself, sometimes useful to others.",
    },
  ];

  const links = [
    { label: "GitHub", href: "https://github.com/Josh9281" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joshchang928/" },
    { label: "Medium", href: "https://medium.com/@joshchang.0928" },
  ];

  return (
    <div className="min-h-screen pt-32 px-10 max-md:px-5">
      <div className="max-w-[900px] mx-auto">
        <h1
          className="page-h1 mb-12"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            color: '#1a1714'
          }}
        >
          Hi, I'm Josh.
        </h1>

        <div
          className="body-copy space-y-6 mb-20"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '17px',
            lineHeight: '1.85',
            color: '#1a1714'
          }}
        >
          <p>
            I'm a recent Cornell Tech grad based in San Francisco. At Cornell I researched
            blockchain systems and machine learning, and spent a lot of time building things
            at the intersection of the two.
          </p>
          <p>
            I'm originally from Taiwan and moved to the US at 18. I've since lived in West
            Lafayette, New York, and now San Francisco. I write about technology, startups,
            and the occasional idea that doesn't fit anywhere else. Also a huge fan of music
            (classical, hip-hop), skiing, and tennis.
          </p>
          <p>
            I'm always interested in meeting people working on ambitious problems or those
            who see the world a little differently. Feel free to reach out.
          </p>
        </div>

        {/* Interests */}
        <section className="mb-20">
          <h2
            className="section-h2 italic mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              color: '#1a1714'
            }}
          >
            Things I'm into
          </h2>
          <div>
            {interests.map((interest, index) => (
              <div
                key={interest.name}
                className="py-6"
                style={{
                  borderTop: index === 0 ? '1px solid #e4ddd4' : 'none',
                  borderBottom: '1px solid #e4ddd4'
                }}
              >
                <div
                  className="interest-name mb-1"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    color: '#1a1714'
                  }}
                >
                  {interest.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '15px',
                    color: '#5a5450'
                  }}
                >
                  {interest.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Grid */}
        <section>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-16 gap-y-8">
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
                Currently
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  color: '#1a1714'
                }}
              >
                Cornell Tech grad, based in San Francisco
              </div>
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
                From
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  color: '#1a1714'
                }}
              >
                Taiwan
              </div>
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
                Links
              </div>
              <div className="flex gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-[#b5856a]"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '16px',
                      color: '#1a1714'
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
                Email
              </div>
              <a
                href="mailto:JoshChang.0928@gmail.com"
                className="underline underline-offset-4 transition-colors hover:text-[#b5856a]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  color: '#1a1714'
                }}
              >
                JoshChang.0928@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
