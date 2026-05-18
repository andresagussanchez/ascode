import { IconArrowDown } from '@tabler/icons-react'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '80px 32px 60px',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,170,.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', userSelect: 'none', overflow: 'hidden',
      }}>
        <span style={{
          fontSize: 'clamp(280px, 40vw, 520px)',
          fontWeight: 700,
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,212,170,.06)',
          fontFamily: 'var(--ff)',
        }}>AS</span>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px',
          border: '1px solid var(--bd)',
          borderRadius: 100,
          fontFamily: 'var(--fm)', fontSize: 12,
          color: 'var(--tx3)',
          marginBottom: 32,
          letterSpacing: '.06em',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ac)', display: 'inline-block' }} />
          Disponible para trabajar
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 24,
        }}>
          Hola, soy{' '}
          <span style={{ color: 'var(--ac)' }}>Andrés</span>
          <br />
          <span style={{ fontWeight: 300, color: 'var(--tx2)' }}>Developer</span>
        </h1>

        <p style={{
          fontSize: 18, color: 'var(--tx2)',
          maxWidth: 480, margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Construyo productos digitales con foco en
          ciberseguridad y experiencia de usuario.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '11px 24px',
            background: 'var(--ac)', color: '#000',
            borderRadius: 8, fontWeight: 600, fontSize: 14,
            transition: 'background .15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--ac2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ac)'}
          >
            Ver proyectos
          </a>
          <a href="#contact" style={{
            padding: '11px 24px',
            border: '1px solid var(--bd)', color: 'var(--tx)',
            borderRadius: 8, fontWeight: 500, fontSize: 14,
            background: 'var(--bg2)',
            transition: 'border-color .15s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--tx3)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bd)'}
          >
            Contacto
          </a>
        </div>
      </div>

      <a href="#about" style={{
        position: 'absolute', bottom: 32,
        color: 'var(--tx3)', transition: 'color .15s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--ac)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--tx3)'}
      >
        <IconArrowDown size={20} />
      </a>
    </section>
  )
}
