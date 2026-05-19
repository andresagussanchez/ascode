// portfolio.jsx — Variaciones de UX/UI del portfolio AsCode
// Dos enfoques, ambos full-bleed dentro de su artboard.

const PROJECTS = [
  { id: '001', name: 'Velocity Dashboard', client: 'Fintech LATAM', year: '2025', stack: ['React', 'D3', 'Postgres'], desc: 'Panel de métricas en tiempo real para mesa de trading.', metric: '+340% engagement' },
  { id: '002', name: 'Nimbus Commerce', client: 'Retail B2B', year: '2025', stack: ['Next.js', 'Stripe', 'Sanity'], desc: 'Plataforma e-commerce headless para distribuidores.', metric: '2.1M GMV/mes' },
  { id: '003', name: 'Atlas CRM', client: 'SaaS startup', year: '2024', stack: ['Vue', 'Node', 'Redis'], desc: 'Reescritura completa del CRM interno, 0 a 1.', metric: '−68% tiempo de carga' },
  { id: '004', name: 'Helix Booking', client: 'Hospitality', year: '2024', stack: ['Svelte', 'Supabase'], desc: 'Reservas con calendario en vivo para hoteles boutique.', metric: '12K reservas/sem' },
];

const STACK = [
  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Svelte'] },
  { cat: 'Backend',  items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { cat: 'Diseño',   items: ['Figma', 'Framer', 'Motion', 'Webflow'] },
  { cat: 'Cloud',    items: ['Vercel', 'AWS', 'Supabase', 'Cloudflare'] },
];

// ════════════════════════════════════════════════════════════════════════════
// VARIANTE A — IDE / Terminal forward
// Sidebar tipo file-explorer, contenido como archivos abiertos en pestañas.
// ════════════════════════════════════════════════════════════════════════════
const PortfolioIDE = () => {
  const [activeTab, setActiveTab] = React.useState('about.md');
  const [hoverProject, setHoverProject] = React.useState(null);
  const [openFolders, setOpenFolders] = React.useState({ src: true, projects: true });

  const C = {
    bg: '#0a0a0a', panel: '#0f0f10', panel2: '#141416', border: '#1f1f22',
    fg: '#e8e8e8', dim: '#6b6b6b', accent: '#00ff88', accentDim: 'rgba(0,255,136,0.15)',
    mono: "'JetBrains Mono', monospace", sans: "'Space Grotesk', sans-serif",
  };

  const tabs = ['about.md', 'projects.tsx', 'stack.json'];

  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, color: C.fg,
      fontFamily: C.mono, fontSize: 13, display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <style>{`
        .ide-row:hover { background: rgba(255,255,255,0.04); }
        .ide-tab:hover { color: ${C.fg}; }
        .ide-card { transition: all .25s cubic-bezier(.2,.8,.2,1); }
        .ide-card:hover { border-color: ${C.accent}; transform: translateX(4px); }
        .ide-card:hover .ide-card-arrow { opacity: 1; transform: translateX(0); }
        .ide-card .ide-card-arrow { opacity: 0; transform: translateX(-6px); transition: all .25s; }
        @keyframes ide-blink { 50% { opacity: 0; } }
        .ide-cursor { animation: ide-blink 1s steps(1) infinite; }
        .ide-link:hover { color: ${C.accent}; }
        .ide-chip:hover { background: ${C.accentDim}; border-color: ${C.accent}; color: ${C.accent}; }
      `}</style>

      {/* Title bar */}
      <div style={{
        height: 34, background: '#08080a', borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10, flex: '0 0 auto',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
          <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: C.dim, letterSpacing: 1 }}>
          ascode — andrés sánchez · ~/portfolio
        </div>
        <div style={{ fontSize: 11, color: C.dim }}>v2026.05</div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 230, background: C.panel, borderRight: `1px solid ${C.border}`,
          padding: '14px 0', fontSize: 12, flex: '0 0 auto',
        }}>
          {/* Logo mark */}
          <div style={{ padding: '0 16px 14px', borderBottom: `1px solid ${C.border}`, marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, fontWeight: 700, fontSize: 18 }}>
              <span style={{ color: C.accent }}>&lt;</span>
              <span>AS</span>
              <span style={{ color: C.accent }}>/&gt;</span>
            </div>
            <div style={{ marginTop: 4, fontSize: 10, color: C.dim, letterSpacing: 2 }}>ASCODE</div>
          </div>

          {/* Explorer header */}
          <div style={{ padding: '0 16px', color: C.dim, fontSize: 10, letterSpacing: 2, marginBottom: 6 }}>
            EXPLORER
          </div>

          {/* Folder: src */}
          <div
            className="ide-row"
            onClick={() => setOpenFolders({ ...openFolders, src: !openFolders.src })}
            style={{ padding: '4px 16px', cursor: 'pointer', color: C.fg, display: 'flex', gap: 6, alignItems: 'center' }}
          >
            <span style={{ color: C.dim, width: 8 }}>{openFolders.src ? '▾' : '▸'}</span>
            <span style={{ color: C.accent }}>▣</span>
            <span>src</span>
          </div>
          {openFolders.src && (
            <>
              {tabs.map(t => (
                <div
                  key={t}
                  className="ide-row"
                  onClick={() => setActiveTab(t)}
                  style={{
                    padding: '4px 16px 4px 38px', cursor: 'pointer',
                    color: activeTab === t ? C.fg : C.dim,
                    background: activeTab === t ? 'rgba(0,255,136,0.06)' : 'transparent',
                    borderLeft: activeTab === t ? `2px solid ${C.accent}` : '2px solid transparent',
                    display: 'flex', gap: 6, alignItems: 'center',
                  }}
                >
                  <span style={{ color: t.endsWith('.md') ? '#6ba3ff' : t.endsWith('.tsx') ? '#ffb86b' : '#e0e070' }}>◆</span>
                  <span>{t}</span>
                </div>
              ))}
            </>
          )}

          {/* Folder: projects */}
          <div
            className="ide-row"
            onClick={() => setOpenFolders({ ...openFolders, projects: !openFolders.projects })}
            style={{ padding: '4px 16px', cursor: 'pointer', color: C.fg, display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}
          >
            <span style={{ color: C.dim, width: 8 }}>{openFolders.projects ? '▾' : '▸'}</span>
            <span style={{ color: C.accent }}>▣</span>
            <span>projects</span>
          </div>
          {openFolders.projects && PROJECTS.map(p => (
            <div
              key={p.id}
              className="ide-row"
              style={{ padding: '3px 16px 3px 38px', color: C.dim, cursor: 'pointer', fontSize: 11 }}
            >
              <span style={{ color: '#ffb86b', marginRight: 6 }}>◆</span>
              {p.id}-{p.name.toLowerCase().replace(/ /g, '-')}.tsx
            </div>
          ))}

          {/* Status */}
          <div style={{ position: 'absolute', bottom: 12, padding: '0 16px', width: 230 }}>
            <div style={{ fontSize: 10, color: C.dim, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, background: C.accent, borderRadius: '50%', boxShadow: `0 0 8px ${C.accent}` }} />
              Disponible para proyectos
            </div>
            <div style={{ fontSize: 10, color: C.dim, marginTop: 4 }}>
              hola@ascode.dev
            </div>
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Tabs */}
          <div style={{
            height: 34, background: C.panel, borderBottom: `1px solid ${C.border}`,
            display: 'flex', flex: '0 0 auto',
          }}>
            {tabs.map(t => (
              <div
                key={t}
                onClick={() => setActiveTab(t)}
                className="ide-tab"
                style={{
                  padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 12, color: activeTab === t ? C.fg : C.dim,
                  background: activeTab === t ? C.bg : 'transparent',
                  borderRight: `1px solid ${C.border}`,
                  borderTop: activeTab === t ? `1px solid ${C.accent}` : '1px solid transparent',
                  cursor: 'pointer',
                }}
              >
                <span style={{ color: t.endsWith('.md') ? '#6ba3ff' : t.endsWith('.tsx') ? '#ffb86b' : '#e0e070', fontSize: 9 }}>◆</span>
                {t}
                <span style={{ color: C.dim, marginLeft: 4 }}>×</span>
              </div>
            ))}
          </div>

          {/* Content area */}
          <div style={{ flex: 1, overflow: 'auto', padding: '32px 44px' }}>
            {activeTab === 'about.md' && (
              <div style={{ maxWidth: 720 }}>
                <div style={{ fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
                  // README.md
                </div>
                <h1 style={{
                  fontFamily: C.sans, fontSize: 56, fontWeight: 600, lineHeight: 1.05,
                  margin: 0, letterSpacing: -1.5,
                }}>
                  Andrés Agustín<br />Sánchez<span style={{ color: C.accent }}>.</span>
                </h1>
                <div style={{ marginTop: 14, color: C.dim, fontSize: 14, fontFamily: C.mono }}>
                  <span style={{ color: C.accent }}>&gt;</span> full-stack developer · diseñador de producto
                </div>
                <p style={{
                  marginTop: 36, fontFamily: C.sans, fontSize: 18, lineHeight: 1.6, color: '#c8c8c8', maxWidth: 580,
                }}>
                  Construyo productos digitales para empresas que necesitan más que un sitio bonito.
                  Especializado en interfaces complejas, dashboards y plataformas SaaS donde
                  cada interacción importa.
                </p>

                {/* Quick stats */}
                <div style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
                  {[
                    { n: '24', l: 'proyectos entregados' },
                    { n: '6', l: 'años de experiencia' },
                    { n: '∞', l: 'commits' },
                  ].map((s, i) => (
                    <div key={i} style={{ background: C.bg, padding: '20px 22px' }}>
                      <div style={{ fontSize: 36, fontWeight: 700, color: C.accent, lineHeight: 1, fontFamily: C.sans }}>
                        {s.n}
                      </div>
                      <div style={{ marginTop: 6, fontSize: 11, color: C.dim, letterSpacing: 1.5, textTransform: 'uppercase' }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div style={{ marginTop: 44, fontFamily: C.mono, fontSize: 13 }}>
                  <div style={{ color: C.dim, marginBottom: 10 }}>// links</div>
                  {[
                    { k: 'email', v: 'hola@ascode.dev' },
                    { k: 'github', v: '@andressanchez' },
                    { k: 'linkedin', v: '/in/andres-sanchez' },
                  ].map(l => (
                    <div key={l.k} className="ide-link" style={{ padding: '4px 0', cursor: 'pointer', color: C.fg, transition: 'color .15s' }}>
                      <span style={{ color: C.dim, display: 'inline-block', width: 90 }}>{l.k}:</span>
                      <span>"{l.v}"</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 40, color: C.dim, fontFamily: C.mono, fontSize: 13 }}>
                  <span style={{ color: C.accent }}>$</span> _<span className="ide-cursor" style={{ display: 'inline-block', width: 8, height: 14, background: C.accent, verticalAlign: 'middle', marginLeft: 2 }} />
                </div>
              </div>
            )}

            {activeTab === 'projects.tsx' && (
              <div>
                <div style={{ fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
                  // projects.tsx · {PROJECTS.length} entries
                </div>
                <h2 style={{ fontFamily: C.sans, fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: -1 }}>
                  Trabajo selecto<span style={{ color: C.accent }}>_</span>
                </h2>
                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {PROJECTS.map((p, i) => (
                    <div
                      key={p.id}
                      className="ide-card"
                      onMouseEnter={() => setHoverProject(p.id)}
                      onMouseLeave={() => setHoverProject(null)}
                      style={{
                        border: `1px solid ${C.border}`,
                        padding: '22px 26px',
                        background: hoverProject === p.id ? '#0f1410' : C.panel,
                        cursor: 'pointer',
                        display: 'grid', gridTemplateColumns: '54px 1fr auto 24px', gap: 22, alignItems: 'center',
                      }}
                    >
                      <div style={{ fontSize: 11, color: C.dim, fontFamily: C.mono }}>
                        {p.id}
                      </div>
                      <div>
                        <div style={{ fontFamily: C.sans, fontSize: 22, fontWeight: 600 }}>{p.name}</div>
                        <div style={{ marginTop: 4, color: C.dim, fontSize: 12 }}>
                          {p.client} · {p.year}
                        </div>
                        <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          {p.stack.map(s => (
                            <span key={s} className="ide-chip" style={{
                              fontSize: 10, padding: '3px 8px', border: `1px solid ${C.border}`,
                              color: C.dim, letterSpacing: 0.5, transition: 'all .15s',
                            }}>{s}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 11, color: C.dim, letterSpacing: 1, textTransform: 'uppercase' }}>impacto</div>
                        <div style={{ marginTop: 4, color: C.accent, fontWeight: 600, fontSize: 14 }}>{p.metric}</div>
                      </div>
                      <div className="ide-card-arrow" style={{ color: C.accent, fontSize: 20 }}>→</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'stack.json' && (
              <div>
                <div style={{ fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
                  // stack.json
                </div>
                <h2 style={{ fontFamily: C.sans, fontSize: 40, fontWeight: 600, margin: 0, letterSpacing: -1 }}>
                  Herramientas<span style={{ color: C.accent }}>.</span>
                </h2>
                <div style={{
                  marginTop: 32, padding: '24px 28px',
                  background: C.panel, border: `1px solid ${C.border}`,
                  fontFamily: C.mono, fontSize: 13, lineHeight: 1.85,
                }}>
                  <span style={{ color: C.dim }}>{'{'}</span>
                  {STACK.map((g, i) => (
                    <div key={g.cat} style={{ paddingLeft: 22 }}>
                      <span style={{ color: '#6ba3ff' }}>"{g.cat}"</span>
                      <span style={{ color: C.dim }}>: [</span>
                      <div style={{ paddingLeft: 22, display: 'flex', gap: 6, flexWrap: 'wrap', margin: '6px 0' }}>
                        {g.items.map(it => (
                          <span key={it} className="ide-chip" style={{
                            color: C.accent, padding: '3px 10px',
                            border: `1px solid ${C.accentDim}`,
                            background: 'rgba(0,255,136,0.04)',
                            cursor: 'default', transition: 'all .15s',
                          }}>"{it}"</span>
                        ))}
                      </div>
                      <span style={{ color: C.dim }}>]{i < STACK.length - 1 ? ',' : ''}</span>
                    </div>
                  ))}
                  <span style={{ color: C.dim }}>{'}'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Status bar */}
          <div style={{
            height: 22, background: '#08080a', borderTop: `1px solid ${C.border}`,
            display: 'flex', alignItems: 'center', padding: '0 14px',
            fontSize: 10, color: C.dim, gap: 14, flex: '0 0 auto',
          }}>
            <span><span style={{ color: C.accent }}>●</span> main</span>
            <span>UTF-8</span>
            <span>{activeTab}</span>
            <span style={{ marginLeft: 'auto' }}>Ln 1, Col 1</span>
            <span>·</span>
            <span>AsCode v2026.05</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════
// VARIANTE B — Editorial dark · Grid minimalista
// Estructura más editorial. Tipografía grande, sin chrome de IDE.
// ════════════════════════════════════════════════════════════════════════════
const PortfolioEditorial = () => {
  const [hoverIdx, setHoverIdx] = React.useState(null);

  const C = {
    bg: '#0a0a0a', panel: '#111113', border: '#1a1a1c',
    fg: '#f5f5f5', dim: '#7a7a7a', accent: '#00ff88',
    mono: "'JetBrains Mono', monospace", sans: "'Space Grotesk', sans-serif",
  };

  return (
    <div style={{
      width: '100%', height: '100%', background: C.bg, color: C.fg,
      fontFamily: C.sans, overflow: 'auto', position: 'relative',
    }}>
      <style>{`
        @keyframes ed-blink { 50% { opacity: 0; } }
        .ed-cursor { animation: ed-blink 1s steps(1) infinite; }
        .ed-nav-item { position: relative; transition: color .2s; }
        .ed-nav-item:hover { color: #f5f5f5; }
        .ed-nav-item::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -4px;
          height: 1px; background: ${C.accent}; transform: scaleX(0);
          transform-origin: left; transition: transform .3s cubic-bezier(.2,.8,.2,1);
        }
        .ed-nav-item:hover::after { transform: scaleX(1); }
        .ed-row { transition: all .3s cubic-bezier(.2,.8,.2,1); position: relative; }
        .ed-row::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0;
          background: ${C.accent}; transition: width .25s;
        }
        .ed-row:hover { background: rgba(0,255,136,0.04); padding-left: 36px; }
        .ed-row:hover::before { width: 3px; }
        .ed-row:hover .ed-row-arrow { transform: translateX(4px); color: ${C.accent}; }
        .ed-row .ed-row-arrow { transition: all .25s; }
        .ed-skill { transition: all .2s; }
        .ed-skill:hover { color: ${C.accent}; transform: translateY(-2px); }
        .ed-cta { transition: all .25s; }
        .ed-cta:hover { background: ${C.accent}; color: #0a0a0a; }
      `}</style>

      {/* Background grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
        backgroundSize: '12.5% 100%',
        opacity: 0.4,
      }} />

      {/* Nav */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        backdropFilter: 'blur(12px)', background: 'rgba(10,10,10,0.78)',
        borderBottom: `1px solid ${C.border}`,
        padding: '18px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: C.mono, fontWeight: 700 }}>
          <span style={{ fontSize: 18 }}>
            <span style={{ color: C.accent }}>&lt;</span>
            <span>AS</span>
            <span style={{ color: C.accent }}>/&gt;</span>
          </span>
          <span style={{ fontSize: 11, color: C.dim, letterSpacing: 3, textTransform: 'uppercase' }}>
            · ascode
          </span>
        </div>
        {/* Nav */}
        <div style={{ display: 'flex', gap: 36, fontFamily: C.mono, fontSize: 12, color: C.dim, letterSpacing: 1 }}>
          <span className="ed-nav-item" style={{ cursor: 'pointer' }}>01 · trabajo</span>
          <span className="ed-nav-item" style={{ cursor: 'pointer' }}>02 · stack</span>
          <span className="ed-nav-item" style={{ cursor: 'pointer' }}>03 · contacto</span>
        </div>
        {/* Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: C.mono, fontSize: 11, color: C.dim }}>
          <span style={{ width: 6, height: 6, background: C.accent, borderRadius: '50%', boxShadow: `0 0 10px ${C.accent}` }} />
          DISPONIBLE
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '80px 56px 60px', position: 'relative' }}>
        <div style={{ fontFamily: C.mono, fontSize: 12, color: C.dim, letterSpacing: 3, marginBottom: 28 }}>
          PORTFOLIO · 2020 — 2026
        </div>
        <h1 style={{
          fontFamily: C.sans, fontSize: 132, fontWeight: 500, lineHeight: 0.95,
          margin: 0, letterSpacing: -5,
        }}>
          Construyo<br />
          <span style={{ fontStyle: 'italic', fontWeight: 400, color: C.dim }}>productos</span> que<br />
          la gente <span style={{ color: C.accent }}>usa<span className="ed-cursor">.</span></span>
        </h1>

        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'end',
        }}>
          <div style={{ fontFamily: C.mono, fontSize: 14, color: C.dim, lineHeight: 1.7, maxWidth: 480 }}>
            Andrés Agustín Sánchez. Desarrollador full-stack y diseñador de producto.
            Trabajo con startups y empresas que tratan el software como su oficio principal.
          </div>
          <button className="ed-cta" style={{
            background: 'transparent', border: `1px solid ${C.fg}`, color: C.fg,
            padding: '18px 28px', fontFamily: C.mono, fontSize: 12,
            letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%',
          }}>
            Iniciar un proyecto
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid ${C.border}`, margin: '0 56px' }} />

      {/* Work */}
      <div style={{ padding: '80px 56px 40px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}>
          <h2 style={{
            fontFamily: C.sans, fontSize: 14, fontWeight: 500,
            margin: 0, color: C.dim, letterSpacing: 4, textTransform: 'uppercase',
            fontFamily: C.mono,
          }}>
            <span style={{ color: C.accent }}>01</span> &nbsp;Trabajo selecto
          </h2>
          <div style={{ fontFamily: C.mono, fontSize: 11, color: C.dim }}>
            {PROJECTS.length} proyectos · 2024—2025
          </div>
        </div>

        <div style={{ borderTop: `1px solid ${C.border}` }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className="ed-row"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                padding: '32px 0',
                borderBottom: `1px solid ${C.border}`,
                display: 'grid',
                gridTemplateColumns: '60px 1fr 1.2fr 220px 50px',
                gap: 32, alignItems: 'center', cursor: 'pointer',
              }}
            >
              <div style={{ fontFamily: C.mono, fontSize: 12, color: C.dim }}>
                {p.id}
              </div>
              <div>
                <div style={{ fontFamily: C.sans, fontSize: 30, fontWeight: 500, letterSpacing: -0.5 }}>
                  {p.name}
                </div>
                <div style={{ marginTop: 6, fontFamily: C.mono, fontSize: 11, color: C.dim, letterSpacing: 1 }}>
                  {p.client.toUpperCase()} · {p.year}
                </div>
              </div>
              <div style={{ fontFamily: C.sans, fontSize: 15, color: '#bcbcbc', lineHeight: 1.5, maxWidth: 360 }}>
                {p.desc}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontFamily: C.mono, fontSize: 10, color: C.dim,
                    padding: '3px 8px', border: `1px solid ${C.border}`,
                    letterSpacing: 0.5,
                  }}>{s}</span>
                ))}
              </div>
              <div className="ed-row-arrow" style={{
                fontSize: 28, color: C.dim, textAlign: 'right', fontWeight: 300,
              }}>
                →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div style={{ padding: '60px 56px 80px', position: 'relative' }}>
        <h2 style={{
          fontFamily: C.mono, fontSize: 14, fontWeight: 500,
          margin: '0 0 48px', color: C.dim, letterSpacing: 4, textTransform: 'uppercase',
        }}>
          <span style={{ color: C.accent }}>02</span> &nbsp;Stack · Herramientas
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: C.border, border: `1px solid ${C.border}` }}>
          {STACK.map(g => (
            <div key={g.cat} style={{ background: C.bg, padding: '28px 24px', minHeight: 240 }}>
              <div style={{
                fontFamily: C.mono, fontSize: 11, color: C.accent,
                letterSpacing: 3, marginBottom: 20, textTransform: 'uppercase',
              }}>
                {g.cat}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {g.items.map(it => (
                  <div key={it} className="ed-skill" style={{
                    fontFamily: C.sans, fontSize: 22, fontWeight: 500,
                    cursor: 'default', color: C.fg, letterSpacing: -0.3,
                  }}>
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / contact */}
      <div style={{
        padding: '64px 56px 48px', background: C.panel,
        borderTop: `1px solid ${C.border}`, position: 'relative',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
              · CONTACTO
            </div>
            <div style={{
              fontFamily: C.sans, fontSize: 44, fontWeight: 500, lineHeight: 1.05, letterSpacing: -1.5,
            }}>
              ¿Tenemos algo<br />que construir<span style={{ color: C.accent }}>?</span>
            </div>
            <div style={{
              marginTop: 28, fontFamily: C.mono, fontSize: 18, color: C.accent,
              textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer',
            }}>
              hola@ascode.dev
            </div>
          </div>
          <div>
            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
              · CANALES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: C.mono, fontSize: 13 }}>
              <div className="ed-nav-item" style={{ cursor: 'pointer', color: C.fg }}>→ github / @andressanchez</div>
              <div className="ed-nav-item" style={{ cursor: 'pointer', color: C.fg }}>→ linkedin / andres-sanchez</div>
              <div className="ed-nav-item" style={{ cursor: 'pointer', color: C.fg }}>→ x / @ascode_dev</div>
              <div className="ed-nav-item" style={{ cursor: 'pointer', color: C.fg }}>→ read.cv / asanchez</div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: C.mono, fontSize: 11, color: C.dim, letterSpacing: 3, marginBottom: 18 }}>
              · UBICACIÓN
            </div>
            <div style={{ fontFamily: C.sans, fontSize: 18, color: C.fg }}>
              Buenos Aires, AR<br />
              <span style={{ color: C.dim, fontSize: 14 }}>GMT−3 · trabajo remoto global</span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: 64, paddingTop: 24, borderTop: `1px solid ${C.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: C.mono, fontSize: 11, color: C.dim,
        }}>
          <div>© 2026 · Andrés Agustín Sánchez · AsCode</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span>v2026.05</span>
            <span>·</span>
            <span style={{ color: C.accent }}>● build #284</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { PortfolioIDE, PortfolioEditorial, PROJECTS, STACK });
