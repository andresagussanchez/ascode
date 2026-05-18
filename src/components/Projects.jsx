import { IconArrowUpRight, IconPoint } from '@tabler/icons-react'

const projects = [
  {
    name: 'Pro Mallas — Sistema de Gestión',
    description: 'Sistema interno de producción para Pro Mallas SRL. Diseñado y desarrollado de cero para reemplazar el seguimiento manual en papel.',
    features: [
      'Gestión de pedidos con drag & drop para priorización',
      'Control de stock y necesidades de producción en tiempo real',
      'Registro de actividad y entregas parciales/totales',
      'Panel operativo con acceso por roles',
      'PWA instalable, deploy en VPS propio con Nginx',
    ],
    tags: ['React', 'Supabase', 'PostgreSQL', 'Vite', 'PWA', 'Nginx'],
    url: 'https://app.promallas.com.ar',
    status: 'En producción',
    year: '2025',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      maxWidth: 900, margin: '0 auto',
      padding: '120px 32px',
      borderTop: '1px solid var(--bd)',
    }}>
      <div style={{
        fontFamily: 'var(--fm)', fontSize: 12,
        color: 'var(--ac)', letterSpacing: '.1em',
        textTransform: 'uppercase', marginBottom: 16,
      }}>
        Proyectos
      </div>

      <h2 style={{
        fontSize: 'clamp(26px, 3.5vw, 38px)',
        fontWeight: 600, letterSpacing: '-0.02em',
        lineHeight: 1.2, marginBottom: 48,
      }}>
        Lo que construí.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {projects.map(p => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '32px 36px',
              background: 'var(--bg2)',
              border: '1px solid var(--bd)',
              borderRadius: 12,
              transition: 'border-color .15s, transform .15s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--ac)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--bd)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, gap: 16 }}>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{p.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--fm)', fontSize: 11, color: 'var(--tx3)' }}>{p.year}</span>
                <IconArrowUpRight size={16} color="var(--tx3)" />
              </div>
            </div>

            <p style={{ fontSize: 14, color: 'var(--tx2)', lineHeight: 1.7, marginBottom: 20 }}>
              {p.description}
            </p>

            {/* Features */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
              {p.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--tx2)' }}>
                  <IconPoint size={14} color="var(--ac)" style={{ flexShrink: 0, marginTop: 2 }} />
                  {f}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid var(--bd)' }}>
              <span style={{
                padding: '3px 10px',
                background: 'rgba(0,212,170,.1)',
                border: '1px solid rgba(0,212,170,.2)',
                borderRadius: 100,
                fontFamily: 'var(--fm)', fontSize: 11,
                color: 'var(--ac)',
              }}>
                {p.status}
              </span>
              {p.tags.map(t => (
                <span key={t} style={{
                  padding: '3px 10px',
                  border: '1px solid var(--bd)',
                  borderRadius: 100,
                  fontFamily: 'var(--fm)', fontSize: 11,
                  color: 'var(--tx3)',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
