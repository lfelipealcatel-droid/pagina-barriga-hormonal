import { useState, useEffect } from 'react'
import './StickyHeader.css'

// ─── CONFIGURAÇÃO FÁCIL DE EDITAR ────────────────────────────────────────────
const CHECKOUT_LINK = '#checkout'   // ← troque pelo link da Hotmart/Kiwify
const TIMER_MINUTES = 9
const TIMER_SECONDS = 32
// ─────────────────────────────────────────────────────────────────────────────

export default function StickyHeader() {
  const [timeLeft, setTimeLeft] = useState(TIMER_MINUTES * 60 + TIMER_SECONDS)

  useEffect(() => {
    if (timeLeft <= 0) return
    const id = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(id)
  }, [timeLeft])

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const secs = String(timeLeft % 60).padStart(2, '0')

  return (
    <header className="sticky-header">
      <div className="sticky-header__inner">
        <span className="sticky-header__text">
          Seu acesso está reservado por <strong className="sticky-header__timer">[{mins}:{secs}]</strong>
        </span>
        <a href={CHECKOUT_LINK} className="sticky-header__btn">
          LIBERAR MEU PLANO →
        </a>
      </div>
    </header>
  )
}
