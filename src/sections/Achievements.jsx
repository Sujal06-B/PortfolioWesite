import { achievements } from '../data/content'
import Reveal from '../components/Reveal'
import './Achievements.css'

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{achievements.tag}</div>
          <h2 className="section-title">{achievements.title}</h2>
        </Reveal>

        <div className="achieve-grid">
          <Reveal className="achieve-list" delay={0.05}>
            {achievements.items.map((item) => (
              <div className="achieve-item" key={item.title}>
                <div className="achieve-mark" aria-hidden />
                <div>
                  <div className="a-title">{item.title}</div>
                  <div className="a-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="cert-block" delay={0.12}>
            <h3>{achievements.cert.title}</h3>
            <p>{achievements.cert.body}</p>
            <div className="cert-tags">
              {achievements.cert.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
