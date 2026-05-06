import './Publications.css'

const PUBS = [
  {
    year: '[YEAR]',
    title: '[PAPER TITLE — 01]',
    authors: '[YOUR NAME], [CO-AUTHOR], [CO-AUTHOR]',
    tags: [{ label: 'honorable mention', highlight: true }, { label: 'full paper' }],
    links: ['PDF', 'Video', 'BibTeX'],
    venue: '[VENUE]',
    venueYear: '[YR]',
  },
  {
    year: '[YEAR]',
    title: '[PAPER TITLE — 02]',
    authors: '[YOUR NAME], [CO-AUTHOR], [CO-AUTHOR]',
    tags: [{ label: 'full paper' }],
    links: ['PDF', 'Data', 'BibTeX'],
    venue: '[VENUE]',
    venueYear: '[YR]',
  },
  {
    year: '[YEAR]',
    title: '[PAPER TITLE — 03]',
    authors: '[YOUR NAME], [CO-AUTHOR]',
    tags: [{ label: 'short paper' }],
    links: ['PDF', 'BibTeX'],
    venue: '[VENUE]',
    venueYear: '[YR]',
  },
  {
    year: '[YEAR]',
    title: '[PAPER TITLE — 04]',
    authors: '[YOUR NAME], [CO-AUTHOR], [CO-AUTHOR]',
    tags: [{ label: 'full paper' }],
    links: ['PDF', 'BibTeX'],
    venue: '[VENUE]',
    venueYear: '[YR]',
  },
  {
    year: '[YEAR]',
    title: '[PAPER TITLE — 05]',
    authors: '[YOUR NAME], [CO-AUTHOR]',
    tags: [{ label: 'late-breaking' }],
    links: ['PDF', 'BibTeX'],
    venue: '[VENUE]',
    venueYear: '[YR]',
  },
]

export default function Publications() {
  return (
    <section className="s" id="publications">
      <div className="secH">
        <span className="num">§ 04</span>
        <h2>Publications</h2>
        <span className="rule" />
        <span className="meta">[N] papers · [YEAR_FROM]–[YEAR_TO]</span>
      </div>
      <div className="pubs rv">
        {PUBS.map((pub, i) => (
          <div className="p" key={i}>
            <div className="yr">{pub.year}</div>
            <div>
              <div className="ttl">{pub.title}</div>
              <div className="auth">
                <b>{pub.authors.split(',')[0]}</b>
                {pub.authors.slice(pub.authors.indexOf(','))}
              </div>
              <div className="meta">
                {pub.tags.map((t) => (
                  <span key={t.label} className={`tg${t.highlight ? ' hm' : ''}`}>{t.label}</span>
                ))}
              </div>
              <div className="lks">
                {pub.links.map((l) => (
                  <a key={l} href="#">{l}</a>
                ))}
              </div>
            </div>
            <div className="ven"><b>{pub.venue}</b>'{pub.venueYear}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
