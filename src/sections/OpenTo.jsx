import { openTo } from '../data/content'
import Reveal from '../components/Reveal'
import './OpenTo.css'

export default function OpenTo() {
  return (
    <section className="open-to" id="open-to" aria-labelledby="open-to-title">
      <div className="wrap">
        <Reveal className="open-to__panel">
          <div className="open-to__tag">{openTo.tag}</div>
          <h2 id="open-to-title" className="open-to__title">
            {openTo.title}
          </h2>
          <div className="open-to__grid">
            <div>
              <div className="open-to__label">Roles</div>
              <ul className="open-to__chips">
                {openTo.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="open-to__label">Locations / mode</div>
              <ul className="open-to__chips">
                {openTo.workModes.map((mode) => (
                  <li key={mode}>{mode}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="open-to__label">Start date</div>
              <p className="open-to__start">{openTo.startDate}</p>
              <p className="open-to__note">{openTo.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
