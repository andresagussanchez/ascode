import Logo from './Logo'
import { SITE } from '../config'

const channels = [
  { label: '→ github / @andresagussanchez', href: SITE.github },
  { label: '→ linkedin / andres-sanchez',   href: SITE.linkedin },
  { label: '→ x / @ascode_dev',             href: SITE.x },
  { label: '→ read.cv / asanchez',           href: SITE.readcv },
]

export default function Footer() {
  return (
    <footer id="contacto" className="page-pad" style={{
      background: 'var(--bg-panel)',
      borderTop: '1px solid var(--border)',
      padding: '64px 56px 48px',
    }}>
      <div className="footer-grid" style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 48, alignItems: 'start', marginBottom: 64,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 20,
          }}>· CONTACTO</div>
          <h2 style={{
            fontSize: 44, fontWeight: 500, letterSpacing: '-1.5px',
            lineHeight: 1.05, marginBottom: 20,
          }}>
            ¿Tenemos algo<br />que construir<span style={{ color: 'var(--accent)' }}>?</span>
          </h2>
          <a href={`mailto:${SITE.email}`} style={{
            fontFamily: 'var(--fm)', fontSize: 18, color: 'var(--accent)',
            textDecorationLine: 'underline', textUnderlineOffset: 4,
          }}>
            {SITE.email}
          </a>
        </div>

        <div>
          <div style={{
            fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 20,
          }}>· CANALES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {channels.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                aria-label={`${c.label} (abre en nueva pestaña)`}
                className="channel-link"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 20,
          }}>· UBICACIÓN</div>
          <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>Córdoba, AR</div>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 14, color: 'var(--dim)' }}>
            GMT−3 · trabajo remoto global
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)', paddingTop: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Logo />
          <span style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--dim)' }}>
            © 2026 · Andrés Agustín Sánchez · AsCode
          </span>
        </div>
      </div>
    </footer>
  )
}
