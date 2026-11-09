import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import {
  GraduationCap,
  Trophy,
  Brain,
  Briefcase,
  Rocket,
} from 'lucide-react'
import { experience } from '../data/content'
import './ExperienceJourney.css'

const ICONS = {
  graduation: GraduationCap,
  trophy: Trophy,
  brain: Brain,
  briefcase: Briefcase,
  rocket: Rocket,
}

const easeOut = [0.22, 1, 0.36, 1]

function JourneyNode({ stage, index, total }) {
  const reduce = useReducedMotion()
  const Icon = ICONS[stage.icon] || Briefcase
  const side = index % 2 === 0 ? 'left' : 'right'
  const isTeal = stage.accent === 'teal'

  return (
    <motion.article
      className={`journey-node journey-node--${side} journey-node--${stage.accent}`}
      initial={reduce ? false : { opacity: 0, y: 40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.35, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
    >
      <div className="journey-node__rail" aria-hidden>
        <motion.div
          className="journey-node__orb"
          initial={reduce ? false : { scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.08 }}
        >
          <Icon size={20} strokeWidth={1.75} />
        </motion.div>
        {index < total - 1 ? <div className="journey-node__gap" /> : null}
      </div>

      <div className="journey-node__body">
        <div className="journey-node__meta">
          <span className={`journey-pill ${isTeal ? 'journey-pill--teal' : 'journey-pill--champagne'}`}>
            {stage.label}
          </span>
          <span className="journey-year">{stage.year}</span>
        </div>
        <h3 className="journey-node__title">{stage.title}</h3>
        <ul className="journey-points">
          {stage.points.map((point, i) => (
            <motion.li
              key={point}
              initial={reduce ? false : { opacity: 0, x: side === 'left' ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.12 + i * 0.06, ease: easeOut }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function ExperienceJourney() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const stages = experience.journey

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 55%'],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  })

  const pathLength = useTransform(progress, [0, 1], [0, 1])
  const glowOpacity = useTransform(progress, [0, 0.15, 1], [0.2, 0.7, 1])

  return (
    <div className="journey" ref={ref}>
      <div className="journey-track" aria-hidden>
        <svg
          className="journey-svg"
          viewBox="0 0 80 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Winding road - Precision Ink palette */}
          <path
            className="journey-path-bg"
            d="M40 8
               C 40 90, 14 140, 14 220
               C 14 300, 66 340, 66 420
               C 66 500, 14 540, 14 620
               C 14 700, 66 740, 66 820
               C 66 900, 40 940, 40 992"
          />
          <motion.path
            className="journey-path-draw"
            d="M40 8
               C 40 90, 14 140, 14 220
               C 14 300, 66 340, 66 420
               C 66 500, 14 540, 14 620
               C 14 700, 66 740, 66 820
               C 66 900, 40 940, 40 992"
            style={
              reduce
                ? { pathLength: 1, opacity: 0.9 }
                : { pathLength, opacity: glowOpacity }
            }
          />
          <path
            className="journey-path-dash"
            d="M40 8
               C 40 90, 14 140, 14 220
               C 14 300, 66 340, 66 420
               C 66 500, 14 540, 14 620
               C 14 700, 66 740, 66 820
               C 66 900, 40 940, 40 992"
          />
        </svg>
      </div>

      <div className="journey-list">
        {stages.map((stage, index) => (
          <JourneyNode
            key={stage.id}
            stage={stage}
            index={index}
            total={stages.length}
          />
        ))}
      </div>
    </div>
  )
}
