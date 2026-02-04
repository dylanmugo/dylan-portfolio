'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">DM</a>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li><a href="/Dylan_Mugo-CV.pdf" target="_blank">CV</a></li>
            </ul>
            <a href="mailto:Dylanmugo15@icloud.com" className="btn-contact">Contact Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">Full-Stack Developer</p>
          <h1>Hello, I'm Dylan Mugo.</h1>
          <p className="hero-desc">Final Year Computing Student focused on building clean, scalable web and mobile experiences.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/Dylan_Mugo-CV.pdf" className="btn-secondary" target="_blank">View CV</a>
          </div>
          <a href="https://www.linkedin.com/in/dylan-mugo-9601a124a/" target="_blank" className="hero-link">LinkedIn Profile</a>
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
        <div className="about-header">
          <p className="section-label">About Me</p>
          <h2>Passionate about building digital experiences that matter</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>I'm a final year Computing student with a passion for creating scalable web and mobile applications. My journey in tech has equipped me with hands-on experience across the full stack, from crafting intuitive user interfaces to designing robust backend systems.</p>
            <p>I thrive in Agile environments and enjoy collaborating with teams to solve complex problems. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.</p>
          </div>

          <div className="about-details">
            <div className="currently-card">
              <p className="label">Currently</p>
              <p>Exploring modern frontend workflows, performance optimization, and API design.</p>
            </div>
            <div className="location-card">
              <p className="label">Based in</p>
              <p>Drogheda, Ireland</p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <p className="skill-title">Languages</p>
              <div className="skill-tags">
                <span>JavaScript</span>
                <span>Python</span>
                <span>Java</span>
                <span>C</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-title">Frontend</p>
              <div className="skill-tags">
                <span>React</span>
                <span>Next.js</span>
                <span>HTML/CSS</span>
                <span>Tailwind</span>
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-title">Backend</p>
              <div className="skill-tags">
                <span>Node.js</span>
                <span>Django</span>
                <span>REST APIs</span>
                <span>Supabase</span>
              </div>
            </div>
            <div className="skill-category">
              <p className="skill-title">Tools</p>
              <div className="skill-tags">
                <span>Git</span>
                <span>Docker</span>
                <span>Figma</span>
                <span>Agile</span>
              </div>
            </div>
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
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p className="contact-desc">Have a project in mind or want to chat? Send me a message and I'll get back to you.</p>
            <div className="contact-links">
              <a href="mailto:Dylanmugo15@icloud.com">Dylanmugo15@icloud.com</a>
              <a href="https://www.linkedin.com/in/dylan-mugo" target="_blank">LinkedIn</a>
              <a href="https://github.com/dylanmugo" target="_blank">GitHub</a>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/mykdgylo" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Dylan Mugo. Drogheda, Ireland.</p>
      </footer>
    </>
  )
}
