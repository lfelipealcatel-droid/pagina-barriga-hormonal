import './CtaBtn.css'
import { buildCheckoutUrl } from '../lib/checkout'

// ─── LINK DE CHECKOUT — troque aqui ──────────────────────────────────────────
const CHECKOUT_LINK = 'https://lastlink.com/p/C3DDAD581/checkout-payment/'   // ← checkout Lastlink
// ─────────────────────────────────────────────────────────────────────────────

export default function CtaBtn({ label = '🔓 LIBERAR MEU PLANO POR R$37,90 →', variant = 'primary' }) {
  return (
    <a href={buildCheckoutUrl(CHECKOUT_LINK)} className={`cta-btn cta-btn--${variant}`}>
      {label}
    </a>
  )
}
