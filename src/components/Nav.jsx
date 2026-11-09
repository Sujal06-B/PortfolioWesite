import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { nav } from '../data/content'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [progress, setProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = [
      'home',
      'open-to',
      'about',
      'services',
      'skills',
      'projects',
      'experience',
      'testimonials',
      'achievements',
      'certificates',
      'education',
      'contact',
    ]
    const toNav = {
      home: 'home',
      'open-to': 'home',
      about: 'about',
      services: 'services',
      skills: 'skills',
      projects: 'projects',
      experience: 'experience',
      testimonials: 'experience',
      achievements: 'certificates',
      certificates: 'certificates',
      education: 'certificates',
      contact: 'contact',
    }

    const update = () => {
      const navH =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
        ) || 68
  const marker = navH + 24
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= marker) current = toNav[id]
      }
      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="site-header">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden
      />
      <nav className="site-nav wrap">
        <Link to="/" className="logo" onClick={() => setOpen(false)} aria-label="Home">
          <Logo />
        </Link>

        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    className="active-line"
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
