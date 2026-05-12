import './Footer.css'

export default function Footer({ theme, onThemeToggle }) {
  return (
    <footer className="foot">
      <div>© {new Date().getFullYear()} Sahabaj Barbhuiya</div>
      <button className="foot-theme" onClick={onThemeToggle} type="button">
        {theme === 'light' ? '● dark mode' : '○ light mode'}
      </button>
      <div className="foot-keys">scroll <kbd>↓</kbd> <kbd>↑</kbd> jump <kbd>1</kbd>–<kbd>6</kbd></div>
    </footer>
  )
}
