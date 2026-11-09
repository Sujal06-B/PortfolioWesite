import { education } from '../data/content'
import Reveal from '../components/Reveal'
import './Education.css'

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="wrap">
        <Reveal>
          <div className="section-tag">{education.tag}</div>
          <h2 className="section-title">{education.title}</h2>
        </Reveal>

        <Reveal className="edu-table-wrap" delay={0.08}>
          <table className="edu">
            <thead>
              <tr>
                <th>Qualification</th>
                <th>Board / University</th>
                <th>Year</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {education.rows.map((row) => (
                <tr key={row.qual}>
                  <td className="qual">{row.qual}</td>
                  <td>{row.board}</td>
                  <td>{row.year}</td>
                  <td className="score">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
