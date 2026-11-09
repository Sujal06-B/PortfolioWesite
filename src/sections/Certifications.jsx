import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { certifications } from '../data/content'
import Reveal from '../components/Reveal'
import './Certifications.css'

function asset(path) {
  return `${import.meta.env.BASE_URL}${path}`
}

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section className="section certifications" id="certificates">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{certifications.tag}</div>
          <h2 className="section-title">{certifications.title}</h2>
          <p className="certs__intro">{certifications.intro}</p>
        </Reveal>

        <div className="certs__grid">
          {certifications.items.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.04, 0.28)}>
              <button
                type="button"
                className="certs__card"
                onClick={() => setActive(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="certs__thumb">
                  <img src={asset(item.image)} alt="" loading="lazy" />
                </div>
                <div className="certs__meta">
                  <div className="certs__score">{item.score}</div>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                  <span>{item.detail}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="certs__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.figure
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={asset(active.image)} alt={active.title} />
              <figcaption>
                <strong>{active.title}</strong>
                <span>
                  {active.org} · {active.score}
                </span>
              </figcaption>
              <button
                type="button"
                className="certs__close"
                onClick={() => setActive(null)}
                aria-label="Close certificate"
              >
                Close
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
