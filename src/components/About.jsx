const skills = [
  'JavaScript', 'React', 'Python', 'Node.js',
  'Supabase', 'PostgreSQL', 'Linux', 'Nginx',
  'Git', 'Ciberseguridad',
]

const facts = [
  { label: 'Ubicación', value: 'Argentina' },
  { label: 'Foco',      value: 'Dev + Cybersec' },
]

export default function About() {
  return (
    <section id="about" style={{
      maxWidth: 900, margin: '0 auto',
      padding: '120px 32px',
    }}>
      <div style={{
        fontFamily: 'var(--fm)', fontSize: 12,
        color: 'var(--accent)', letterSpacing: '.1em',
        textTransform: 'uppercase', marginBottom: 16,
      }}>
        Sobre mí
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 64,
        alignItems: 'start',
        marginBottom: 56,
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 600, letterSpacing: '-0.02em',
            lineHeight: 1.2, marginBottom: 24,
          }}>
            Apasionado por construir
            <span style={{ color: 'var(--fg-soft)', fontWeight: 300 }}> cosas que importan.</span>
          </h2>

          <p style={{ fontSize: 15, color: 'var(--fg-soft)', lineHeight: 1.85, marginBottom: 16 }}>
            Desarrollador con foco en ciberseguridad. Me interesa entender cómo
            funcionan los sistemas por dentro — desde la arquitectura de una app
            hasta cómo protegerla.
          </p>
          <p style={{ fontSize: 15, color: 'var(--fg-soft)', lineHeight: 1.85 }}>
            Construyo soluciones reales para problemas reales, como el sistema de
            gestión de producción que desarrollé para Pro Mallas SRL — desde el
            diseño de base de datos hasta el deploy en VPS propio.
          </p>
        </div>

        <div style={{
          minWidth: 200,
          border: '1px solid var(--border)',
          borderRadius: 12,
          background: 'var(--bg-panel)',
          overflow: 'hidden',
        }}>
          {facts.map((f, i) => (
            <div key={f.label} style={{
              padding: '14px 20px',
              borderBottom: i < facts.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--fm)', fontSize: 10,
                color: 'var(--dim)', letterSpacing: '.08em',
                textTransform: 'uppercase', marginBottom: 4,
              }}>
                {f.label}
              </div>
              <div style={{ fontSize: 14, color: 'var(--fg)', fontWeight: 500 }}>
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: 32,
      }}>
        <div style={{
          fontFamily: 'var(--fm)', fontSize: 11,
          color: 'var(--dim)', letterSpacing: '.08em',
          textTransform: 'uppercase', marginBottom: 16,
        }}>
          Stack
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {skills.map(s => (
            <span key={s} style={{
              padding: '5px 14px',
              border: '1px solid var(--border)',
              borderRadius: 6,
              fontFamily: 'var(--fm)', fontSize: 12,
              color: 'var(--fg-soft)',
              background: 'var(--bg-panel)',
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
