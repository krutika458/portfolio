import "./App.css";

function App() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Java",
    "C",
    "C++",
    "Git",
    "GitHub",
    "MySQL",
    "Firebase",
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Your Name</span>
          </h1>

          <h2>Student Developer</h2>

          <p>
            Passionate student developer building modern web applications and
            continuously learning new technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hello! I'm a student developer passionate about creating modern and
          user-friendly web applications. I enjoy learning new technologies,
          solving problems, and building projects that improve everyday
          experiences. My goal is to become a skilled full-stack developer and
          contribute to impactful software solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="project-card">
          <h3>FreshMart - E-Commerce Grocery Website</h3>

          <p>
            FreshMart is a modern online grocery shopping platform that allows
            customers to browse fresh groceries, vegetables, fruits, dairy
            products, and household essentials. It focuses on a clean shopping
            experience, fast navigation, and user-friendly design.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a href="/">GitHub Link</a>
            <a href="/">Live Demo</a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>Current Education</h3>
          <p>[Course / Degree Name]</p>
          <p>[School / College Name]</p>
          <p>Expected Graduation: [Year]</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <h2 className="section-title">Certifications</h2>

        <div className="certificate-card">
          <h3>Microsoft Certification</h3>

          <p>
            Successfully completed a Microsoft Certification program,
            demonstrating technical knowledge and problem-solving skills.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <div className="contact-card">
            <h4>Email</h4>
            <p>your.email@example.com</p>
          </div>

          <div className="contact-card">
            <h4>GitHub</h4>
            <p>github.com/yourusername</p>
          </div>

          <div className="contact-card">
            <h4>LinkedIn</h4>
            <p>linkedin.com/in/yourusername</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Your Name. All Rights Reserved.</p>
      </footer>

      {/* Scroll Top */}
      <button
        className="scroll-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>
    </div>
  );
}

export default App;