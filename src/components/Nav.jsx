import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '#about',    label: '01 · sobre mí' },
  { href: '#trabajo',  label: '02 · trabajo' },
  { href: '#stack',    label: '03 · stack' },
  { href: '#contacto', label: '04 · contacto' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: 'rgba(10,10,10,0.78)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="nav-inner" style={{
          padding: '18px 56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Logo />
            <span style={{
              borderLeft: '1px solid var(--dim)', paddingLeft: 14,
              fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--fg)',
            }}>ASCODE</span>
          </div>

          <div className="nav-links" style={{ display: 'flex', gap: 32 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)',
                display: 'inline-block', flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--fm)', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg)',
              }}>DISPONIBLE</span>
            </div>

            <button
              className="nav-burger"
              onClick={() => setOpen(o => !o)}
              aria-label="Menú"
              aria-expanded={open}
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--fg)', padding: 4,
              }}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-menu" style={{
            display: 'none',
            flexDirection: 'column', gap: 0,
            borderTop: '1px solid var(--border)',
            background: 'rgba(10,10,10,0.95)',
          }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
                style={{
                  padding: '16px 24px',
                  fontFamily: 'var(--fm)', fontSize: 13, letterSpacing: '0.1em',
                  color: 'var(--dim)', borderBottom: '1px solid var(--border)',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
