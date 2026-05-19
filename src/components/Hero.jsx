export default function Hero() {
  return (
    <section className="page-pad" style={{ padding: '80px 56px 60px', position: 'relative', overflow: 'hidden' }}>
      {/* Vertical grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '12.5% 100%',
        opacity: 0.4,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 500,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'var(--dim)', marginBottom: 32,
        }}>
          PORTFOLIO · 2020 — 2026
        </div>

        {/* Display headline */}
        <h1 className="hero-display" style={{
          fontSize: 132, fontWeight: 500,
          letterSpacing: '-5px', lineHeight: 0.95,
          marginBottom: 56,
        }}>
          <div>Construyo</div>
          <div>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--dim)' }}>productos</em>{' '}que
          </div>
          <div>
            la gente <span style={{ color: 'var(--accent)' }}>usa</span>.
            <span className="cursor" style={{ color: 'var(--accent)', marginLeft: 6 }}>_</span>
          </div>
        </h1>

        {/* Bottom 2-col */}
        <div className="hero-bottom" style={{
          display: 'grid', gridTemplateColumns: '1fr 380px',
          gap: 48, alignItems: 'end',
        }}>
          <p style={{
            fontFamily: 'var(--fm)', fontSize: 14, color: 'var(--dim)',
            lineHeight: 1.7, maxWidth: 480,
          }}>
            Andrés Agustín Sánchez. Desarrollador full-stack con foco en ciberseguridad.
            Construyo sistemas reales para problemas reales — de la base de datos al servidor propio.
          </p>

          <a href="#trabajo" className="hero-cta" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '18px 28px',
            background: 'transparent', border: '1px solid var(--fg)',
            color: 'var(--fg)',
            fontFamily: 'var(--fm)', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            transition: 'background .25s, color .25s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#0a0a0a' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg)' }}
          >
            Iniciar un proyecto
            <span style={{ marginLeft: 16 }}>→</span>
          </a>
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', margin: '60px -56px 0' }} />
    </section>
  )
}
