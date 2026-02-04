import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">DM</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Dylan_Mugo-CV.pdf" target="_blank">CV</a></li>
        </ul>
        <a href="mailto:Dylanmugo15@icloud.com" className="btn-contact">Contact Me</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">Full-Stack Developer</p>
          <h1>Hi, I'm Dylan Mugo.</h1>
          <p className="hero-desc">Final Year Computing Student focused on building clean, scalable web and mobile experiences.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/Dylan_Mugo-CV.pdf" className="btn-secondary" target="_blank">View CV</a>
          </div>
          <a href="https://www.linkedin.com/in/dylan-mugo" target="_blank" className="hero-link">LinkedIn Profile</a>
        </div>
        <div className="profile-card">
          <img src="/profile.jpg" alt="Dylan Mugo" />
          <div className="profile-info">
            <p className="label">Focus</p>
            <p>Full-stack apps, APIs, and user-centered interfaces.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p className="about-subtitle">Developer with hands-on experience in Java, Python, Next.js, and SQL.</p>
        <div className="about-grid">
          <div className="about-card">
            <p>Aspiring software engineer with experience in Java, Python, Next.js, and SQL. Passionate about building scalable web and mobile applications and working in Agile teams. Developed projects like a student collaboration platform and a logistics management system. Seeking a software engineering or IT role to apply my skills and grow.</p>
          </div>
          <div className="currently-card">
            <p className="label">Currently</p>
            <p>Exploring modern frontend workflows, performance optimization, and API design.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <p className="projects-subtitle">Selected work that highlights full-stack engineering and product thinking.</p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Course Connect</h3>
            <p className="project-tech">React · Next.js · Supabase</p>
            <p>A student collaboration PWA with task tracking, timetables, study groups, and gamification features.</p>
            <a href="https://github.com/dylanmugo" target="_blank" className="project-link">GitHub Repository</a>
          </div>
          <div className="project-card">
            <h3>Sports Logistics System</h3>
            <p className="project-tech">Django · Python · REST APIs</p>
            <p>A warehouse management system with role-based dashboards and CRUD operations for orders and shipments.</p>
            <a href="https://github.com/dylanmugo" target="_blank" className="project-link">GitHub Repository</a>
          </div>
          <div className="project-card">
            <h3>Neutron Transport Simulation</h3>
            <p className="project-tech">C · pthreads · HPC</p>
            <p>High-performance computing project with parallel neutron shielding simulations and data visualization.</p>
            <a href="https://github.com/dylanmugo" target="_blank" className="project-link">GitHub Repository</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-links">
          <a href="mailto:Dylanmugo15@icloud.com">Dylanmugo15@icloud.com</a>
          <a href="https://www.linkedin.com/in/dylan-mugo" target="_blank">LinkedIn</a>
          <a href="https://github.com/dylanmugo" target="_blank">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Dylan Mugo. Drogheda, Ireland.</p>
      </footer>
    </>
  )
}
