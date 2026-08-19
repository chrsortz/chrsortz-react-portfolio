import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import "./styles.css";

const images = import.meta.glob(
  "./images/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const skills = [
  "C#", "ASP.NET MVC", "Blazor", "SQL Server", "HTML", "CSS", "JavaScript",
  "Postman", "Selenium", "Playwright", "REST API", "Git", "GitHub", "Agile", "SDLC"
];

const projects = [
  {
    number: "01",
    title: "Business Management Platform",
    type: "QA + Development",
    description:
      "Maintained and enhanced a business web application while testing business rules, UI behavior, data accuracy, and regression scenarios.",
    stack: ["C#", "Blazor", "ASP.NET", "SQL Server"],
    featured: true,
  },
  {
    number: "02",
    title: "API Testing Suite",
    type: "Quality Assurance",
    description:
      "Structured API test scenarios covering requests, responses, status codes, JSON validation, positive and negative cases.",
    stack: ["Postman", "REST API", "JSON"],
    featured: false,
  },
  {
    number: "03",
    title: "Regression Test Coverage",
    type: "Quality Assurance",
    description:
      "Created and executed repeatable test scenarios to validate new changes without breaking existing application functionality.",
    stack: ["Functional Testing", "Regression", "SQL"],
    featured: false,
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go home">
            <span className="brand-mark"><img src={images["/images/pfp.jpg"]} alt="profilepic"></img></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "skills", "experience", "contact"].map((item) => (
              <button key={item} onClick={() => go(item)}>
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-btn icon-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
            <h1>
               Christian Ortiz
            </h1>
            <p className="hero-text">
              QA Tester & Associate Developer focused on reliable web applications,
              thoughtful testing, and clean solutions.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go("experience")}>
                View my work experience <ArrowUpRight size={17} />
              </button>
              <button className="secondary-btn" onClick={() => go("contact")}>
                Get in touch <Mail size={17} />
              </button>
            </div>
            <div className="mini-stats">
              <div><strong>QA</strong><span>Testing</span></div>
              <div><strong>API</strong><span>Postman</span></div>
              <div><strong>DEV</strong><span>C# / .NET</span></div>
            </div>
          </div>

          <div className="hero-card reveal delay">


  <div className="hero-card-overlay"></div>
    <img className="hero-profile-image" src={images["/images/profile.png"]} alt="Christian" />
  </div>
        </section>

        <section id="about" className="section container">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="kicker">About me</p>
              <h2>Quality-minded.<br />Developer-minded.</h2>
            </div>
          </div>
          <div className="about-grid">
            <p className="large-copy">
              Experienced in web application development, manual, automation and API testing, and troubleshooting using C#, ASP.NET MVC, SQL Server, Postman, Selenium, and Playwright. Skilled in creating test cases, identifying defects, validating data, and delivering reliable, user-friendly web applications.
            </p>
            <div className="about-notes">
              <div><CheckCircle2 size={18} /><span>Detail-oriented testing</span></div>
              <div><CheckCircle2 size={18} /><span>Hands-on development</span></div>
              <div><CheckCircle2 size={18} /><span>Agile & SDLC experience</span></div>
              <div><CheckCircle2 size={18} /><span>Continuous learning</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="kicker">Toolkit</p>
              <h2>Things I work with.</h2>
            </div>
          </div>

          <div className="skill-layout">
            <div className="skill-intro">
              <div className="skill-icon"><Code2 size={26} /></div>
              <h3>Full-stack awareness,<br />QA-first mindset.</h3>
              <p>
                Understanding how an application is built helps me test it
                from both the user's and developer's perspective.
              </p>
            </div>
            <div className="skill-cloud">
              {skills.map((skill, i) => <span key={skill} style={{ "--i": i }}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
  <div className="section-heading">
    <span className="section-number">03</span>

    <div>
      <p className="kicker">Career</p>
      <h2>Work Experience</h2>
    </div>
  </div>

  <div className="experience-list">

    {/* Associate Developer */}
    <article className="experience-item reveal">

      <div className="experience-meta">
        <span className="experience-date">01/2026 — Present</span>
      </div>

      <div className="experience-main">

        <div className="experience-title">
          <div>
            <span className="kicker">Thurston Software Solutions, Inc.</span>

            <h3>
              Associate Developer
            </h3>
          </div>

          <ArrowUpRight className="experience-arrow" size={22} />
        </div>

        <p className="experience-location">
          San Juan City, Philippines
        </p>

        <p className="experience-description">
          Contribute to the development and maintenance of web applications,
          working with senior developers and cross-functional teams to
          implement new features, enhance existing functionality, and
          troubleshoot application issues.
        </p>

        <div className="experience-details">

          <div className="experience-detail">
            <span>●</span>
            <p>
              Write clean, efficient, and maintainable code following
              established coding standards and best practices.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Assist in the design, development, and maintenance of
              web applications.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Participate in debugging, troubleshooting, unit testing,
              and QA validation.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Collaborate with senior developers and cross-functional
              teams to implement new features.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Contribute to code reviews and maintain technical
              documentation.
            </p>
          </div>

        </div>

        <div className="experience-tags">
          <span>C#</span>
          <span>.NET</span>
          <span>ASP.NET MVC</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>GitHub</span>
          <span>Visual Studio</span>
          <span>Agile / Scrum</span>
          <span>Azure DevOps</span>
        </div>

      </div>
    </article>


    {/* Manual QA Tester */}
    <article className="experience-item reveal">

      <div className="experience-meta">
        <span className="experience-date">09/2024 — 01/2026</span>
      </div>

      <div className="experience-main">

        <div className="experience-title">
          <div>
            <span className="kicker">Thurston Software Solutions, Inc.</span>

            <h3>
              QA Tester
            </h3>
          </div>

          <ArrowUpRight className="experience-arrow" size={22} />
        </div>

        <p className="experience-location">
          San Juan City, Philippines
        </p>

        <p className="experience-description">
         - Performed manual software testing across different scenarios and
          conditions, identifying and documenting defects while collaborating
          with developers to ensure reliable application functionality.
        </p>

        <div className="experience-details">

          <div className="experience-detail">
            <span>●</span>
            <p>
              Created and executed manual test cases based on
              system requirements and expected behavior.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Performed functional, regression, frontend, and
              backend testing.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Identified, documented, and tracked bugs while working
              with developers to resolve them.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Performed API testing using Postman and validated
              JSON responses.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Performed regression testing and post-release checks
              within an Agile workflow.
            </p>
          </div>

        </div>

        <div className="experience-tags">
          <span>Manual Testing</span>
          <span>UI/UX Testing</span>
          <span>Test Case Design</span>
          <span>Test Case Execution</span>
          <span>Frontend Testing</span>
          <span>Backend Testing</span>
          <span>Bug Tracking</span>
          <span>API Testing</span>
          <span>Postman</span>
          <span>JSON</span>
          <span>Bearer Token</span>
          <span>SQL</span>
          <span>Agile / Scrum</span>
        </div>

      </div>
    </article>


    {/* Technical Associate Intern */}
    <article className="experience-item reveal">

      <div className="experience-meta">
        <span className="experience-date">03/2024 — 06/2024</span>
      </div>

      <div className="experience-main">

        <div className="experience-title">
          <div>
            <span className="kicker">Cubed Technologies Solutions Phils. Inc.</span>

            <h3>
              Technical Associate Intern
            </h3>
          </div>

          <ArrowUpRight className="experience-arrow" size={22} />
        </div>

        <p className="experience-location">
          Manila City, Philippines
        </p>

        <p className="experience-description">
          - Supported IT teams with network infrastructure, troubleshooting,
          software testing, debugging, database maintenance, and website
          maintenance.
        </p>

        <div className="experience-details">

          <div className="experience-detail">
            <span>●</span>
            <p>
              Supported IT teams in deploying network infrastructure.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Troubleshot hardware and software issues.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Tested and debugged software and provided feedback
              to developers.
            </p>
          </div>

          <div className="experience-detail">
            <span>●</span>
            <p>
              Participated in maintaining internal databases and
              the company website.
            </p>
          </div>

        </div>

        <div className="experience-tags">
          <span>IT Support</span>
          <span>Troubleshooting</span>
          <span>Software Testing</span>
          <span>Software Debugging</span>
          <span>Database Maintenance</span>
          <span>Website Maintenance</span>
        </div>

      </div>
    </article>

  </div>
</section>

        <section className="principles section">
          <div className="container principles-inner">
            <div>
              <p className="kicker">My approach</p>
              <h2>Test the details.<br />Understand the system.<br /><span>Ship with confidence.</span></h2>
            </div>
            <div className="principle-list">
              <div><span>01</span><p>Understand the requirement before writing a test.</p></div>
              <div><span>02</span><p>Think beyond the happy path and find edge cases.</p></div>
              <div><span>03</span><p>Use data and APIs to investigate issues.</p></div>
              <div><span>04</span><p>Retest fixes and protect existing functionality.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <div className="contact-box">
            <div>
              <p className="kicker">04 / Contact</p>
              <h2>Let's build something<br /><span>reliable.</span></h2>
              <p>Open to QA Testing, and Web Applications development opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:christianortiz.dave@gmail.com">
                <Mail size={17} /> Email me
              </a>
              <div className="socials">
                <a href="https://github.com/chrsortz" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/chrsortizdave" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2026 - made by chrsortz.dev </span>
        <span>QA Tester · Associate Developer</span>
        <button onClick={() => go("home")}>Back to top ↑</button>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close icon-btn" onClick={() => setActiveProject(null)}><X size={19} /></button>
            <span className="project-type">{activeProject.type}</span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
            <div className="modal-detail">
              <div><ShieldCheck size={19} /><span>Functional & regression testing</span></div>
              <div><ShieldCheck size={19} /><span>Defect investigation & retesting</span></div>
              <div><ShieldCheck size={19} /><span>Data & business-rule validation</span></div>
            </div>
            <div className="tags">{activeProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
