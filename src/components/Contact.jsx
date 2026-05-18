import { IconBrandGithub, IconMail } from '@tabler/icons-react'

export default function Contact() {
  return (
    <section id="contact" style={{
      maxWidth: 900, margin: '0 auto',
      padding: '120px 32px 120px',
      borderTop: '1px solid var(--bd)',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--fm)', fontSize: 12,
        color: 'var(--ac)', letterSpacing: '.1em',
        textTransform: 'uppercase', marginBottom: 16,
      }}>
        Contacto
      </div>

      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 40px)',
        fontWeight: 600, letterSpacing: '-0.02em',
        lineHeight: 1.2, marginBottom: 16,
      }}>
        Hablemos.
      </h2>

      <p style={{ fontSize: 16, color: 'var(--tx2)', marginBottom: 40, maxWidth: 400, margin: '0 auto 40px' }}>
        ¿Tenés un proyecto en mente o querés charlar sobre tecnología?
        Escribime.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:andres.agussanchez@gmail.com" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '11px 24px',
          background: 'var(--ac)', color: '#000',
          borderRadius: 8, fontWeight: 600, fontSize: 14,
          transition: 'background .15s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--ac2)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--ac)'}
        >
          <IconMail size={16} /> andres.agussanchez@gmail.com
        </a>
        <a href="https://github.com/andresagussanchez" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '11px 24px',
          border: '1px solid var(--bd)', color: 'var(--tx)',
          borderRadius: 8, fontWeight: 500, fontSize: 14,
          background: 'var(--bg2)',
          transition: 'border-color .15s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--tx3)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bd)'}
        >
          <IconBrandGithub size={16} /> GitHub
        </a>
      </div>

      <div style={{
        marginTop: 80,
        fontFamily: 'var(--fm)', fontSize: 11,
        color: 'var(--tx3)', letterSpacing: '.04em',
      }}>
        © 2026 Andrés Sánchez · ascode.com.ar
      </div>
    </section>
  )
}
