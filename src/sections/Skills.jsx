import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/content'
import Reveal from '../components/Reveal'
import { CardStack } from '@/components/ui/card-stack'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './Skills.css'

export default function Skills() {
  const isNarrow = useMediaQuery('(max-width: 720px)')
  const isTablet = useMediaQuery('(max-width: 960px)')
  const [activeChips, setActiveChips] = useState(skills.stack[0]?.chips ?? [])

  const cardWidth = isNarrow ? 260 : isTablet ? 340 : 440
  const cardHeight = isNarrow ? 200 : isTablet ? 240 : 280

  return (
    <section className="section skills" id="skills">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{skills.tag}</div>
          <h2 className="section-title">{skills.title}</h2>
        </Reveal>

        <Reveal delay={0.06} className="skills-stack">
          <CardStack
            items={skills.stack}
            initialIndex={0}
            autoAdvance
            intervalMs={3200}
            pauseOnHover
            showDots
            loop
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            overlap={isNarrow ? 0.62 : 0.5}
            spreadDeg={isNarrow ? 28 : 44}
            maxVisible={isNarrow ? 5 : 7}
            onChangeIndex={(_i, item) => setActiveChips(item.chips ?? [])}
          />
        </Reveal>

        <Reveal delay={0.12} className="skills-active">
          <div className="cmd">
            <span className="prompt">$</span> cat active.stack.json
          </div>
          <div className="chip-row">
            {activeChips.map((item, i) => (
              <motion.span
                key={`${item}-${i}`}
                className="chip"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 24,
                  delay: i * 0.03,
                }}
                whileHover={{ y: -2, scale: 1.03 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
