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
            <p className="hero__eyebrow">Computer Engineering · University of Toronto</p>
            <h1 id="hero-title" className="hero-title"><span>Jess</span><span>Chan<span className="hero-title__period">.</span></span></h1>
            <div className="hero__intro">
              <p>Computer Engineering student at U of T, drawn to the moment a complicated idea starts to click — and to the creative choices that make it feel human.</p>
              <p>Outside class, I reset on a bike, chase a good ski day, or try a recipe that turns the kitchen into a small experiment.</p>
            </div>
            <div className="hero-actions">
              <a className="button button--ice" href="#work">See my projects <ArrowMark /></a>
              <a className="hero__text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero__footer"><span>Toronto, Canada</span><a href="#cute-things">A few things I love <span aria-hidden="true">↘</span></a><span>Scroll a little <span aria-hidden="true">↓</span></span></div>
        </section>

        <main id="main">
        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Things I’ve made</p><h2 id="work-title">Selected <em>work</em></h2></div>
            <p className="section-heading__aside">A little engineering, a little curiosity,<br />and a closer look at how things work.</p>
          </div>
          <ProjectCard project={seamCarvingProject} />
          <p className="after-card-note"><span aria-hidden="true">✳</span> One project at a time. More good questions in progress.</p>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-wrap">
            <div className="about-heading"><p className="eyebrow">02 / Outside the circuit</p><h2 id="about-title">A little <em>about</em> me</h2></div>
            <div className="about-composition">
              <figure className="about-image">
                <img src="/images/ocean-hero.jpg" alt="Black and white ocean foam breaking across dark water" />
                <figcaption>Field notes · somewhere between plans</figcaption>
                <span className="about-image__scribble" aria-hidden="true">look closer ↗</span>
              </figure>
              <article className="about-paper">
                <p className="paper-label">A small introduction</p>
                <h3>Curious about<br />a lot of things.</h3>
                <p>I’m studying Computer Engineering at the University of Toronto. I like when a tricky idea finally makes sense, and when there’s room to make the result feel like a person made it.</p>
                <p>When I’m away from a screen, I’m usually biking, hoping for a good ski day, drawing, or in the kitchen trying a new recipe or cuisine. Once something catches my interest, I tend to get happily deep into it.</p>
                <div className="about-tags" id="cute-things" aria-label="Some cute things Jess enjoys"><span>bike rides</span><span>snow days</span><span>new recipes</span><span>drawing things</span></div>
                <span className="paper-stamp" aria-hidden="true">J.C.</span>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact-topline"><span>03 / Keep in touch</span><span>Toronto, Canada · always happy to meet a good question</span></div>
          <div className="contact-content">
            <div><p className="eyebrow">A note, a question, a new idea</p><h2 id="contact-title">Have a good<br /><em>question?</em></h2></div>
            <div className="contact-copy"><p>If you’re curious about the work, have something interesting to share, or want to talk engineering, come say hi.</p><a className="button button--cream" href="https://github.com/notyourjess555" target="_blank" rel="noreferrer">Find me on GitHub <ArrowMark /></a></div>
          </div>
          <span className="contact-scribble" aria-hidden="true">say hi!</span>
        </section>
        </main>

        <footer className="site-footer section-wrap"><a className="footer-mark" href="#home">Jess Chan <span aria-hidden="true">↗</span></a><p>Made with curiosity, and probably a snack nearby.</p><span>© {year}</span></footer>
      </div>
    </>
  )
}
