import { services } from '../data/content'
import Reveal from '../components/Reveal'
import './Services.css'

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{services.tag}</div>
          <h2 className="section-title">{services.title}</h2>
          <p className="services__intro">{services.intro}</p>
        </Reveal>

        <div className="services__grid">
          {services.items.map((item, i) => (
            <Reveal className="services__item" key={item.id} delay={0.06 * i}>
              <div className="services__index">0{i + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
