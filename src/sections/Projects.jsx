import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/content'
import Reveal from '../components/Reveal'
import './Projects.css'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const springX = useSpring(mx, { stiffness: 180, damping: 22 })
  const springY = useSpring(my, { stiffness: 180, damping: 22 })
  const glow = useMotionTemplate`radial-gradient(420px circle at ${springX}% ${springY}%, rgba(61,186,164,0.16), transparent 45%)`

  const onMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        ref={ref}
        className="project-card"
        onMouseMove={onMove}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
      >
        <motion.div className="project-glow" style={{ background: glow }} aria-hidden />
        <div className="ptag">{project.tag}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="metric-row">
          {project.metrics.map((m) => (
            <span className="metric" key={m}>
              {m}
            </span>
          ))}
        </div>
        <p className="note">{project.note}</p>
        <div className="project-card__footer">
          <div className="tech-row">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="project-links">
              {project.links.map((link) => {
                const isGithub = link.href.includes('github.com')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={link.label}
                  >
                    {isGithub ? <FaGithub size={13} /> : <ExternalLink size={13} />}
                    {link.label}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{projects.tag}</div>
          <h2 className="section-title">{projects.title}</h2>
        </Reveal>

        <div className="project-grid">
          {projects.items.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
