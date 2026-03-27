import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaRegLightbulb,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";
import {
  FiActivity,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiSend,
  FiTrendingUp,
} from "react-icons/fi";
import ChatWidget from "./components/ChatWidget";
import profilePhoto from "./your-photo.jpg";
import "./App.css";

const navLinks = [
  ["about", "About"],
  ["journey", "Journey"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["achievements", "Achievements"],
  ["research", "Research"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

const heroStats = [
  { value: "8.51", label: "B.Tech CGPA after 7th semester" },
  { value: "2+", label: "Flagship products built and shipped" },
  { value: "1", label: "IEEE conference publication" },
  { value: "2026", label: "Graduation year" },
];

const focusCards = [
  {
    icon: <FiLayers />,
    title: "Applied AI Product Thinking",
    text: "I enjoy shaping AI ideas into usable products with clear problem framing, measurable outcomes, and thoughtful user experience.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Data-Led Decision Making",
    text: "From preprocessing to evaluation, I am comfortable across the full data workflow and can communicate insights in a practical, decision-ready way.",
  },
  {
    icon: <FiCode />,
    title: "End-to-End Execution",
    text: "I can move from model logic to APIs and front-end delivery, which helps me ship polished solutions instead of disconnected prototypes.",
  },
];

const journey = [
  {
    icon: <FaGraduationCap />,
    title: "B.Tech in Computer Science and Engineering",
    meta: "Kalinga Institute of Industrial Technology (KIIT) | 2022 - 2026",
    description:
      "Current CGPA: 8.51 after the 7th semester, backed by a strong foundation in core CS, software development, data science, and machine learning.",
  },
  {
    icon: <FaRocket />,
    title: "Research Internship",
    meta: "Mehta Family School of Data Science and AI, IIT Guwahati | Summer 2025",
    description:
      "Worked on flood detection from satellite imagery using CNN-based semantic segmentation and transfer learning for remote sensing workflows.",
  },
  {
    icon: <FaTrophy />,
    title: "Published Research",
    meta: "IEEE Conference | 2025",
    description:
      "Co-authored research on climate-aware agricultural yield forecasting using a hybrid LSTM and Random Forest modeling approach.",
  },
];

const expertise = [
  {
    title: "Programming and Development",
    icon: <FiCode />,
    items: ["Java", "Python", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI, ML, and Analytics",
    icon: <FiTrendingUp />,
    items: [
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
  },
  {
    title: "Web and Backend",
    icon: <FiBriefcase />,
    items: ["React", "Vite", "Node.js", "Express.js", "FastAPI", "Tailwind CSS"],
  },
  {
    title: "Database and Tooling",
    icon: <FiActivity />,
    items: ["SQL", "MongoDB", "Git/GitHub", "Postman", "VS Code", "Excel"],
  },
];

const projectCards = [
  {
    title: "TripCraft AI",
    type: "AI Travel Planner",
    description:
      "A personalized itinerary generator that uses Gemini 2.5 Pro to create day-wise travel plans, manage saved trips, and deliver a polished responsive experience.",
    highlights: [
      "Built with React and TypeScript for a clean, scalable front end",
      "Used Supabase for secure trip persistence and retrieval",
      "Structured prompts and outputs for practical itinerary quality",
    ],
    stack: ["React", "TypeScript", "Gemini AI", "Supabase"],
    links: [{ label: "Live Demo", href: "https://tripify-xi.vercel.app/" }],
  },
  {
    title: "Study Abroad-AI",
    type: "Recommendation Engine",
    description:
      "A recommendation platform for study abroad aspirants that combines profile-aware matching, web scraping pipelines, and ML-driven ranking.",
    highlights: [
      "Used scraping pipelines to source university-related signals",
      "Matched students to suitable universities using ML logic",
      "Connected FastAPI and React for an end-to-end product flow",
    ],
    stack: ["Python", "FastAPI", "React", "Scikit-learn"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shreyadey13/StudyAbroad-Project",
      },
    ],
  },
];

const achievements = [
  {
    title: "Research Internship at IIT Guwahati",
    detail:
      "Contributed to satellite-imagery flood detection research using deep learning and transfer learning methods.",
  },
  {
    title: "IEEE Conference Publication",
    detail:
      "Published research on climate-aware agricultural yield forecasting using hybrid predictive modeling.",
  },
  {
    title: "Full-Stack + AI Portfolio Projects",
    detail:
      "Built projects that combine front-end interfaces, backend services, and applied AI logic in one coherent workflow.",
  },
  {
    title: "Strong Academic Consistency",
    detail:
      "Maintained an 8.51 CGPA through the 7th semester while continuing to grow across AI/ML, data science, and software engineering.",
  },
];

const strengths = [
  "Problem solving with a structured engineering mindset",
  "Comfortable switching between model development and product implementation",
  "Able to communicate technical ideas clearly to both technical and non-technical audiences",
  "Motivated by real-world impact, not just proof-of-concept demos",
];

const researchPanels = [
  {
    title: "Flood Detection Using Satellite Imagery",
    label: "Research Internship",
    description:
      "Designed and improved deep learning workflows for semantic segmentation of water bodies from satellite imagery, with emphasis on transfer learning and robust remote sensing analysis.",
    badges: [
      "Transfer Learning",
      "Deep Learning",
      "Semantic Segmentation",
      "Remote Sensing",
    ],
  },
  {
    title: "Quantifying the Impact of Climate Change on Agriculture Yield in Odisha",
    label: "Publication",
    description:
      "Proposed a hybrid forecasting approach using LSTM and Random Forest to analyze how shifting climate variables affect crop productivity across time.",
    badges: ["LSTM", "Random Forest", "Forecasting", "Climate Analytics"],
    link: "https://drive.google.com/file/d/10LqzdxdJVZT_jE771glSb40GZegOPuny/view?usp=sharing",
  },
];

const certifications = [
  "Generative AI (IBM)",
  "Google Data Analytics",
  "Full-Stack Web Development (DevTown)",
  "Postman API Expert",
];

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "shreyadey1312@gmail.com",
    href: "mailto:shreyadey1312@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/shreya-dey-b018b0254",
    href: "https://www.linkedin.com/in/shreya-dey-b018b0254",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/shreyadey13",
    href: "https://github.com/shreyadey13",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Guwahati, Assam",
  },
];

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}Shreya-Dey-Resume.html`;

  return (
    <main className="site-shell">
      <div className="site-noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-panel">
        <header className="topbar">
          <a className="brand" href="#top">
            <span className="brand-mark">SD</span>
            <span className="brand-text">Shreya Dey</span>
          </a>
          <nav className="topnav">
            {navLinks.map(([id, label]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <div className="eyebrow">Portfolio 2026</div>
            <h1>
              Building reliable AI, data, and digital products with a calm,
              engineering-first mindset.
            </h1>
            <p className="hero-lead">
              I am Shreya Dey, a final-year Computer Science undergraduate focused
              on AI/ML, data science, and full-stack product development. I enjoy
              building systems that are technically sound, visually polished, and
              genuinely useful in practice.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
                <FaArrowRight />
              </a>
              <a
                className="button button-secondary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View Resume
                <FaFileAlt />
              </a>
              <a
                className="button button-secondary"
                href="mailto:shreyadey1312@gmail.com"
              >
                Let&apos;s Connect
                <FiSend />
              </a>
            </div>

            <div className="hero-note">
              <FaRegLightbulb />
              <span>
                Interested in SDE, AI/ML, data analyst, tech consultancy, HR,
                and data-focused opportunities.
              </span>
            </div>

            <div className="hero-stats">
              {heroStats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img
                  src={profilePhoto}
                  alt="Portrait of Shreya Dey"
                  className="portrait"
                />
              </div>
              <div className="portrait-caption">
                <span>AI/ML</span>
                <span>Data Science</span>
                <span>Full Stack</span>
              </div>
            </div>
            <ChatWidget />
          </div>
        </div>
      </section>

      <section className="section-block" id="about">
        <div className="section-heading">
          <div>
            <p className="section-kicker">About</p>
            <h2>A sharper, more complete picture of what I bring.</h2>
          </div>
          <p className="section-summary">
            My work sits at the intersection of engineering discipline, analytical
            thinking, and curiosity-driven building. I like moving from problem
            definition to a finished solution that people can actually use.
          </p>
        </div>

        <div className="focus-grid">
          {focusCards.map((card) => (
            <article className="focus-card" key={card.title}>
              <div className="focus-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="two-column-panel">
          <article className="insight-card">
            <p className="section-kicker">What Sets Me Apart</p>
            <h3>Balanced between technical depth and product execution.</h3>
            <p>
              I am most effective in work that starts with a real problem and ends
              with a polished, useful outcome. That usually means combining
              analysis, experimentation, implementation, and iteration instead of
              staying in only one layer.
            </p>
          </article>
          <article className="insight-card">
            <p className="section-kicker">Core Strengths</p>
            <ul className="check-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-block" id="journey">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Journey</p>
            <h2>Academic momentum backed by research and practical execution.</h2>
          </div>
        </div>

        <div className="timeline-shell">
          {journey.map((item) => (
            <article className="timeline-card" key={item.title}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <p className="timeline-meta">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="skills">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Skills</p>
            <h2>
              Technical depth across data workflows, product delivery, and
              engineering fundamentals.
            </h2>
          </div>
        </div>

        <div className="expertise-grid">
          {expertise.map((group) => (
            <article className="expertise-card" key={group.title}>
              <div className="expertise-title">
                <span>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="pill-row">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Projects</p>
            <h2>Selected work that reflects how I think and build.</h2>
          </div>
          <p className="section-summary">
            These projects combine applied AI, product thinking, and the
            engineering discipline needed to turn ideas into usable experiences.
          </p>
        </div>

        <div className="project-grid">
          {projectCards.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-topline">{project.type}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-points">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="pill-row">
                {project.stack.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    key={link.href}
                  >
                    {link.label}
                    <FaArrowRight />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="achievements">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Achievements</p>
            <h2>Signals that reinforce both credibility and growth.</h2>
          </div>
          <p className="section-summary">
            These are the milestones that best show how I am progressing as an
            engineer, researcher, and builder.
          </p>
        </div>

        <div className="achievement-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.title}>
              <div className="achievement-badge">
                <FaTrophy />
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="research">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Research and Publication</p>
            <h2>Evidence of curiosity, rigor, and long-form technical work.</h2>
          </div>
        </div>

        <div className="research-grid">
          {researchPanels.map((panel) => (
            <article className="research-card" key={panel.title}>
              <div className="research-label">
                {panel.label === "Publication" ? <FiBookOpen /> : <FaFileAlt />}
                <span>{panel.label}</span>
              </div>
              <h3>{panel.title}</h3>
              <p>{panel.description}</p>
              <div className="pill-row">
                {panel.badges.map((badge) => (
                  <span className="pill" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
              {panel.link ? (
                <a
                  className="inline-link"
                  href={panel.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read publication
                  <FaArrowRight />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="certifications">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Certifications</p>
            <h2>Continuous learning that supports hands-on building.</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certifications.map((certificate) => (
            <article className="cert-card" key={certificate}>
              <span className="cert-icon">
                <FiBookOpen />
              </span>
              <p>{certificate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block contact-block" id="contact">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <h2>
              Open to meaningful work, thoughtful collaboration, and ambitious
              ideas.
            </h2>
            <p>
              If you are hiring for software engineering, AI/ML, data analyst,
              tech consultancy, HR, or other data-focused roles, I would love to
              connect and discuss how I can contribute.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href="mailto:shreyadey1312@gmail.com"
              >
                Email Me
                <FaEnvelope />
              </a>
              <a
                className="button button-secondary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <FaDownload />
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/shreyadey13"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="contact-card">
            {contactLinks.map((item) => (
              <div className="contact-row" key={item.label}>
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <p className="contact-label">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Shreya Dey</span>
        <span>Designed to showcase AI, data, and software engineering work.</span>
      </footer>
    </main>
  );
}

export default App;
