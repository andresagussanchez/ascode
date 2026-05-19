const stacks = [
  { cat: 'Frontend',  items: ['React', 'Vite', 'JavaScript', 'CSS'] },
  { cat: 'Backend',   items: ['Node.js', 'Nginx', 'PM2', 'Ubuntu'] },
  { cat: 'Datos',     items: ['Supabase', 'PostgreSQL', 'PostgREST'] },
  { cat: 'Cloud',     items: ['Cloudflare', 'Vercel', 'VPS propio', 'Let\'s Encrypt'] },
]

export default function Stack() {
  return (
    <section id="stack" className="page-pad" style={{ padding: '60px 56px 80px' }}>
      <h2 style={{
        fontFamily: 'var(--fm)', fontSize: 14, fontWeight: 500,
        letterSpacing: '0.4em', textTransform: 'uppercase',
        color: 'var(--fg)', marginBottom: 40,
      }}>
        <span style={{ color: 'var(--accent)' }}>02</span>{'  '}Stack · Herramientas
      </h2>

      <div className="stack-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px', background: 'var(--border)',
      }}>
        {stacks.map(col => (
          <div key={col.cat} style={{ background: 'var(--bg)', padding: '28px 24px', minHeight: 240 }}>
            <div style={{
              fontFamily: 'var(--fm)', fontSize: 11, fontWeight: 500,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: 24,
            }}>
              {col.cat}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {col.items.map(s => (
                <span key={s} className="skill-item">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
