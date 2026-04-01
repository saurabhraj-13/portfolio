import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="nav">
        <h2>Saurabh Raj</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Java Full Stack Developer</h1>
        <p>Building scalable web applications using Java, Spring Boot & MySQL</p>
        <a href="#projects" className="btn">View Projects</a>
        <a href="/resume.pdf" className="btn" download>Download Resume</a>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student with experience in Java Full Stack Development.
          I specialize in building REST APIs and backend systems.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Student Task Management System</h3>
          <p>Full-stack app using Spring Boot & MySQL with authentication.</p>
        </div>

        <div className="card">
          <h3>Online Job Portal</h3>
          <p>Role-based job portal with REST APIs.</p>
        </div>

        <div className="card">
          <h3>Scan-X Diagnosis</h3>
          <p>ML-based healthcare project.</p>
        </div>

      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>DSA</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: ssaurabhraj86@gmail.com</p>
        <p>Phone: +91-9905782647</p>
      </section>

      <footer>
        <p>© 2026 Saurabh Raj</p>
      </footer>

    </div>
  );
}

export default App;