import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronUp,
  FaDownload,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
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
  ["readiness", "Readiness"],
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
  { value: "5", label: "Certifications and job simulations" },
  { value: "1", label: "IEEE conference publication" },
  { value: "2026", label: "Graduation year" },
];

const focusCards = [
  {
    icon: <FiLayers />,
    title: "Applied AI Product Thinking",
    text: "I enjoy turning AI ideas into polished products with clear problem framing, measurable outcomes, and a user experience that feels intentional.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Data and Analytics Readiness",
    text: "From preprocessing and exploration to evaluation and storytelling, I am comfortable working across the full analytics workflow with business-facing clarity.",
  },
  {
    icon: <FiCode />,
    title: "End-to-End Execution",
    text: "I can move from model logic to APIs, databases, and front-end delivery, which helps me ship complete solutions instead of disconnected prototypes.",
  },
];

const availabilityTags = [
  "Open to 2026 graduate roles",
  "SDE and AI/ML opportunities",
  "Data analyst and consultancy roles",
  "Recruiter-friendly portfolio",
];

const motionStripItems = [
  "AI/ML",
  "Data Analytics",
  "Full-Stack Development",
  "Research Experience",
  "IEEE Publication",
  "Tech Consultancy",
  "HR-Friendly Communication",
  "Problem Solving",
];

const heroFocusCards = [
  {
    label: "Currently Focused",
    title: "AI products, analytics workflows, and full-stack delivery",
    text: "I enjoy combining research thinking, product polish, and practical engineering execution.",
  },
  {
    label: "Best Fit Roles",
    title: "SDE, AI/ML, data analyst, consultancy, and cross-functional roles",
    text: "Open to teams that value thoughtful execution, adaptability, and strong communication.",
  },
];

const heroSymbols = ["{ }", "< />", "AI", "SQL", "ML", "//"];

const detailCards = [
  {
    title: "Relevant Coursework",
    items: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Machine Learning and Deep Learning",
      "Operating Systems",
      "Computer Networks",
      "Cloud Computing",
    ],
  },
  {
    title: "Languages",
    items: ["English", "Hindi", "Bengali"],
  },
  {
    title: "Professional Strengths",
    items: [
      "Problem solving",
      "Analytical thinking",
      "Research",
      "Team collaboration",
      "Communication",
      "Adaptability",
    ],
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
      "Contributed to flood detection research using satellite imagery and deep learning, with hands-on work in preprocessing, training pipelines, evaluation, and transfer learning.",
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
      "Deep Learning",
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
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    title: "Database and Tooling",
    icon: <FiActivity />,
    items: [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git/GitHub",
      "Postman",
      "VS Code",
      "Google Suite",
      "Microsoft Excel",
      "Selenium",
    ],
  },
];

const projectCards = [
  {
    title: "TripCraft AI",
    type: "AI Travel Planner",
    year: "2026",
    accent: "featured-mint",
    description:
      "An AI-powered travel planning app that generates personalized day-wise itineraries, securely stores trips, and delivers a modern full-stack experience.",
    highlights: [
      "Built with React 18, TypeScript, Tailwind CSS, and shadcn/ui for a polished front-end experience",
      "Used Supabase Auth, PostgreSQL, RLS, and Edge Functions for secure trip persistence",
      "Integrated Gemini 2.5 Pro to generate structured, useful itinerary plans",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Gemini 2.5 Pro",
    ],
    links: [{ label: "Live Demo", href: "https://tripify-xi.vercel.app/" }],
  },
  {
    title: "Study Abroad-AI",
    type: "Recommendation Engine",
    year: "2025",
    accent: "featured-gold",
    description:
      "An AI-powered study abroad platform that combines profile-aware matching, dynamic filtering, scraping workflows, and ML-assisted recommendations.",
    highlights: [
      "Built the product across React, Node.js, Express.js, and FastAPI-backed ML services",
      "Used automation and scraping workflows to gather university-related data signals",
      "Matched students to suitable universities through profile-based recommendation logic",
    ],
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "MongoDB",
      "Selenium",
    ],
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
    title: "Tata GenAI Data Analytics Simulation",
    detail:
      "Completed a job simulation focused on exploratory analysis, risk profiling, AI-enabled delinquency prediction, and business storytelling.",
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
  "Adaptable across engineering, analytics, research, and cross-functional collaboration",
];

const valueCards = [
  {
    icon: <FiCode />,
    title: "I build beyond prototypes",
    text: "I enjoy taking ideas from experimentation to polished interfaces, stable APIs, and usable end-to-end experiences.",
  },
  {
    icon: <FiBarChart2 />,
    title: "I think analytically",
    text: "My work is grounded in evaluation, structured reasoning, and clear communication of technical and business-facing insights.",
  },
  {
    icon: <FiLayers />,
    title: "I collaborate calmly",
    text: "I bring a steady, team-oriented approach to research, product work, and cross-functional problem solving.",
  },
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
  "GenAI Powered Data Analytics Job Simulation (Tata)",
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
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 9863108568",
    href: "tel:+919863108568",
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealStyle = (index) => ({
    "--stagger": `${index * 90}ms`,
  });

  const handlePointerMove = (event) => {
    const root = event.currentTarget;
    const rect = root.getBoundingClientRect();
    root.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
    root.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
  };

  return (
    <main className="site-shell interactive-shell" onMouseMove={handlePointerMove}>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <div className="site-noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="pointer-glow" />

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
              Designing <span>calm, high-impact digital work</span> across AI,
              analytics, and product engineering.
            </h1>
            <p className="hero-lead">
              I am Shreya Dey, a final-year Computer Science undergraduate at
              KIIT with hands-on experience across AI/ML, data science,
              analytics, research, and full-stack development. I enjoy building
              systems that feel reliable in engineering, sharp in thinking, and
              polished in presentation.
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

            <div className="availability-row" aria-label="Current availability">
              {availabilityTags.map((tag) => (
                <span className="availability-chip" key={tag}>
                  {tag}
                </span>
              ))}
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
            <div className="hero-visual-stage">
              <div className="hero-symbol-cloud" aria-hidden="true">
                {heroSymbols.map((symbol, index) => (
                  <span key={`${symbol}-${index}`} className={`hero-symbol hero-symbol-${index + 1}`}>
                    {symbol}
                  </span>
                ))}
              </div>

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
            </div>

            <div className="hero-side-grid">
              {heroFocusCards.map((card) => (
                <article className="hero-mini-card" key={card.label}>
                  <p className="hero-mini-label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
            <ChatWidget />
          </div>
        </div>
      </section>

      <section className="signal-strip reveal-on-scroll" aria-label="Key focus areas">
        <div className="signal-track">
          {[...motionStripItems, ...motionStripItems].map((item, index) => (
            <span className="signal-pill" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-block reveal-on-scroll" id="about">
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
          {focusCards.map((card, index) => (
            <article
              className="focus-card reveal-on-scroll"
              key={card.title}
              style={revealStyle(index)}
            >
              <div className="focus-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <div className="two-column-panel">
          <article className="insight-card reveal-on-scroll" style={revealStyle(0)}>
            <p className="section-kicker">What Sets Me Apart</p>
            <h3>Balanced between technical depth and product execution.</h3>
            <p>
              I am most effective in work that starts with a real problem and
              ends with a polished, useful outcome. That usually means combining
              analysis, experimentation, implementation, iteration, and clear
              communication instead of staying in only one layer.
            </p>
          </article>
          <article className="insight-card reveal-on-scroll" style={revealStyle(1)}>
            <p className="section-kicker">Core Strengths</p>
            <ul className="check-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-block reveal-on-scroll">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Value</p>
            <h2>What makes my work feel strong in both delivery and presentation.</h2>
          </div>
          <p className="section-summary">
            I care about outcomes that look polished, communicate clearly, and
            still hold up technically when you inspect the details.
          </p>
        </div>

        <div className="value-grid">
          {valueCards.map((card, index) => (
            <article
              className="value-card reveal-on-scroll"
              key={card.title}
              style={revealStyle(index)}
            >
              <div className="focus-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal-on-scroll" id="readiness">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Readiness</p>
            <h2>Coursework, communication, and strengths that support delivery.</h2>
          </div>
          <p className="section-summary">
            Alongside project work and research, my academic foundation and
            working style help me contribute across technical, analytical, and
            collaborative environments.
          </p>
        </div>

        <div className="detail-grid">
          {detailCards.map((card, index) => (
            <article
              className="insight-card detail-card reveal-on-scroll"
              key={card.title}
              style={revealStyle(index)}
            >
              <p className="section-kicker">{card.title}</p>
              <ul className="check-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal-on-scroll" id="journey">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Journey</p>
            <h2>Academic momentum backed by research and practical execution.</h2>
          </div>
        </div>

        <div className="timeline-shell">
          {journey.map((item, index) => (
            <article
              className="timeline-card reveal-on-scroll"
              key={item.title}
              style={revealStyle(index)}
            >
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

      <section className="section-block reveal-on-scroll" id="skills">
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
          {expertise.map((group, index) => (
            <article
              className="expertise-card reveal-on-scroll"
              key={group.title}
              style={revealStyle(index)}
            >
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

      <section className="section-block reveal-on-scroll" id="projects">
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
          {projectCards.map((project, index) => (
            <article
              className={`project-card project-showcase ${project.accent} reveal-on-scroll`}
              key={project.title}
              style={revealStyle(index)}
            >
              <div className="project-showcase-shell">
                <div className="project-overview">
                  <div className="project-meta-row">
                    <div className="project-topline">{project.type}</div>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-stack-block">
                    <p className="project-section-label">Stack</p>
                    <div className="pill-row">
                      {project.stack.map((item) => (
                        <span className="pill" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-detail-panel">
                  <p className="project-section-label">Highlights</p>
                  <ul className="project-points">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal-on-scroll" id="achievements">
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
          {achievements.map((item, index) => (
            <article
              className="achievement-card reveal-on-scroll"
              key={item.title}
              style={revealStyle(index)}
            >
              <div className="achievement-badge">
                <FaTrophy />
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block reveal-on-scroll" id="research">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Research and Publication</p>
            <h2>Evidence of curiosity, rigor, and long-form technical work.</h2>
          </div>
        </div>

        <div className="research-grid">
          {researchPanels.map((panel, index) => (
            <article
              className="research-card reveal-on-scroll"
              key={panel.title}
              style={revealStyle(index)}
            >
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

      <section className="section-block reveal-on-scroll" id="certifications">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Certifications</p>
            <h2>Continuous learning that supports hands-on building.</h2>
          </div>
        </div>

        <div className="cert-grid">
          {certifications.map((certificate, index) => (
            <article
              className="cert-card reveal-on-scroll"
              key={certificate}
              style={revealStyle(index)}
            >
              <span className="cert-icon">
                <FiBookOpen />
              </span>
              <p>{certificate}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block contact-block reveal-on-scroll" id="contact">
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

          <div className="contact-card reveal-on-scroll" style={revealStyle(1)}>
            {contactLinks.map((item, index) => (
              <div
                className="contact-row reveal-on-scroll"
                key={item.label}
                style={revealStyle(index)}
              >
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
      <button
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaChevronUp />
      </button>
    </main>
  );
}

export default App;
