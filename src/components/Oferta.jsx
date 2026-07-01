import CtaBtn from './CtaBtn'
import './Oferta.css'

const itens = [
  { desc: 'Plano Barriga Hormonal 40+ (21 dias, personalizado)', valor: 'R$127' },
  { desc: 'Bônus 1 — Guia de Superalimentos Hormonais',          valor: 'R$37'  },
  { desc: 'Bônus 2 — Lista de Compras Semana a Semana',          valor: 'R$27'  },
  { desc: 'Bônus 3 — Diário Hormonal de 21 Dias',                valor: 'R$27'  },
]

export default function Oferta() {
  return (
    <section className="oferta">
      <div className="oferta__container">
        <h2 className="oferta__title">🎁 Tudo que você recebe hoje:</h2>

        <div className="oferta__table">
          {itens.map((item, i) => (
            <div className="oferta__row" key={i}>
              <span className="oferta__row-desc">{item.desc}</span>
              <span className="oferta__row-val">{item.valor}</span>
            </div>
          ))}
          <div className="oferta__row oferta__row--total">
            <span>Valor total</span>
            <span className="oferta__total-riscado">R$218</span>
          </div>
        </div>

        <div className="oferta__price-card">
          <p className="oferta__label">Hoje, só para você que concluiu o teste:</p>

          <div className="oferta__price-block">
            <span className="oferta__price">R$37,90</span>
            <span className="oferta__installment">ou 12x de R$3,79</span>
          </div>

          <CtaBtn label="🔓 LIBERAR MEU PLANO POR R$37,90 →" />

          <div className="oferta__seals">
            🔒 Pagamento 100% seguro &nbsp;·&nbsp; Acesso imediato &nbsp;·&nbsp; Garantia de 30 dias
          </div>
        </div>
      </div>
    </section>
  )
}
