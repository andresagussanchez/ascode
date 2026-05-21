export default function Logo() {
  return (
    <span style={{ fontFamily: 'var(--fm)', fontSize: 18, fontWeight: 700, letterSpacing: '-1px', userSelect: 'none' }}>
      <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'<'}</span>
      <span style={{ color: 'var(--fg)' }}>AS</span>
      <span style={{ color: 'var(--accent)', opacity: 0.85 }}>{'/>'}</span>
    </span>
  )
}
