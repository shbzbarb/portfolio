import { useEffect, useRef, useState } from 'react'
import './App.css'
import './components/Section.css'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Research from './components/Research'
import Works from './components/Works'
import Teaching from './components/Teaching'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTION_IDS = ['about', 'research', 'works', 'teaching', 'cv', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark' } catch { return 'dark' }
  })

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('--light', theme === 'light')
    try { localStorage.setItem('portfolio-theme', theme) } catch {}
  }, [theme])

  // Scroll-spy
  useEffect(() => {
    function spy() {
      const y = window.scrollY + window.innerHeight * 0.28
      let active = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) active = id
      }
      setActiveSection(active)
    }
    spy()
    window.addEventListener('scroll', spy, { passive: true })
    return () => window.removeEventListener('scroll', spy)
  }, [])

  // Reveal-on-scroll via IntersectionObserver
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('--in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '-10% 0px -10% 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Number-key jump (1–7)
  useEffect(() => {
    function onKeyDown(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = (e.target && e.target.tagName) || ''
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (/^[1-6]$/.test(e.key)) {
        const idx = parseInt(e.key, 10) - 1
        const el = document.getElementById(SECTION_IDS[idx])
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="shell">
      <Sidebar
        activeSection={activeSection}
        theme={theme}
        onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      />
      <main>
        <Hero />
        <Research />
        <Works />
<Teaching />
        <CV />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
