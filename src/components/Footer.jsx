import { IconBrandGithub } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--bd)',
      padding: '28px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      maxWidth: 900, margin: '0 auto',
    }}>
      <img src="/logo.svg" alt="ascode" style={{ height: 24, opacity: 0.5 }} />

      <span style={{
        fontFamily: 'var(--fm)', fontSize: 13,
        color: 'var(--tx2)', letterSpacing: '.04em',
      }}>
        © 2026 Andrés Sánchez
      </span>

      <a href="https://github.com/andresagussanchez" target="_blank" rel="noopener noreferrer"
        style={{ color: 'var(--tx3)', transition: 'color .15s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--tx)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--tx3)'}
      >
        <IconBrandGithub size={18} />
      </a>
    </footer>
  )
}
