import './Teaching.css'

const ROWS = [
  { institution: '[INSTITUTION]', year: '[YEAR_FROM]', term: '[TERM]', role: 'Instructor', course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { institution: '[INSTITUTION]', year: '[YEAR_FROM]', term: '[TERM]', role: 'TA',         course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { institution: '[INSTITUTION]', year: '[YEAR_FROM]', term: '[TERM]', role: 'TA',         course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { institution: '[INSTITUTION]', year: '[YEAR_FROM]', term: '—',      role: 'Mentor',     course: '[# theses supervised]',  level: 'ongoing' },
]

export default function Teaching() {
  return (
    <section className="s" id="teaching">
      <div className="secH">
        <span className="num">§ 04</span>
        <h2>Teaching</h2>
        <span className="rule" />
      </div>
      <div className="teach-wrap rv">
        <table className="teach">
          <thead>
            <tr>
              <th>institution</th>
              <th>year</th>
              <th>semester</th>
              <th>role</th>
              <th>course</th>
              <th>level</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i}>
                <td>{r.institution}</td>
                <td>{r.year}</td>
                <td>{r.term}</td>
                <td>{r.role}</td>
                <td>{r.course}</td>
                <td>{r.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
