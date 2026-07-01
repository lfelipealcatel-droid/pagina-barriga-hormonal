import './CtaBtn.css'

// ─── LINK DE CHECKOUT — troque aqui ──────────────────────────────────────────
const CHECKOUT_LINK = '#checkout'   // ← link da Hotmart/Kiwify
// ─────────────────────────────────────────────────────────────────────────────

export default function CtaBtn({ label = '🔓 LIBERAR MEU PLANO POR R$37,90 →', variant = 'primary' }) {
  return (
    <a href={CHECKOUT_LINK} className={`cta-btn cta-btn--${variant}`}>
      {label}
    </a>
  )
}
