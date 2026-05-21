import { IconBrandGithub, IconMail } from '@tabler/icons-react'
import { SITE } from '../config'

export default function Contact() {
  return (
    <section id="contact" style={{
      maxWidth: 900, margin: '0 auto',
      padding: '120px 32px 120px',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--fm)', fontSize: 12,
        color: 'var(--accent)', letterSpacing: '.1em',
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

      <p style={{ fontSize: 16, color: 'var(--fg-soft)', marginBottom: 40, maxWidth: 400, margin: '0 auto 40px' }}>
        ¿Tenés un proyecto en mente o querés charlar sobre tecnología?
        Escribime.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={`mailto:${SITE.email}`} className="contact-btn-primary">
          <IconMail size={16} /> {SITE.email}
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer"
          aria-label="GitHub (abre en nueva pestaña)"
          className="contact-btn-secondary"
        >
          <IconBrandGithub size={16} /> GitHub
        </a>
      </div>
    </section>
  )
}
