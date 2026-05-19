// logos.jsx — Variaciones de logo para AsCode (Andrés Agustín Sánchez)
// Estética: hacker / tech / minimal. Paleta: #0a0a0a, #00ff88, #ffffff.

const LOGO_PALETTE = {
  bg: '#0a0a0a',
  bgAlt: '#0f0f10',
  fg: '#f5f5f5',
  dim: '#6b6b6b',
  accent: '#00ff88',
  accentDim: 'rgba(0,255,136,0.18)',
  grid: 'rgba(255,255,255,0.04)',
};

// Caja contenedora compartida para mostrar el logo en oscuro
const LogoStage = ({ children, height = 240, gridded = false }) => (
  <div style={{
    width: '100%',
    height,
    background: LOGO_PALETTE.bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: gridded
      ? `linear-gradient(${LOGO_PALETTE.grid} 1px, transparent 1px), linear-gradient(90deg, ${LOGO_PALETTE.grid} 1px, transparent 1px)`
      : 'none',
    backgroundSize: '24px 24px',
  }}>
    {children}
  </div>
);

const LogoCaption = ({ title, desc }) => (
  <div style={{
    padding: '14px 18px 16px',
    borderTop: '1px solid #1a1a1a',
    background: '#0f0f10',
    fontFamily: "'JetBrains Mono', monospace",
  }}>
    <div style={{ color: LOGO_PALETTE.fg, fontSize: 12, fontWeight: 600, letterSpacing: 0.4 }}>{title}</div>
    <div style={{ color: LOGO_PALETTE.dim, fontSize: 11, marginTop: 4, lineHeight: 1.45 }}>{desc}</div>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
// LOGO 1 — JSX tag <AS/> + wordmark
// ────────────────────────────────────────────────────────────────────────────
const Logo1 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <LogoStage>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: 'flex', alignItems: 'baseline', gap: 14,
            fontFamily: "'JetBrains Mono', monospace",
            cursor: 'default',
            transition: 'transform .25s ease',
            transform: hover ? 'translateY(-2px)' : 'translateY(0)',
          }}
        >
          {/* Símbolo: <AS/> */}
          <div style={{
            display: 'flex', alignItems: 'baseline',
            fontSize: 56, fontWeight: 700, letterSpacing: -2,
            color: LOGO_PALETTE.fg,
            lineHeight: 1,
          }}>
            <span style={{ color: LOGO_PALETTE.accent, transition: 'opacity .2s', opacity: hover ? 1 : 0.85 }}>&lt;</span>
            <span style={{ padding: '0 2px' }}>AS</span>
            <span style={{ color: LOGO_PALETTE.accent, transition: 'opacity .2s', opacity: hover ? 1 : 0.85 }}>/&gt;</span>
          </div>
          {/* Wordmark */}
          <div style={{
            fontSize: 22, fontWeight: 500, letterSpacing: 6,
            color: LOGO_PALETTE.fg, textTransform: 'uppercase',
            borderLeft: `1px solid ${LOGO_PALETTE.dim}`,
            paddingLeft: 14,
          }}>
            ascode
          </div>
        </div>
      </LogoStage>
      <LogoCaption
        title="01 · <AS/> · tag-style"
        desc="Símbolo tipo JSX/HTML. El uso de < /> ancla la identidad en el oficio del código."
      />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// LOGO 2 — Terminal prompt $ AS_ con cursor parpadeante
// ────────────────────────────────────────────────────────────────────────────
const Logo2 = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes ascode-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .ascode-cursor { animation: ascode-blink 1s steps(1) infinite; }
      `}</style>
      <LogoStage gridded>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          fontFamily: "'JetBrains Mono', monospace",
          padding: '14px 22px',
          background: 'rgba(0,0,0,0.5)',
          border: `1px solid ${LOGO_PALETTE.accentDim}`,
          borderRadius: 4,
          boxShadow: `0 0 0 1px ${LOGO_PALETTE.accentDim}, 0 0 40px rgba(0,255,136,0.08)`,
        }}>
          <span style={{ color: LOGO_PALETTE.accent, fontSize: 38, fontWeight: 700 }}>$</span>
          <span style={{ color: LOGO_PALETTE.fg, fontSize: 38, fontWeight: 700, letterSpacing: 2 }}>AS</span>
          <span className="ascode-cursor" style={{
            width: 18, height: 32, background: LOGO_PALETTE.accent,
            display: 'inline-block', marginBottom: -2,
          }} />
        </div>
      </LogoStage>
      <LogoCaption
        title="02 · $ AS_ · terminal prompt"
        desc="Identidad como input de terminal. Hacker/dev forward; el cursor vivo aporta movimiento."
      />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// LOGO 3 — Símbolo monograma geométrico AS dentro de cuadro + wordmark
// ────────────────────────────────────────────────────────────────────────────
const Logo3 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <LogoStage>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ display: 'flex', alignItems: 'center', gap: 20, cursor: 'default' }}
        >
          {/* Símbolo geométrico */}
          <svg width="84" height="84" viewBox="0 0 84 84" style={{
            transition: 'transform .35s cubic-bezier(.2,.8,.2,1)',
            transform: hover ? 'rotate(-90deg)' : 'rotate(0deg)',
          }}>
            <rect x="2" y="2" width="80" height="80" rx="6" fill="none" stroke={LOGO_PALETTE.fg} strokeWidth="2" />
            {/* A — triángulo */}
            <path d="M 14 62 L 28 22 L 42 62 M 19 50 L 37 50" stroke={LOGO_PALETTE.fg} strokeWidth="3" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
            {/* S — escalonado */}
            <path d="M 70 26 L 50 26 L 50 40 L 70 40 L 70 58 L 50 58" stroke={LOGO_PALETTE.accent} strokeWidth="3" fill="none" strokeLinecap="square" strokeLinejoin="miter" />
            {/* notch esquina */}
            <path d="M 2 14 L 14 14 L 14 2" stroke={LOGO_PALETTE.accent} strokeWidth="2" fill="none" />
          </svg>
          {/* Wordmark */}
          <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <div style={{
              fontSize: 32, fontWeight: 700, letterSpacing: -1,
              color: LOGO_PALETTE.fg, lineHeight: 1,
            }}>
              ascode<span style={{ color: LOGO_PALETTE.accent }}>.</span>
            </div>
            <div style={{
              marginTop: 8, fontSize: 10, fontWeight: 500, letterSpacing: 4,
              color: LOGO_PALETTE.dim, textTransform: 'uppercase',
            }}>
              Andrés · Sánchez
            </div>
          </div>
        </div>
      </LogoStage>
      <LogoCaption
        title="03 · monograma · A+S geométrico"
        desc="Símbolo encerrado en marco. A trazada como triángulo, S como flujo escalonado en acento."
      />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
// LOGO 4 — Slash divider A/S con bloque de cursor
// ────────────────────────────────────────────────────────────────────────────
const Logo4 = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <LogoStage>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: 'flex', alignItems: 'center', gap: 18,
            fontFamily: "'JetBrains Mono', monospace",
            cursor: 'default',
          }}
        >
          {/* Símbolo: [A/S] */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            fontSize: 44, fontWeight: 800, lineHeight: 1,
            color: LOGO_PALETTE.fg,
            padding: '8px 14px',
            background: LOGO_PALETTE.accent,
            color: '#0a0a0a',
            position: 'relative',
            transition: 'box-shadow .2s, transform .2s',
            boxShadow: hover ? '4px 4px 0 0 #ffffff' : '4px 4px 0 0 #2a2a2a',
            transform: hover ? 'translate(-2px, -2px)' : 'translate(0,0)',
          }}>
            A<span style={{ opacity: 0.6, margin: '0 -2px' }}>/</span>S
          </div>
          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontSize: 28, fontWeight: 700, letterSpacing: -0.5,
              color: LOGO_PALETTE.fg, lineHeight: 1,
            }}>
              ascode
            </div>
            <div style={{
              marginTop: 6, fontSize: 9, fontWeight: 500, letterSpacing: 3,
              color: LOGO_PALETTE.dim, textTransform: 'uppercase',
            }}>
              portfolio · 2026
            </div>
          </div>
        </div>
      </LogoStage>
      <LogoCaption
        title="04 · [A/S] · slash badge"
        desc="Pastilla sólida con A/S. Slash separa iniciales y evoca paths/routes. Hover desplaza la sombra."
      />
    </div>
  );
};

Object.assign(window, { Logo1, Logo2, Logo3, Logo4, LOGO_PALETTE, LogoStage, LogoCaption });
