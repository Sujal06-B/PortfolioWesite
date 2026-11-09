import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { hero, profile } from '../data/content'
import MagneticButton from '../components/MagneticButton'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './Hero.css'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = usePrefersReducedMotion()
  const photoSrc = `${import.meta.env.BASE_URL}${hero.photo}`
  const nameParts = profile.name.split(' ')

  return (
    <section id="home" className="hero-root" aria-labelledby="hero-heading">
      <div className="hero-shell wrap">
        <div className="hero-copy">
          <motion.p
            className="hero-status"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <span className="hero-status__dot" aria-hidden />
            Available for new roles
          </motion.p>

          <h1 id="hero-heading" className="hero-name">
            {nameParts.map((word, i) => (
              <span className="hero-name__clip" key={word}>
                <motion.span
                  className="hero-name__word"
                  initial={reduce ? false : { y: '108%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.7, delay: 0.06 + i * 0.1, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-lede"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
          >
            {hero.headline}
          </motion.p>

          <motion.p
            className="hero-role"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36, ease }}
          >
            {hero.roleLine}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.44, ease }}
          >
            <MagneticButton href="#projects" variant="primary">
              View projects
            </MagneticButton>
            <MagneticButton
              href={`${import.meta.env.BASE_URL}${profile.resume}`}
              variant="ghost"
              download
            >
              Download resume
            </MagneticButton>
          </motion.div>

          <motion.nav
            className="hero-socials"
            aria-label="Social links"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={15} />
            </a>
          </motion.nav>
        </div>

        <aside className="hero-visual">
          <motion.div
            className="hero-portrait__frame"
            initial={reduce ? false : { clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
          >
            <motion.img
              src={photoSrc}
              alt={`${profile.name}, ${profile.role}`}
              width={760}
              height={950}
              decoding="async"
              fetchPriority="high"
              initial={reduce ? false : { scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.05, delay: 0.22, ease }}
            />
          </motion.div>
        </aside>
      </div>
    </section>
  )
}
