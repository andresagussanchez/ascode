import { useState } from 'react'

const Logo = () => (
  <span style={{ fontFamily: 'var(--fm)', fontSize: 18, fontWeight: 700, letterSpacing: '-1px', userSelect: 'none' }}>
    <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'<'}</span>
    <span style={{ color: 'var(--fg)' }}>AS</span>
    <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'/>'}</span>
  </span>
)

const navLinks = [
  { href: '#trabajo',  label: '01 · trabajo' },
  { href: '#stack',    label: '02 · stack' },
  { href: '#contacto', label: '03 · contacto' },
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
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Logo />
            <span style={{
              borderLeft: '1px solid var(--dim)', paddingLeft: 14,
              fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--fg)',
            }}>ASCODE</span>
          </div>

          {/* Center — hidden on mobile */}
          <div className="nav-links" style={{ display: 'flex', gap: 32 }}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          {/* Right */}
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

            {/* Burger — visible only on mobile via CSS */}
            <button
              className="nav-burger"
              onClick={() => setOpen(o => !o)}
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--fg)', padding: 4,
              }}
              aria-label="Menú"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
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
                style={{
                  padding: '16px 24px',
                  fontFamily: 'var(--fm)', fontSize: 13, letterSpacing: '0.1em',
                  color: 'var(--dim)', borderBottom: '1px solid var(--border)',
                  transition: 'color .2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--dim)'}
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
