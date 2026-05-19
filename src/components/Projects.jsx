const projects = [
  {
    id: '001',
    name: 'Pro Mallas — Gestión',
    client: 'Pro Mallas SRL',
    year: '2025',
    stack: ['React', 'Supabase', 'PostgreSQL', 'Vite', 'Nginx'],
    desc: 'Sistema interno de producción, stock y entregas para una empresa manufacturera. Diseñado y construido de 0 a 1.',
    url: 'https://app.promallas.com.ar',
  },
]

export default function Work() {
  return (
    <section id="trabajo" className="page-pad" style={{ padding: '80px 56px 40px' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 32,
      }}>
        <h2 style={{
          fontFamily: 'var(--fm)', fontSize: 14, fontWeight: 500,
          letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--fg)',
        }}>
          <span style={{ color: 'var(--accent)' }}>01</span>{'  '}Trabajo selecto
        </h2>
        <span style={{ fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--dim)' }}>
          {projects.length} proyecto · 2025
        </span>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        {projects.map(p => (
          <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
            className="project-row"
          >
            <span className="row-id row-name" style={{ fontFamily: 'var(--fm)', fontSize: 12, color: 'var(--dim)' }}>
              {p.id}
            </span>

            <div className="row-name">
              <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
                {p.name}
              </div>
              <div style={{
                fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 500,
                letterSpacing: '1px', textTransform: 'uppercase',
                color: 'var(--dim)', marginTop: 4,
              }}>
                {p.client} · {p.year}
              </div>
            </div>

            <p className="row-desc" style={{ fontSize: 15, color: 'var(--fg-soft)', lineHeight: 1.5, maxWidth: 360 }}>
              {p.desc}
            </p>

            <div className="row-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {p.stack.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--fm)', fontSize: 10, letterSpacing: '0.5px',
                  border: '1px solid var(--border)', padding: '3px 8px',
                  color: 'var(--dim)',
                }}>{t}</span>
              ))}
            </div>

            <span className="row-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
