const Logo = () => (
  <span style={{ fontFamily: 'var(--fm)', fontSize: 18, fontWeight: 700, letterSpacing: '-1px', userSelect: 'none' }}>
    <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'<'}</span>
    <span style={{ color: 'var(--fg)' }}>AS</span>
    <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'/>'}</span>
  </span>
)

const channels = [
  { label: '→ github / @andresagussanchez', href: 'https://github.com/andresagussanchez' },
  { label: '→ linkedin / andres-sanchez',   href: 'https://linkedin.com/in/andres-sanchez' },
  { label: '→ x / @ascode_dev',             href: 'https://x.com/ascode_dev' },
  { label: '→ read.cv / asanchez',           href: 'https://read.cv/asanchez' },
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
        {/* Contacto */}
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
          <a href="mailto:andres.agussanchez@gmail.com" style={{
            fontFamily: 'var(--fm)', fontSize: 18, color: 'var(--accent)',
            textDecorationLine: 'underline', textUnderlineOffset: 4,
          }}>
            andres.agussanchez@gmail.com
          </a>
        </div>

        {/* Canales */}
        <div>
          <div style={{
            fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 20,
          }}>· CANALES</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {channels.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                className="channel-link"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Ubicación */}
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

      {/* Bottom strip */}
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
        <span style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--dim)' }}>
          v2026.05 · <span style={{ color: 'var(--accent)' }}>●</span> build #284
        </span>
      </div>
    </footer>
  )
}
