import { useEffect, useState } from 'react'
import './Sidebar.css'

const NAV_ITEMS = [
  { href: '#about',    label: 'about.md',    num: '01' },
  { href: '#research', label: 'research.md', num: '02' },
  { href: '#works',    label: 'works/',      num: '03' },
  { href: '#teaching', label: 'teaching.md', num: '04' },
  { href: '#cv',       label: 'cv.pdf',      num: '05' },
  { href: '#contact',  label: 'contact.sh',  num: '06' },
]

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/>
  </svg>
)

export default function Sidebar({ activeSection, theme, onThemeToggle }) {
  return (
    <aside className="nav">
      <div className="brand">
        <span className="dot" />
        <span className="id"><b>~/portfolio</b></span>
      </div>

      <div className="who">
        <div className="nm">Sahabaj Barbhuiya</div>
        <div className="ro">PhD researcher · <b>HCI · Games · Viz</b><br />Johannes Kepler Universität Linz</div>
      </div>

      <nav className="tree" aria-label="Sections">
        <div className="lbl">Sections</div>
        <ul id="navlist">
          {NAV_ITEMS.map((item, idx) => (
            <li
              key={item.href}
              className={activeSection === item.href.slice(1) ? '--active' : ''}
            >
              <a href={item.href}>
                <span>{item.label}</span>
                <span className="num">{item.num}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="foot">
        <div className="links">
          <a href="https://github.com/shbzbarb" target="_blank" rel="noopener">
            <span className="ic"><GitHubIcon /></span>
            <span>github.com/shbzbarb</span>
          </a>
          <a href="https://www.linkedin.com/in/sahabajbarbhuiya/" target="_blank" rel="noopener">
            <span className="ic"><LinkedInIcon /></span>
            <span>linkedin.com/in/sahabajbarbhuiya</span>
          </a>
        </div>
<button className="theme" onClick={onThemeToggle} type="button">
          {theme === 'light' ? '● dark mode' : '○ light mode'}
        </button>
      </div>
    </aside>
  )
}
