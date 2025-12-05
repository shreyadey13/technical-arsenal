import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ChatWidget from './components/ChatWidget';
import "./App.css";

function App() {
  return (
    <>
      {/* Background Glow Effects */}
      <div className="glow-orb glow-1" />
      <div className="glow-orb glow-2" />

      <main className="page">
        {/* Hero Section */}
        <header className="hero glass">
          <div className="hero-content">
            {/* Chat Widget (Alien) */}
            <ChatWidget />

            <div className="hero-header">
              <div className="name glitch" data-text="Shreya Dey">Shreya Dey</div>
              <div className="tagline">
                <div className="typing-container">SDE • AI/ML • Data Science • Web Dev</div>
              </div>
              <div className="floating-text">| Architecting Scalable Solutions |</div>
            </div>

            <div className="hero-details">
              <div className="contact-row">
                <span className="contact-item">
                  <FaEnvelope /> <a href="mailto:shreyadey1312@gmail.com">shreyadey1312@gmail.com</a>
                </span>
                <span className="contact-item">
                  <FaMapMarkerAlt /> Shillong, Meghalaya
                </span>
                <span className="contact-item">
                  <FaLinkedin /> <a href="https://www.linkedin.com/in/shreya-dey-b018b0254" target="_blank" rel="noreferrer">LinkedIn</a>
                </span>
                <span className="contact-item">
                  <FaGithub /> <a href="https://github.com/shreyadey13" target="_blank" rel="noreferrer">GitHub</a>
                </span>
              </div>

              <div className="chip-row">
                <span className="chip">Data Science</span>
                <span className="chip">Machine Learning</span>
                <span className="chip">Artificial Intelligence</span>
                <span className="chip">Web Development</span>
                <span className="chip">Software Development</span>
                
              </div>
            </div>

            <nav className="hero-nav">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#research">Research Internship</a>
              <a href="#publications">Publications</a>
              <a href="#certificates">Certificates</a>
            </nav>
          </div>

          <div className="hero-avatar">
            <div className="avatar-orbit">
              <img src="/your-photo.jpg" alt="Shreya Dey" className="avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="main">
          
          {/* About */}
          <section id="about" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Floating Background Shapes */}
            <div className="floating-shape shape-1" />
            <div className="floating-shape shape-2" />
            <div className="floating-shape shape-3" />
            
            {/* Floating Characters */}
            <div className="floating-char char-robot">🤖</div>
            <div className="floating-char char-planet">🪐</div>

            <div className="about-content">
              <div className="section-header animate-fade-up">
                <h2 className="section-title">About Me</h2>
                <span className="section-sub">Professional Profile</span>
              </div>
              <div className="section-body">
                <p className="highlight-line animate-fade-up delay-1">
                  <span>Building Intelligence.</span> <span>Transforming complex data into actionable insights.</span>
                </p>
                <h1 className="animate-fade-up delay-2">
                  I'm an <span>AI/ML</span> & <span>Data Science</span> enthusiast also interested in <span>Software Engineering</span> and <span>Full Stack Development</span>.
                </h1>
                <p className="animate-fade-up delay-3">
                  Final-year Computer Science & Engineering undergraduate at KIIT with a strong foundation in core CS principles. 
                  I have hands-on experience in AI/ML and Data Science through impactful projects, along with practical exposure to Full Stack Development. 
                  Passionate about Software Engineering, I bring strong analytical and problem-solving skills to the table, being an adaptable and patient observer who thrives in solving complex challenges.
                </p>
                <p className="animate-fade-up delay-3">
                  I am eager to leverage my diverse technical background to solve real-world problems and contribute to innovative solutions in AI/ML, Data Science, and Data Analytics.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="floating-shape shape-2" style={{ top: '10%', left: '80%' }} />
            <div className="floating-shape shape-3" style={{ bottom: '20%', left: '10%' }} />
            <div className="floating-char char-rocket">🚀</div>
            
            <div className="section-header animate-fade-up">
              <h2 className="section-title">Education</h2>
              <span className="section-sub">Academic Background</span>
            </div>
            <div className="section-body">
              <ul className="timeline">
                <li className="timeline-item animate-fade-up delay-1">
                  <div className="timeline-title">B.Tech in Computer Science & Engineering (CSE)</div>
                  <div className="timeline-meta">
                    Kalinga Institute of Industrial Technology (KIIT) · 2022 – 2026
                  </div>
                  <div className="timeline-desc">
                    CGPA: 8.42 (Current) · Specialization in Core CS, Web Development, Data Science & Machine Learning.
                  </div>
                </li>
                <li className="timeline-item animate-fade-up delay-2">
                  <div className="timeline-title">Higher Secondary (Science)</div>
                  <div className="timeline-meta">
                    St. Anthony's Higher Secondary School · 2022
                  </div>
                  <div className="timeline-desc">
                    Percentage: 77.2% · Focus on Physics, Chemistry, Mathematics, and Computer Science.
                  </div>
                </li>
                <li className="timeline-item animate-fade-up delay-3">
                  <div className="timeline-title">Matriculation (SSLC)</div>
                  <div className="timeline-meta">
                    St. John's Whitehall · 2020
                  </div>
                  <div className="timeline-desc">
                    Percentage: 82.33% · Basic Foundation in all subjects.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
             <div className="floating-shape shape-1" style={{ top: '5%', left: '5%' }} />
             <div className="floating-shape shape-3" style={{ bottom: '10%', right: '5%' }} />
             <div className="floating-char char-laptop">💻</div>

            <div className="section-header animate-fade-up">
              <h2 className="section-title">Technical Arsenal</h2>
              <span className="section-sub">Core Competencies</span>
            </div>
            <div className="section-body">
              <p className="label animate-fade-up delay-1">Programming & Development</p>
              <div className="chip-row animate-fade-up delay-1">
                <span className="chip">Java</span>
                <span className="chip">Python</span>
                <span className="chip">C</span>
                <span className="chip">JavaScript</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
              </div>

              <p className="label animate-fade-up delay-2">Data Science & Analytics</p>
              <div className="chip-row animate-fade-up delay-2">
                <span className="chip">Machine Learning</span>
                <span className="chip">Data Preprocessing</span>
                <span className="chip">Model Evaluation</span>
                <span className="chip">Data Visualization</span>
                <span className="chip">Pandas</span>
                <span className="chip">NumPy</span>
                <span className="chip">Scikit-learn</span>
                <span className="chip">Matplotlib</span>
              </div>

              <p className="label animate-fade-up delay-2">Web Technologies</p>
              <div className="chip-row animate-fade-up delay-2">
                <span className="chip">React (with Vite)</span>
                <span className="chip">Node.js</span>
                <span className="chip">Express.js</span>
                <span className="chip">FastAPI</span>
                <span className="chip">Tailwind CSS</span>
              </div>

              <p className="label animate-fade-up delay-3">Databases</p>
              <div className="chip-row animate-fade-up delay-3">
                <span className="chip">SQL</span>
                <span className="chip">MongoDB</span>
              </div>

              <p className="label animate-fade-up delay-3">Tools & Platforms</p>
              <div className="chip-row animate-fade-up delay-3">
                <span className="chip">Git/GitHub</span>
                <span className="chip">Postman</span>
                <span className="chip">VS Code</span>
                <span className="chip">Google Suite</span>
                <span className="chip">Microsoft Excel</span>
              </div>

              <p className="label animate-fade-up delay-3">Professional Skills</p>
              <div className="chip-row animate-fade-up delay-3">
                <span className="chip">Problem Solving</span>
                <span className="chip">Analytical Thinking</span>
                <span className="chip">Research</span>
                <span className="chip">Team Collaboration</span>
                <span className="chip">Communication</span>
                <span className="chip">Adaptability</span>
              </div>
            </div>
          </section>
          
          {/* Research */}
          <section id="research" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="floating-shape shape-3" style={{ top: '20%', left: '15%' }} />
            <div className="floating-char char-dna">🧬</div>
            
            <div className="section-header animate-fade-up">
              <h2 className="section-title">Research Internship</h2>
              <span className="section-sub">Academic Contributions</span>
            </div>
            <div className="section-body">
              <ul className="timeline">
                <li className="timeline-item animate-fade-up delay-1">
                  <div className="timeline-title">Flood Detection Using Satellite Imagery</div>
                  <div className="timeline-meta">
                    Mehta Family School of Data Science & AI, IIT Guwahati · Summer 2025
                  </div>
                  <div className="timeline-desc">
                    Conducted advanced research on flood detection using satellite imagery. Developed and fine-tuned 
                    CNN architectures for semantic segmentation of water bodies,used the concept of Transfer Learning achieving significant improvements in accuracy.
                  </div>
                  <div className="badge-row">
                    <span className="badge">Transfer Learning</span>
                    <span className="badge">Deep Learning</span>
                    <span className="badge">Remote Sensing</span>
                    <span className="badge">Computer Vision</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>


          {/* Projects */}
          <section id="projects" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="floating-shape shape-2" style={{ top: '15%', right: '10%' }} />
            <div className="floating-shape shape-1" style={{ bottom: '10%', left: '5%' }} />
            <div className="floating-char char-brain">🧠</div>

            <div className="section-header animate-fade-up">
              <h2 className="section-title">Featured Projects</h2>
              <span className="section-sub">Engineering & Innovation</span>
            </div>
            <div className="section-body">
              <div className="cards">
                {/* TripCraft AI */}
                <article className="card animate-fade-up delay-1">
                  <div className="card-title">TripCraft AI</div>
                  <div className="card-meta">AI-Powered Itinerary Generator</div>
                  <p className="card-desc">
                    A sophisticated travel planning platform leveraging Gemini 2.5 Pro to generate personalized, 
                    day-wise itineraries. Features secure trip storage via Supabase and a responsive UI built with React & Tailwind.
                  </p>
                  <div className="chip-row">
                    <span className="chip">React</span>
                    <span className="chip">TypeScript</span>
                    <span className="chip">Gemini AI</span>
                    <span className="chip">Supabase</span>
                  </div>
                  <div className="card-links" style={{ marginTop: '1rem' }}>
                    <a href="https://tripify-xi.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>

                {/* Study Abroad */}
                <article className="card animate-fade-up delay-2">
                  <div className="card-title">Study Abroad-AI</div>
                  <div className="card-meta">University Recommendation Engine</div>
                  <p className="card-desc">
                    An intelligent recommendation system for study abroad aspirants. Utilizes web scraping pipelines 
                    and ML algorithms to match students with universities based on profile and preferences.
                  </p>
                  <div className="chip-row">
                    <span className="chip">Python</span>
                    <span className="chip">FastAPI</span>
                    <span className="chip">React</span>
                    <span className="chip">Scikit-learn</span>
                  </div>
                  <div className="card-links" style={{ marginTop: '1rem' }}>
                    <a href="https://github.com/shreyadey13/StudyAbroad-Project" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="floating-shape shape-1" style={{ bottom: '20%', right: '10%' }} />
            <div className="floating-char char-book">📚</div>

            <div className="section-header animate-fade-up">
              <h2 className="section-title">Publications</h2>
              <span className="section-sub">Peer-Reviewed Works</span>
            </div>
            <div className="section-body">
              <ul className="timeline">
                <li className="timeline-item animate-fade-up delay-1">
                  <div className="timeline-title">
                    Quantifying the Impact of Climate Change on Agriculture Yield in Odisha
                  </div>
                  <div className="timeline-meta">IEEE Conference · 2025</div>
                  <div className="timeline-desc">
                    Proposed a hybrid LSTM-Random Forest model to forecast crop yields under varying climate scenarios. 
                    Analyzed decadal climate patterns to predict agricultural productivity shifts.
                  </div>
                  <div className="card-links" style={{ marginTop: '0.5rem' }}>
                    <a href="https://drive.google.com/file/d/10LqzdxdJVZT_jE771glSb40GZegOPuny/view?usp=sharing" target="_blank" rel="noreferrer">Read Paper</a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Certificates */}
          <section id="certificates" className="section glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="floating-shape shape-2" style={{ top: '10%', left: '50%' }} />
            <div className="floating-char char-trophy">🏆</div>

            <div className="section-header animate-fade-up">
              <h2 className="section-title">Certifications</h2>
              <span className="section-sub">Continuous Learning</span>
            </div>
            <div className="section-body">
              <div className="chip-row animate-fade-up delay-1">
                <span className="chip">Generative AI (IBM)</span>
                <span className="chip">Google Data Analytics</span>
                <span className="chip">Full-Stack Web Dev (DevTown)</span>
                <span className="chip">Postman API Expert</span>
              </div>
            </div>
          </section>

          <footer>
            © 2025 Shreya Dey · All rights reserved
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
