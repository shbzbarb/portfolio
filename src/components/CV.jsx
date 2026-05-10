import './CV.css'

export default function CV() {
  return (
    <section className="s" id="cv">
      <div className="secH">
        <span className="num">§ 05</span>
        <h2>Curriculum vitae</h2>
        <span className="rule" />
        <span className="meta">condensed</span>
      </div>
      <div className="cv rv">
        <div className="lbl">Education</div>
        <div className="item">
          <div className="yrs"> 2026 — Ongoing</div>
          <div className="what">PhD, Computer Science</div>
          <div className="where">Johannes Kepler Universität Linz</div>
        </div>
        <div className="item">
          <div className="yrs">2020 — 2022</div>
          <div className="what">MSc, Interactive Media </div>
          <div className="where">University of Applied Sciences Upper Austria</div>
        </div>
        <div className="item">
          <div className="yrs">2013 — 2015</div>
          <div className="what">MSc, Computer Science</div>
          <div className="where">Assam (Central) University</div>
        </div>
        <div className="item">
          <div className="yrs">2010 — 2013</div>
          <div className="what">BSc, Computer Science</div>
          <div className="where">Assam (Central) University</div>
        </div>
        <a href="#" className="dl">↓ download cv.pdf</a>
      </div>
    </section>
  )
}