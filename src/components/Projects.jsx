import { useState } from 'react'
import './Projects.css'

const PER_PAGE = 4

const modules = import.meta.glob('../data/projects/*.json', { eager: true })
const ALL_PROJECTS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod], i) => ({ ...mod, _num: String(i + 1).padStart(2, '0') }))

export default function Projects() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(ALL_PROJECTS.length / PER_PAGE)
  const hasCarousel = ALL_PROJECTS.length > PER_PAGE
  const visible = ALL_PROJECTS.slice(page * PER_PAGE, (page + 1) * PER_PAGE)

  return (
    <section className="s" id="projects">
      <div className="secH">
        <span className="num">§ 03</span>
        <h2>Selected projects</h2>
        <span className="rule" />
        <span className="meta">ls ./projects/</span>
      </div>
      <div className="projects rv">
        {visible.map((w) => (
          <div className="w" key={w._num}>
            <div className="top">
              <span className="id">{w._num} · {w.type}</span>
              <span className="arrow">↗</span>
            </div>
            <div className="ttl">{w.title}</div>
            <div className="kind">{w.kind}</div>
            <div className="blurb">{w.blurb}</div>
            <div className="stat-row">
              {w.github && (
                <a className="gh-btn" href={w.github} target="_blank" rel="noreferrer">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  github
                </a>
              )}
              {w.url && (
                <a className="gh-btn" href={w.url} target="_blank" rel="noreferrer">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <ellipse cx="5.2" cy="6" rx="1.1" ry="1.4" />
                    <ellipse cx="10.8" cy="6" rx="1.1" ry="1.4" />
                    <path d="M5 10.5 C6.2 12.2 9.8 12.2 11 10.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  huggingface
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {hasCarousel && (
        <div className="carousel-nav">
          <button
            className="carousel-btn"
            onClick={() => setPage(p => p - 1)}
            disabled={page === 0}
          >
            ← prev
          </button>
          <span className="carousel-page">[{page + 1}/{totalPages}]</span>
          <button
            className="carousel-btn"
            onClick={() => setPage(p => p + 1)}
            disabled={page === totalPages - 1}
          >
            next →
          </button>
        </div>
      )}
    </section>
  )
}
