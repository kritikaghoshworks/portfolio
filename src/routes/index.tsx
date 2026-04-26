import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kritika Ghosh — Growth Marketing Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Kritika Ghosh, a growth-oriented B.Com student focused on marketing, consumer behavior, digital strategy, and audience growth.",
      },
    ],
  }),
  component: Index,
});

const navItems = [
  "About",
  "Education",
  "Experience",
  "Skills",
  "Portfolio",
  "Contact",
];

const education = [
  [
    "B.Com (Hons.)",
    "Jesus and Mary College, University of Delhi",
    "Pursuing · 2nd Year",
    "CGPA 8.45",
  ],
  ["AISSE (Commerce)", "St. Mary’s Public School, Delhi", "2024", "90%"],
  ["AISSE", "St. Mary’s Public School, Delhi", "2022", "90%"],
];

const experiences = [
  {
    role: "Campus Ambassador",
    org: "Reddit",
    time: "Oct 2025 – Present",
    points: [
      "Drove 200+ user acquisitions",
      "Secured sponsorships for 500+ attendee events",
      "Generated 150+ app downloads",
      "Built community engagement",
    ],
  },
  {
    role: "Marketing Team",
    org: "Scandles & Co.",
    time: "Jul – Sept 2025",
    points: [
      "Executed campaigns",
      "Conducted market research",
      "Managed influencer/vendor partnerships",
    ],
  },
];

const skills = [
  "Growth Marketing",
  "Social Media Strategy",
  "Content Creation",
  "Brand Activations",
  "Campaign Planning",
  "Audience Growth",
];

const cases = [
  ["Organic Reels Growth", "90K+ organic views through creative strategy."],
  ["College Campaigns", "Boosted visibility and participation."],
  ["Reddit Growth", "Community-led campus awareness campaigns."],
];

function Index() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md">
        <a href="#home" className="text-xl font-black tracking-wide">
          KRITIKA
        </a>

        <div className="hidden gap-6 text-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-red-500"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-red-600 px-5 py-2 text-sm font-bold hover:bg-red-700"
        >
          Hire Me
        </a>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-white text-black"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[18vw] font-extrabold leading-[1.1] tracking-[0.02em] text-red-700 uppercase">
            PORTFOLIO
          </h1>
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <img
            src="https://i.postimg.cc/xTYW0174/DSC-7358-(1).jpg"
            alt="Kritika Ghosh"
            className="h-[80vh] object-contain"
          />
        </div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <p className="text-xl font-bold uppercase">
            Social Media Specialist
          </p>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right">
          <p className="text-xl font-bold uppercase">
            Digital Storyteller
          </p>
        </div>

        <div className="absolute bottom-8 left-8">
          <p className="font-semibold">📍 Delhi</p>
        </div>

        <div className="absolute bottom-8 right-8 text-right">
          <p className="text-2xl font-black">KRITIKA GHOSH</p>
          <p>19 Y/O</p>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        label="About"
        title="Creative thinking, sharp execution, measurable growth."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:bg-red-600/20 hover:border-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]">
            <p className="text-6xl font-black text-red-500">8.45</p>
            <p className="mt-4 text-gray-300">
              CGPA while building practical marketing experience through
              internships, live projects, and campaigns.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:bg-red-600/20 hover:border-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]">
            Kritika is a B.Com (Hons.) student passionate about growth
            marketing, branding, youth audiences, and digital communities.
            She combines creativity with execution and data-backed thinking.
          </div>
        </div>
      </Section>
{/* EDUCATION */}
<Section id="education" label="Education" title="Academic Foundation">
  <div className="grid gap-6 md:grid-cols-3">
    {education.map(([degree, school, year, score]) => (
      <article
        key={degree}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:bg-red-600/10 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
      >
        {/* Normal Content */}
        <div className="transition-all duration-500 group-hover:opacity-0">
          <div className="mb-4 text-3xl">🎓</div>
          <p className="text-red-500">{year}</p>
          <h3 className="mt-2 text-2xl font-black">{degree}</h3>
          <p className="mt-2 text-gray-400">{school}</p>
          <p className="mt-5 font-bold">{score}</p>
        </div>

        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <h3 className="text-2xl font-black text-red-500">{degree}</h3>
          <p className="mt-4 text-white">• Strong academic foundation</p>
          <p className="mt-2 text-white">• Consistent performer</p>
          <p className="mt-2 text-white">• Growth mindset</p>
        </div>
      </article>
    ))}
  </div>
</Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        label="Experience"
        title="Campaigns, Growth & Activations"
      >
        <div className="space-y-6">
          {experiences.map((item) => (
            <div
              key={item.org}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-red-500">{item.time}</p>
              <h3 className="mt-2 text-2xl font-black">{item.org}</h3>
              <p className="text-gray-400">{item.role}</p>

              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl bg-black/30 p-4 text-gray-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="Skills" title="Strategy Toolkit">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" label="Portfolio" title="Proof of Work">
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map(([title, body], index) => (
            <div
              key={title}
              className={`rounded-3xl p-6 ${
                index === 0
                  ? "bg-red-600"
                  : "border border-white/10 bg-white/5 backdrop-blur-md"
              }`}
            >
              <p className="text-5xl font-black">0{index + 1}</p>
              <h3 className="mt-6 text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm opacity-80">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        label="Contact"
        title="Let’s Build Something Impactful"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-gray-400">Email</p>
            <p className="mt-1 text-xl font-bold">
              kritikaghosh.work@gmail.com
            </p>

            <p className="mt-6 text-gray-400">Phone</p>
            <p className="mt-1 text-xl font-bold">+91 8510993927</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <input
              placeholder="Name"
              className="mb-4 w-full rounded-2xl bg-black/30 px-4 py-3 outline-none"
            />
            <input
              placeholder="Email"
              className="mb-4 w-full rounded-2xl bg-black/30 px-4 py-3 outline-none"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="mb-4 w-full rounded-2xl bg-black/30 px-4 py-3 outline-none"
            />
            <button className="rounded-full bg-red-600 px-6 py-3 font-bold hover:bg-red-700">
              Send Message
            </button>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        Kritika Ghosh © 2026
      </footer>
    </main>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-6 py-16 lg:px-10">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          {label}
        </p>
        <h2 className="mt-3 text-4xl font-black lg:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}