import './Teaching.css'

const ROWS = [
  { term: '[TERM]', role: 'Instructor', course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { term: '[TERM]', role: 'TA',         course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { term: '[TERM]', role: 'TA',         course: '[COURSE NAME] ([CODE])', level: '[LEVEL · # students]' },
  { term: '—',      role: 'Mentor',     course: '[# theses supervised]',  level: 'ongoing' },
]

export default function Teaching() {
  return (
    <section className="s" id="teaching">
      <div className="secH">
        <span className="num">§ 04</span>
        <h2>Teaching</h2>
        <span className="rule" />
        <span className="meta">[INSTITUTION] · [YEAR_FROM] – present</span>
      </div>
      <table className="teach rv">
        <thead>
          <tr>
            <th>term</th>
            <th>role</th>
            <th>course</th>
            <th>level</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r, i) => (
            <tr key={i}>
              <td>{r.term}</td>
              <td>{r.role}</td>
              <td>{r.course}</td>
              <td>{r.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
