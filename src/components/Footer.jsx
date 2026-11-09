import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { nav, profile } from '../data/content'
import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo" aria-label="Sujal Bolke home">
            <Logo />
          </Link>
          <p>
            MERN Stack Developer building web systems, AI tools, and deploy-ready
            sites from {profile.location}.
          </p>
        </div>

        <div className="site-footer__col">
          <h3>Explore</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Location</h3>
          <p>{profile.location}</p>
          <p className="site-footer__muted">{profile.availability}</p>
          <a
            className="site-footer__resume"
            href={`${import.meta.env.BASE_URL}${profile.resume}`}
            download
          >
            Download resume
          </a>
        </div>

        <div className="site-footer__col">
          <h3>Connect</h3>
          <div className="site-footer__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <a className="site-footer__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>

      <div className="wrap site-footer__bar">
        <span>
          <span className="prompt">$</span> echo &quot;thanks for stopping by&quot; · Sujal
          Bolke, {year}
        </span>
        <a href={profile.phoneHref}>{profile.phone}</a>
      </div>
    </footer>
  )
}
