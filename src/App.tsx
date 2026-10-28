import MagicWandCursor from './components/MagicWandCursor'
import ProjectCard from './components/ProjectCard'
import SiteNav from './components/SiteNav'
import { seamCarvingProject } from './data/projects'

function ArrowMark() {
  return <span className="arrow-mark" aria-hidden="true">↗</span>
}

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <MagicWandCursor />
      <div className="site-shell">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__photo" aria-hidden="true" />
          <div className="hero__shade" aria-hidden="true" />
          <SiteNav />
          <div className="hero__main">
            <h1 id="hero-title" className="hero-title">Hi, I'm Jess Chan and</h1>
            <p className="hero__tagline">I have a question. And probably a project.</p>
            <div className="hero__intro">
              <p>UofT Computer Eng 2T9.</p>
            </div>
            <div className="hero-actions">
              <a className="button button--ice" href="#work">See my projects <ArrowMark /></a>
              <a className="hero__text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <main id="main">
          <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
            <div className="section-heading">
              <div><p className="eyebrow">Things I’ve made</p><h2 id="work-title">Seam <em>Carving</em></h2></div>
            </div>
            <ProjectCard project={seamCarvingProject} />
            <p className="after-card-note">more project in progress...</p>
          </section>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="about-inner section-wrap">
              <div className="about-heading"><h2 id="about-title">About Me</h2></div>
              <div className="about-composition">
                <figure className="about-image">
                  <img src="/images/jess-portrait.png" alt="Jess Chan" />
                </figure>
                <article className="about-paper" id="cute-things">
                  <p className="paper-label">A small introduction of</p>
                  <h3>My Curiosity.</h3>
                  <p>I'm a Computer Engineering student at the University of Toronto. I’m drawn to the moment when something I don't understand becomes something I can explain and, eventually, build. I like the space between having an idea and figuring out how to make it real.</p>
                  <p>Sometimes that means getting into the details of an algorithm. But I usually want to take it a step further, to find a better way to present information or turn a rough idea into something people can actually use. And I always question myself: Could I implement it myself? Could I approach it differently? What would happen if I tried?</p>
                  <p>I'm interested in software, data, and AI, but what draws me to them is the range of things you can do with them and the process of figuring out how.</p>
                  <p>I want to keep building, keep asking questions, and get better at turning things I wonder about into things that work.</p>
                  <span className="paper-stamp" aria-hidden="true">J.C.</span>
                </article>
              </div>
            </div>
          </section>

          <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
            <div className="contact-topline"><span>Get in touch!</span></div>
            <div className="contact-content">
              <div><h2 id="contact-title">Have a good<br /><em>question?</em></h2></div>
              <div className="contact-copy">
                <p>If you’re curious about my work, have something interesting to chat about, come say hi.</p>
                <div className="contact-links">
                  <a className="button button--cream" href="https://github.com/notyourjess555" target="_blank" rel="noreferrer">Find me on GitHub <ArrowMark /></a>
                  <a className="contact-icon-link" href="https://www.linkedin.com/in/jess-chan-66b35a3b2/" target="_blank" rel="noreferrer" aria-label="Jess Chan on LinkedIn">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.2H2.4V21h2.8V8.2ZM3.8 2.5a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM21.6 13.7c0-3.85-2.05-5.65-4.8-5.65a4.15 4.15 0 0 0-3.74 2.06V8.2h-2.8V21h2.8v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21h2.8l1.29-7.3Z" /></svg>
                  </a>
                  <a className="contact-icon-link contact-icon-link--mail" href="mailto:jessly.chan@mail.utoronto.ca" aria-label="Email Jess Chan at jessly.chan@mail.utoronto.ca">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5 12 13l9-6.5" fill="none" stroke="#4285f4" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 5.5 12 11l8-5.5" fill="none" stroke="#ea4335" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M3.5 7v11.5c0 .55.45 1 1 1H7V9" fill="none" stroke="#34a853" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M20.5 7v11.5c0 .55-.45 1-1 1H17V9" fill="none" stroke="#fbbc04" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>
            </div>
            <span className="contact-scribble" aria-hidden="true">say hi!</span>
          </section>
        </main>

        <footer className="site-footer section-wrap"><a className="footer-mark" href="#home">Jess Chan <span aria-hidden="true">↗</span></a><p>made with curiosity, and probably a snack nearby.</p><span>© Jess Chan {year}</span></footer>
      </div>
    </>
  )
}
