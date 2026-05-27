import { ArrowUpRight } from "lucide-react";

export function WritingPage() {
  const articles = [
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

  return (
    <div className="min-h-screen pt-32 px-10 max-md:px-5">
      <div className="max-w-[900px] mx-auto">
        <h1
          className="page-h1 italic mb-16 max-md:mb-10"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            color: '#1a1714',
            lineHeight: '1.3'
          }}
        >
          Ideas that don't fit in a README.
        </h1>

        <div className="space-y-12">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-6 max-md:gap-4">
                <div
                  className="w-24 max-md:w-16 shrink-0 pt-1"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: '#5a5450'
                  }}
                >
                  {article.date}
                </div>
                <div className="flex-1">
                  <h2
                    className="article-title mb-2 transition-all group-hover:italic"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '24px',
                      color: '#1a1714'
                    }}
                  >
                    {article.title}
                  </h2>
                </div>
                <div className="pt-1">
                  <ArrowUpRight size={18} style={{ color: '#5a5450' }} />
                </div>
              </div>
              <div
                className="mt-6"
                style={{ borderBottom: '1px solid #e4ddd4' }}
              />
            </a>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://medium.com/@joshchang.0928"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[#b5856a]"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '16px',
              color: '#1a1714'
            }}
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
}
