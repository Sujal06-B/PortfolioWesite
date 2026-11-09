import { contact, profile } from '../data/content'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-panel">
          <div className="section-tag center">{contact.tag}</div>
          <h2>{contact.title}</h2>
          <p>{contact.body}</p>
          <div className="contact-methods">
            <MagneticButton href={`mailto:${profile.email}`} variant="primary">
              {profile.email}
            </MagneticButton>
            <MagneticButton
              href={profile.linkedin}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </MagneticButton>
            <MagneticButton
              href={profile.github}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </MagneticButton>
            <MagneticButton
              href={profile.instagram}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </MagneticButton>
            <MagneticButton
              href={`${import.meta.env.BASE_URL}${profile.resume}`}
              variant="ghost"
              download
            >
              Resume PDF ↓
            </MagneticButton>
          </div>
          <p className="location">{profile.location}</p>
        </Reveal>
      </div>
    </section>
  )
}
