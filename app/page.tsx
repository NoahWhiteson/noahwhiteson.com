import { ThemeToggle } from "@/components/theme-toggle";
import { HeroPlayground } from "@/components/hero-playground";
import { ContributionGraph } from "@/components/contribution-graph";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GsapEffects } from "@/components/gsap-effects";
import { Ticker } from "@/components/ticker";
import {
  ArrowUpRightIcon,
  AwardIcon,
  BriefcaseIcon,
  FolderIcon,
  GitHubIcon,
  GlobeIcon,
  GraduationCapIcon,
  LinkedInIcon,
  MapPinIcon,
  UserIcon,
  VerifiedIcon,
  XIcon,
} from "@/components/icons";

/* Data */

const socials = [
  {
    label: "GitHub",
    handle: "NoahWhiteson",
    href: "https://github.com/NoahWhiteson",
    icon: GitHubIcon,
  },
  {
    label: "X",
    handle: "@_NoahWhiteson",
    href: "https://x.com/_NoahWhiteson",
    icon: XIcon,
  },
  {
    label: "LinkedIn",
    handle: "noah-whiteson",
    href: "https://www.linkedin.com/in/noah-whiteson/",
    icon: LinkedInIcon,
  },
];

const stack = [
  {
    group: "01 Language",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    group: "02 Frontend",
    items: ["React", "React Native", "Next.js", "Tailwind CSS", "Three.js"],
  },
  {
    group: "03 Backend & Database",
    items: ["Node.js", "AIOHTTP", "MongoDB", "MySQL"],
  },
  {
    group: "04 Data & AI",
    items: ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "Pandas"],
  },
  {
    group: "05 Cloud & Tools",
    items: ["AWS", "Nginx", "GitHub", "Docker"],
  },
  {
    group: "06 Design",
    items: ["Photoshop", "Illustrator", "After Effects"],
  },
];

const projects = [
  {
    name: "Project Placeholder One",
    period: "2026",
    description:
      "A short description of what this project does and why it exists goes here. Swap this out with a real project.",
    tags: ["Placeholder", "Coming Soon"],
  },
  {
    name: "Project Placeholder Two",
    period: "2025",
    description:
      "Another spot reserved for real work. Add a link, a screenshot, and a couple of lines about what you built.",
    tags: ["Placeholder", "Coming Soon"],
  },
  {
    name: "Project Placeholder Three",
    period: "2025",
    description:
      "Keep this card for a favorite experiment or hackathon build. Details to be filled in later.",
    tags: ["Placeholder", "Coming Soon"],
  },
];

const experience = [
  {
    icon: GraduationCapIcon,
    org: "University of Vermont",
    role: "Mentorship Program",
    period: "2025 - Present",
    location: "Remote",
    points: [
      "Working one on one with a university mentor to sharpen engineering fundamentals.",
      "Getting guided feedback on real projects, code structure, and career direction.",
      "Exploring topics beyond the classroom, from systems design to applied AI.",
    ],
    tags: ["Mentorship", "Engineering", "AI"],
  },
  {
    icon: BriefcaseIcon,
    org: "Work Placeholder",
    role: "Future Role",
    period: "TBD",
    location: "Toronto, CA",
    points: [
      "This slot is reserved for upcoming work experience.",
      "Check back soon, or reach out if you want to be the first entry here.",
    ],
    tags: ["Placeholder"],
  },
];

const awards = [
  {
    title: "Toronto Science Fair",
    prize: "Silver Medalist",
    year: "2026",
  },
  {
    title: "Toronto Science Fair",
    prize: "Silver Medalist",
    year: "2025",
  },
];

/* Building blocks */

function RisingWords({
  text,
  step = 80,
  offset = 0,
}: {
  text: string;
  step?: number;
  offset?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="word-rise inline-block"
            style={{ transitionDelay: `${offset + i * step}ms` }}
          >
            {word}
            {"\u00A0"}
          </span>
        </span>
      ))}
    </>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      data-word-reveal
      className="screen-line-before px-4 pt-4 pb-3 text-2xl font-semibold tracking-tight sm:px-6"
    >
      <RisingWords text={children} />
    </h2>
  );
}

function StripeDivider() {
  return <div className="screen-line-before h-8 w-full bg-stripes" />;
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="group flex items-center gap-3 px-4 py-2 transition-colors hover:bg-muted/40 sm:px-6">
      <span className="flex w-36 shrink-0 items-center gap-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
        <Icon className="size-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
        {label}
      </span>
      <span className="text-sm">{value}</span>
    </div>
  );
}

function Tag({ children, dim }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <span
      className={`cursor-default rounded-md border border-edge px-2.5 py-1 font-mono text-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-muted ${
        dim ? "text-muted-foreground hover:text-foreground" : ""
      }`}
    >
      {children}
    </span>
  );
}

/* Page */

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl overflow-x-clip border-x border-edge min-h-screen">
      <ScrollReveal />
      <GsapEffects />

      {/* Hatched gutters outside the content column */}
      <div
        aria-hidden="true"
        className="bg-stripes pointer-events-none fixed inset-y-0 left-0 hidden w-[calc(50vw-24rem)] opacity-40 md:block"
      />
      <div
        aria-hidden="true"
        className="bg-stripes pointer-events-none fixed inset-y-0 right-0 hidden w-[calc(50vw-24rem)] opacity-40 md:block"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-edge bg-background/80 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <a href="#" className="font-mono text-sm font-semibold">
            nw
          </a>
          <nav className="flex items-center gap-5">
            {[
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted-foreground transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
        <span
          data-progress
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-foreground"
        />
      </header>

      <main>
        {/* Hero */}
        <section>
          <div className="screen-line-before relative h-56 overflow-hidden text-foreground sm:h-72">
            <HeroPlayground className="absolute inset-0 h-full w-full" />
            <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-xs text-muted-foreground/70 sm:right-6">
              FIG_001<span data-blink>_</span>
            </span>
          </div>
          <div className="screen-line-before flex items-end gap-4 px-4 sm:px-6">
            <div
              data-float
              className="group -mt-10 size-24 shrink-0 overflow-hidden rounded-full border border-edge bg-background transition-colors hover:border-foreground/40 sm:-mt-12 sm:size-28"
            >
              <img
                src="/avatar.png"
                alt="Noah Whiteson"
                className="h-full w-full object-cover object-left transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="px-4 pt-4 sm:px-6">
            <h1 className="flex items-center text-3xl font-semibold tracking-tight sm:text-4xl">
              {["Noah", "Whiteson"].map((word, i) => (
                <span key={word} className="inline-block overflow-hidden">
                  <span
                    className="text-rise inline-block"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {word}
                    {"\u00A0"}
                  </span>
                </span>
              ))}
              <span
                data-pulse
                className="inline-block translate-y-0.5 overflow-hidden"
              >
                <VerifiedIcon className="text-rise size-6 shrink-0 sm:size-7 [animation-delay:240ms]" />
              </span>
            </h1>
            <p className="pt-1 pb-4 font-mono text-sm text-muted-foreground">
              {"Building things for the web, one commit at a time."
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden align-bottom"
                  >
                    <span
                      className="text-rise inline-block"
                      style={{ animationDelay: `${300 + i * 50}ms` }}
                    >
                      {word}
                      {"\u00A0"}
                    </span>
                  </span>
                ))}
            </p>
          </div>
        </section>

        <Ticker />

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="screen-line-before py-2">
            <InfoRow
              icon={BriefcaseIcon}
              label="ROLE"
              value="Full-stack Programmer"
            />
            <InfoRow
              icon={GraduationCapIcon}
              label="MENTORSHIP"
              value="University of Vermont"
            />
            <InfoRow
              icon={MapPinIcon}
              label="LOCATION"
              value="Toronto, Ontario, Canada"
            />
            <InfoRow
              icon={GlobeIcon}
              label="WEBSITE"
              value={
                <a
                  href="https://noahwhiteson.com"
                  className="underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground"
                >
                  noahwhiteson.com
                </a>
              }
            />
            <InfoRow icon={UserIcon} label="PRONOUNS" value="he/him" />
          </div>
        </section>

        <StripeDivider />

        {/* Social links */}
        <section>
          <SectionHeading>Social Links</SectionHeading>
          <div data-stagger className="screen-line-before grid sm:grid-cols-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border-b border-edge px-4 py-4 transition-colors hover:bg-muted/50 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6"
              >
                <social.icon className="size-5 shrink-0 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110" />
                <div className="min-w-0">
                  <p className="text-sm font-medium">{social.label}</p>
                  <p className="truncate font-mono text-xs text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
                <ArrowUpRightIcon className="ml-auto size-4 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </section>

        <StripeDivider />

        {/* GitHub contributions */}
        <section>
          <SectionHeading>GitHub Contributions</SectionHeading>
          <div className="screen-line-before">
            <ContributionGraph />
          </div>
        </section>

        <StripeDivider />

        {/* About */}
        <section id="about">
          <SectionHeading>Hello</SectionHeading>
          <div className="screen-line-before space-y-4 px-4 py-4 text-sm leading-relaxed text-foreground/90 sm:px-6">
            <p>
              I am Noah, a young tech enthusiast and full-stack programmer from
              Toronto. I like taking an idea from a rough sketch to something
              real that people can click on, and I care about getting the small
              stuff right along the way.
            </p>
            <p>
              Most of my time goes into React and Python, with a growing
              interest in applied AI. Right now I am part of a mentorship
              program through the University of Vermont, where I get to learn
              directly from people who have been building software far longer
              than I have.
            </p>
            <p>
              When I am not writing code, I am usually reading about how other
              people build things, or entering science fairs. Two silver medals
              at the Toronto Science Fair so far, and I plan to keep going.
            </p>
          </div>
        </section>

        <StripeDivider />

        {/* Stack */}
        <section>
          <SectionHeading>Stack</SectionHeading>
          <div className="screen-line-before">
            {stack.map((group) => (
              <div
                key={group.group}
                className="flex flex-col gap-2 border-b border-edge px-4 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:px-6"
              >
                <span className="w-48 shrink-0 font-mono text-xs text-muted-foreground">
                  {group.group}
                </span>
                <div data-stagger className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <StripeDivider />

        {/* Experience */}
        <section id="experience">
          <SectionHeading>Experience</SectionHeading>
          <div className="screen-line-before">
            {experience.map((exp) => (
              <div
                key={exp.org}
                className="group border-b border-edge px-4 py-5 transition-colors last:border-b-0 hover:bg-muted/30 sm:px-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-base font-semibold">
                    <exp.icon className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-foreground" />
                    {exp.org}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="pt-0.5 text-sm text-muted-foreground">
                  {exp.role} · {exp.location}
                </p>
                <ul className="list-disc space-y-1.5 pl-5 pt-3 text-sm leading-relaxed text-foreground/90">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div data-stagger className="flex flex-wrap gap-2 pt-3">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} dim>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <StripeDivider />

        {/* Projects */}
        <section id="projects">
          <SectionHeading>Projects</SectionHeading>
          <div className="screen-line-before">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group border-b border-edge px-4 py-5 transition-colors last:border-b-0 hover:bg-muted/30 sm:px-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-base font-semibold">
                    <FolderIcon className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:scale-110 group-hover:text-foreground" />
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <p className="pt-2 text-sm leading-relaxed text-foreground/90">
                  {project.description}
                </p>
                <div data-stagger className="flex flex-wrap gap-2 pt-3">
                  {project.tags.map((tag) => (
                    <Tag key={tag} dim>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <StripeDivider />

        {/* Awards */}
        <section>
          <SectionHeading>Awards</SectionHeading>
          <div data-stagger className="screen-line-before">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group flex flex-wrap items-baseline justify-between gap-2 border-b border-edge px-4 py-4 transition-colors last:border-b-0 hover:bg-muted/30 sm:px-6"
              >
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-medium">
                    <AwardIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-rotate-12 group-hover:text-foreground" />
                    {award.title}
                  </h3>
                  <p className="pt-0.5 font-mono text-xs text-muted-foreground">
                    {award.prize}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <StripeDivider />
      </main>

      {/* Footer */}
      <footer className="screen-line-before">
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6">
          <p className="font-mono text-xs text-muted-foreground">
            Noah Whiteson · Toronto, CA
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
