import Reveal from '../components/Reveal'
import { CircularTestimonials } from '@/components/ui/circular-testimonials'
import { testimonials } from '../data/content'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{testimonials.tag}</div>
          <h2 className="section-title">{testimonials.title}</h2>
          <p className="testimonials-note">
            Demo quotes for layout - swap in real mentor / teammate / ORELSE recommendations anytime.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="testimonials-stage">
          <CircularTestimonials
            testimonials={testimonials.items}
            autoplay
            colors={{
              name: '#eef2f7',
              designation: '#95a1b4',
              testimony: '#d5dbe6',
              arrowBackground: '#141c26',
              arrowForeground: '#f1f1f7',
              arrowHoverBackground: '#3dbaa4',
            }}
            fontSizes={{
              name: '1.65rem',
              designation: '0.9rem',
              quote: '1.15rem',
            }}
          />
        </Reveal>
      </div>
    </section>
  )
}
