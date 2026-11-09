import Reveal from '../components/Reveal'
import ExperienceJourney from '../components/ExperienceJourney'
import { experience } from '../data/content'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{experience.tag}</div>
          <h2 className="section-title">{experience.title}</h2>
          <p className="journey-intro">
            From campus foundations to production shipping - a scrollable map of how I grew as a builder.
          </p>
        </Reveal>

        <ExperienceJourney />
      </div>
    </section>
  )
}
