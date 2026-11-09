import { about, profile } from '../data/content'
import Reveal from '../components/Reveal'
import './About.css'

const photoSrc = `${import.meta.env.BASE_URL}${profile.photo}`

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{about.tag}</div>
          <h2 className="section-title">{about.title}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-main" delay={0.05}>
            <div className="about-photo-wrap">
              <img
                src={photoSrc}
                alt={`${profile.name} - MERN Stack Developer`}
                className="about-photo"
                width={280}
                height={280}
              />
              <div className="about-photo-meta">
                <strong>{profile.name}</strong>
                <span>{profile.role}</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="about-copy">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-stats" delay={0.12}>
            {about.stats.map((stat, i) => (
              <div className="stat-row" key={stat.label} style={{ '--i': i }}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
