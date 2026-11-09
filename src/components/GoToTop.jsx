import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './GoToTop.css'

export default function GoToTop() {
  const [visible, setVisible] = useState(false)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * 0.45)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const goTop = () => {
    const home = document.getElementById('home')
    if (home) {
      home.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="go-top"
          aria-label="Go to top"
          title="Go to top"
          onClick={goTop}
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
