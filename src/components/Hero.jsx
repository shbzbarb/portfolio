import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const BOOT_LINES = [
  { html: '<span class="pr">sahabaj@jku</span>:<span class="cy">~/portfolio</span>$ ./init.sh', delay: 200 },
  { html: '<span class="ok">→</span> loading research_profile <span class="pink">…</span>', delay: 220 },
  { html: '<span class="ok">→</span> mounting <span class="cy">/hci</span> <span class="cy">/games</span> <span class="cy">/visualization</span>', delay: 240 },
  { html: '<span class="ok">→</span> indexing projects <span class="warn">[####······]</span> 47%', delay: 280 },
  { html: '<span class="ok">→</span> indexing projects <span class="ok">[##########]</span> done', delay: 220 },
  { html: '<span class="ok">[ ok ]</span> profile ready - 6 sections - 0 errors', delay: 260 },
  { html: '<span class="pr">sahabaj@jku</span>:<span class="cy">~/portfolio</span>$ <span class="pink">whoami</span>', delay: 220 },
]

export default function Hero() {
  const bootRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    let i = 0
    let timer

    function next() {
      if (!bootRef.current) return
      if (i >= BOOT_LINES.length) {
        setRevealed(true)
        return
      }
      const line = BOOT_LINES[i]
      const span = document.createElement('span')
      span.className = 'ln'
      span.innerHTML = line.html
      bootRef.current.appendChild(span)
      bootRef.current.appendChild(document.createTextNode('\n'))
      requestAnimationFrame(() => span.classList.add('--in'))
      i++
      timer = setTimeout(next, line.delay)
    }

    const initial = setTimeout(next, 150)
    return () => {
      clearTimeout(initial)
      clearTimeout(timer)
    }
  }, [])

  return (
    <header className="hero" id="about">
      <div className="winbar" role="presentation">
        <div className="tabs">
          <span className="tab --active">
            <b>sahabaj@jku</b>:&nbsp;~/portfolio<span className="x">×</span>
          </span>
          <span className="tab">bash<span className="x">×</span></span>
        </div>
        <div className="ctrls">
          <button type="button" tabIndex={-1} aria-hidden="true">−</button>
          <button type="button" tabIndex={-1} aria-hidden="true">▢</button>
          <button type="button" tabIndex={-1} aria-hidden="true" className="close">×</button>
        </div>
      </div>

      <pre className="boot" ref={bootRef} aria-hidden="true" />

      <div className={`reveal${revealed ? ' --in' : ''}`}>
        <h1>Sahabaj Barbhuiya<span className="cur" /></h1>
        <div className="role">
          <b>University Assistant/ PhD Student</b> <span className="at">@</span> <a href="https://www.jku.at/en/institute-of-computer-graphics/about-us/team/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Johannes Kepler Universität Linz{' '}</a>
          <span className="at">-</span> <a href="https://www.games.cg.jku.at/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>rePLAY Game Lab</a>
        </div>
        <div className="tags">
          <span className="tg">Human-Computer Interaction</span>
          <span className="tg">Computer Games</span>
          <span className="tg">Player Experience</span>
          <span className="tg">Games User Research</span>
   
          <span className="tg">Machine Learning</span>
          <span className="tg">Data Visualization</span>
          <span className="tg">Game Analytics</span>
          <span className="tg">Human-AI Interaction</span>
        </div>
        <div className="quick">
          <div>
            <div className="k">Based in</div>
            <div className="v">Linz, Austria</div>
          </div>
          <div>
            <div className="k">PhD year</div>
            <div className="v">[1 / 4]</div>
          </div>
        </div>
      </div>
    </header>
  )
}
