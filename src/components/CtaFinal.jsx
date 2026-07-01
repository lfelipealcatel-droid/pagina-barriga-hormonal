import CtaBtn from './CtaBtn'
import './CtaFinal.css'

// ─── DADOS DINÂMICOS — fácil de editar ───────────────────────────────────────
const USER_NAME = 'Maria'    // ← nome da usuária (vira dinâmico depois)
// ─────────────────────────────────────────────────────────────────────────────

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="cta-final__container">
        <p className="cta-final__copy">
          {USER_NAME}, esse é o caminho que seu corpo está esperando há meses.
        </p>
        <p className="cta-final__copy cta-final__copy--sub">
          Você já descobriu a causa. Agora é só começar.
        </p>

        <div className="cta-final__price-block">
          <span className="cta-final__price">R$37,90</span>
          <span className="cta-final__installment">ou 12x de R$3,79</span>
        </div>

        <CtaBtn label="🔓 COMEÇAR MEUS 21 DIAS AGORA →" />

        <div className="cta-final__seals">
          🔒 Acesso imediato &nbsp;·&nbsp; Garantia de 30 dias &nbsp;·&nbsp; +23.847 mulheres já começaram
        </div>
      </div>
    </section>
  )
}
