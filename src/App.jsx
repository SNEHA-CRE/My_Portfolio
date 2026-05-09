import { useEffect } from 'react';
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
  FaArrowRight,
  FaCloud,
  FaFileAlt,
  FaCode,
  FaMagic,
  FaGithub,
} from 'react-icons/fa';

const skills = [
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Python',
  'Prompt Engineering',
  'REST APIs',
];

const projects = [
  {
    title: 'AI Chatbot for College & Company FAQs',
    description:
      'A conversational assistant built with NLP and knowledge base integration to handle admissions, HR, placements, and course queries.',
    details: [
      'Engineered AI-powered chatbot flow for instant FAQ responses.',
      'Used prompt engineering and NLP to understand natural language queries.',
      'Built a structured knowledge base for fast, reliable answers.',
    ],
  },
  {
    title: 'MERN Blogging Application',
    description:
      'Full-stack blogging platform with JWT authentication, CRUD operations, and responsive frontend design.',
    details: [
      'Implemented secure user authentication and content management.',
      'Created reusable React components and RESTful backend APIs.',
      'Prepared the application for deployment with React and Node.js.',
    ],
  },
];

const certifications = [
  'Python for Data Science - April 2023',
  'Introduction to Python - June 2023',
  'Data Concepts - May 2024',
  'Cloud Application Developer - October 2024',
  'Cybersecurity Basics - November 2024',
  'RDBMS Essentials - November 2024',
  'Artificial Intelligence - Advanced - March 2025',
  'Data Analysis with Python - April 2025',
];

const education = [
  {
    label: 'Shri Vaishnav Vidyapeeth Vishwavidyalaya',
    detail: 'B.Tech Computer Science | 2022 - 2026 | CGPA: 7.7',
  },
  {
    label: 'New Era Public Academy',
    detail: 'Higher Secondary | 2021 - 2022 | Percentage: 80%',
  },
  {
    label: 'New Era Public Academy',
    detail: 'Secondary School | 2019 - 2020 | Percentage: 90%',
  },
];

const techOrbit = ['React', 'AI', 'MERN', 'Data', 'API', 'UI'];

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="animated-background" aria-hidden="true">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
        <div className="grid-glow" />
        <div className="particle-field">
          {Array.from({ length: 26 }).map((_, index) => {
            const particleStyle = {
              '--x': `${(index * 37) % 100}%`,
              '--y': `${(index * 19) % 100}%`,
              '--size': `${2 + (index % 4)}px`,
              '--duration': `${10 + (index % 8) * 1.2}s`,
              '--delay': `${index * -0.42}s`,
            };

            return <span key={index} style={particleStyle} />;
          })}
        </div>
      </div>
      <div className="pointer-glow" aria-hidden="true" />

      <header className="topbar">
        <a href="#top" className="brand-mark">
          SK
        </a>
        <nav className="topnav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content" id="top">
        <section className="hero-section reveal">
          <div className="hero-copy">
            <span className="hero-chip magnetic">
              <FaFileAlt /> Full Stack MERN | Python Developer | Data Analyst
            </span>
            <h1 className="hero-title">
              <span>Sneha</span>
              <span className="gradient-text">Kharat</span>
            </h1>
            <p className="hero-text">
              Results-oriented Computer Science student with strong backend and AI experience. I build polished React
              experiences, modern MERN workflows, and data-driven applications that feel premium.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary magnetic">
                View Projects <FaArrowRight />
              </a>
              <a href="#contact" className="btn btn-soft magnetic">
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-card animated-card">
                <strong>1+ yr</strong>
                <span>AI & MERN experience</span>
              </div>
              <div className="stat-card animated-card">
                <strong>8+</strong>
                <span>Core technical skills</span>
              </div>
              <div className="stat-card animated-card">
                <strong>100%</strong>
                <span>Production-ready mindset</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-card animated-border">
              <div className="orbital-ring" aria-hidden="true">
                {techOrbit.map((item, index) => {
                  const angle = index * 60;
                  const orbitStyle = {
                    '--orbit-start': `rotate(${angle}deg) translate(168px) rotate(${-angle}deg)`,
                    '--orbit-end': `rotate(${angle - 360}deg) translate(168px) rotate(${360 - angle}deg)`,
                  };

                  return (
                    <span key={item} style={orbitStyle}>
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="profile-avatar">
                <img src="/profile.png" alt="Sneha Kharat" />
              </div>
              <div className="profile-info">
                <span className="eyebrow">
                  <FaMagic /> Available for creative web work
                </span>
                <h2>Hi, I am Sneha</h2>
                <p>
                  I design and develop responsive web interfaces, developer-focused dashboards, and AI-powered
                  applications with clean architecture, modern aesthetics, and seamless user experiences.
                </p>
              </div>
            </div>

            <div className="badges-grid">
              <div className="badge-card animated-card">
                <FaCloud className="badge-icon" />
                <div>
                  <strong>GenAI</strong>
                  <span>IBM Internship</span>
                </div>
              </div>
              <div className="badge-card animated-card">
                <FaDatabase className="badge-icon" />
                <div>
                  <strong>Data</strong>
                  <span>Pandas, SQL, MongoDB</span>
                </div>
              </div>
              <div className="badge-card animated-card">
                <FaBrain className="badge-icon" />
                <div>
                  <strong>AI</strong>
                  <span>NLP & prompt engineering</span>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-panel reveal" id="about">
          <div className="section-head">
            <div>
              <span>About Me</span>
              <h2>Crafting reliable web products with design and data.</h2>
            </div>
            <p>
              I specialize in polished React frontends paired with secure Node.js backends. My work combines intuitive
              user experience, efficient APIs, and AI-driven automation for modern web applications.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card animated-card">
              <FaCode className="feature-icon" />
              <h3>Interactive UI</h3>
              <p>Modern animated interfaces with responsive layouts and clear visual hierarchy.</p>
            </div>
            <div className="feature-card animated-card">
              <FaProjectDiagram className="feature-icon" />
              <h3>Scalable Backend</h3>
              <p>RESTful APIs built with Node.js and Express, ready for deployment with MongoDB.</p>
            </div>
            <div className="feature-card animated-card">
              <FaBrain className="feature-icon" />
              <h3>AI-powered</h3>
              <p>Prompt engineering and intelligent workflows for next-gen content and automation.</p>
            </div>
          </div>
        </section>

        <section className="section-card reveal" id="skills">
          <div className="section-title-row">
            <div>
              <span>Skills</span>
              <h2>Technology expertise at a glance.</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-pill" style={{ '--delay': `${index * 0.08}s` }}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section-card reveal" id="projects">
          <div className="section-title-row">
            <div>
              <span>Selected Work</span>
              <h2>Projects that showcase real results.</h2>
            </div>
            <a href="#contact" className="btn btn-soft magnetic">
              Talk about your project
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card animated-card">
                <div className="project-label">Project</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid reveal" id="education">
          <div className="card-panel animated-card">
            <div className="panel-head">
              <FaGraduationCap className="panel-icon" />
              <div>
                <span>Education</span>
                <h3>Academic journey</h3>
              </div>
            </div>
            <div className="info-list">
              {education.map((item) => (
                <div key={`${item.label}-${item.detail}`} className="info-item">
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-panel animated-card">
            <div className="panel-head">
              <FaBrain className="panel-icon" />
              <div>
                <span>Certifications</span>
                <h3>Professional credentials</h3>
              </div>
            </div>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-card section-contact reveal" id="contact">
          <div className="section-title-row">
            <div>
              <span>Contact</span>
              <h2>Ready to collaborate on your next web project.</h2>
            </div>
            <a href="mailto:sneakharat680@gmail.com" className="btn btn-primary magnetic">
              Email Me
            </a>
          </div>
          <div className="contact-grid">
            <div className="contact-item animated-card">
              <FaEnvelope className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p>sneakharat680@gmail.com</p>
              </div>
            </div>
            <div className="contact-item animated-card">
              <FaPhone className="contact-icon" />
              <div>
                <strong>Phone</strong>
                <p>+91 9575758505</p>
              </div>
            </div>
            <div className="contact-item animated-card">
              <FaLinkedin className="contact-icon" />
              <div>
                <strong>LinkedIn</strong>
                <p>linkedin.com/in/sneha-kharat-3897b6348</p>
              </div>
            </div>
            <div className="contact-item animated-card">
              <FaGithub className="contact-icon" />
              <div>
                <strong>GitHub</strong>
                <p>https://github.com/SNEHA-CRE</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
