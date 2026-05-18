const links = [
  { href: '#about',    label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact',  label: 'Contacto' },
]

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 60,
      background: 'rgba(10,10,15,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--bd)',
    }}>
      <img src="/logo.svg" alt="ascode" style={{ height: 36 }} />
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontSize: 14, color: 'var(--tx2)',
            transition: 'color .15s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--tx)'}
          onMouseLeave={e => e.target.style.color = 'var(--tx2)'}
          >{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
