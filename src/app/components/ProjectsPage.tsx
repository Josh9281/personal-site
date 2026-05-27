import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "all" },
    { id: "ai", label: "ai" },
    { id: "blockchain", label: "blockchain" },
    { id: "design", label: "design" },
    { id: "startup", label: "startup" },
  ];

  const projects = [
    {
      title: "Crossroads",
      description: "Chain-abstracted wallet framework. One place to hold, swap, and move assets across chains. Selected for IC3 Blockchain Accelerator.",
      tags: ["Blockchain", "Startup"],
      category: ["blockchain", "startup"],
      url: "https://drive.google.com/file/d/1kA_rvstHnfwAPRQrqkVOQy_3kVKAtr_C/view?usp=sharing",
    },
    {
      title: "Gasless Group Payments",
      description: "Intent-based escrow protocol replacing N on-chain deposits with a single settlement step. Reduces gas costs by 35-70% while preserving atomicity.",
      tags: ["Blockchain"],
      category: ["blockchain"],
      url: "https://drive.google.com/file/d/1cCOebkm_3UHZfSQaDCrvByrBpFgAJV-_/view?usp=sharing",
    },
    {
      title: "Limit Order Book Forecasting",
      description: "Lightweight Transformer encoder for short-horizon mid-price prediction in HFT. Matches CNN-LSTM baseline accuracy with better interpretability.",
      tags: ["AI"],
      category: ["ai"],
      url: "https://drive.google.com/file/d/1f-fNDAUvn8Do8OljmNpmDsqnqYDj6z9r/view?usp=sharing",
    },
    {
      title: "KASY",
      description: "AI-powered group expense manager for crypto natives. Shared vaults, AI expense tracking, and on-chain reputation.",
      tags: ["Startup", "AI", "Blockchain"],
      category: ["startup", "ai", "blockchain"],
      url: "https://kasy.app",
    },
    {
      title: "Pomotree",
      description: "Tangible focus-support system for ADHD. Combines wearable biofeedback with a physical progress artifact, no screen required.",
      tags: ["Design"],
      category: ["design"],
      url: "https://drive.google.com/file/d/1255xVdVQUbxvq01yzMISxmp34oEUCYuL/view?usp=sharing",
    },
    {
      title: "Crypto RL Agent",
      description: "Applies reinforcement learning to model strategic trading behavior in crypto markets. Studies how agents adapt across varying market conditions.",
      tags: ["AI", "Blockchain"],
      category: ["ai", "blockchain"],
      url: "https://docs.google.com/presentation/d/1s5598MJ5E2L0I4Bs-LYXHJCAPtJI9sF_/edit?usp=sharing&ouid=109682753291116718594&rtpof=true&sd=true",
    },
    {
      title: "Thera.ai",
      description: "AI mental health support tool for high school students. Winner of Best Use of Fetch.AI at AI Summit New York Hackathon.",
      tags: ["AI"],
      category: ["ai"],
      url: "https://devpost.com/software/thera-ai",
    },
    {
      title: "Minitorch",
      description: "Deep learning framework built from scratch, simulating PyTorch core architecture including tensor ops and autodifferentiation.",
      tags: ["AI"],
      category: ["ai"],
      url: "https://github.com/Josh9281/Minitorch",
    },
    {
      title: "GiveGetGo",
      description: "Full-stack mobile app for passing on reciprocity in local communities. First launched at Purdue University.",
      tags: ["Startup"],
      category: ["startup"],
      url: "https://github.com/GiveGetGo/givegetgo-backend",
    },
    {
      title: "Opinionae",
      description: "Trade the price of public opinion. A crowd-powered prediction market that keeps beliefs honest.",
      tags: ["Startup"],
      category: ["startup"],
      url: "https://opinionae.com/",
    },
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(p => p.category.includes(activeTab));

  return (
    <div className="min-h-screen pt-32 px-10 max-md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <h1
          className="page-h1 mb-12"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            color: '#1a1714'
          }}
        >
          Things I've built.
        </h1>

        {/* Tabs */}
        <div className="flex gap-8 max-md:gap-4 max-md:flex-wrap mb-16 max-md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-2 transition-colors hover:text-[#b5856a]"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                letterSpacing: '0.05em',
                color: activeTab === tab.id ? '#1a1714' : '#5a5450'
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '2px',
                    backgroundColor: '#b5856a'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {filteredProjects.map((project) => {
            const isExternal = project.url.startsWith("http");
            return (
              <a
                key={project.title}
                href={project.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative bg-[#faf7f2] p-8 border border-[#e4ddd4] transition-all hover:bg-[#f3efe7] block"
              >
                <ArrowUpRight
                  size={20}
                  className="absolute top-6 right-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{ color: '#5a5450' }}
                />
                <h3
                  className="card-title mb-3 pr-8 transition-all group-hover:italic"
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
                    lineHeight: '1.7',
                    color: '#5a5450'
                  }}
                >
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
