import './Transformacao.css'

// ─── DADOS DINÂMICOS — fácil de editar ───────────────────────────────────────
const CM_PROJECTION = '5 a 7'   // ← vira dinâmico depois
// ─────────────────────────────────────────────────────────────────────────────

const dadosAgora = [
  { label: 'Barriga',     valor: 'Inchada e hormonal' },
  { label: 'Metabolismo', valor: 'Travado'             },
  { label: 'Energia',     valor: 'Baixa o dia todo'    },
]

const dadosObjetivo = [
  { label: 'Barriga',     valor: 'Firme e desinchada' },
  { label: 'Metabolismo', valor: 'Reativado'           },
  { label: 'Energia',     valor: 'Restaurada'          },
]

export default function Transformacao() {
  return (
    <section className="transf">
      <div className="transf__outer">
        <h2 className="transf__title">ONDE VOCÊ ESTÁ → ONDE VOCÊ VAI CHEGAR</h2>

        {/* ── Big beige card ── */}
        <div className="transf__card">

          {/* barra de rótulos branca */}
          <div className="transf__labels">
            <span className="transf__label">Agora</span>
            <div className="transf__label-sep" />
            <span className="transf__label">Seu objetivo</span>
          </div>

          {/* imagem única com antes + depois */}
          <div className="transf__img-wrap">
            <img
              src="/imagem/transformacao.png"
              alt="Antes e depois — transformação hormonal"
              className="transf__img"
            />
          </div>

          {/* card de dados em duas colunas */}
          <div className="transf__data">
            {/* coluna esquerda */}
            <div className="transf__col">
              {dadosAgora.map((d, i) => (
                <div
                  className={`transf__item${i < dadosAgora.length - 1 ? ' transf__item--border' : ''}`}
                  key={i}
                >
                  <p className="transf__item-label">{d.label}</p>
                  <p className="transf__item-value">{d.valor}</p>
                </div>
              ))}
            </div>

            {/* divisória vertical */}
            <div className="transf__vsep" />

            {/* coluna direita */}
            <div className="transf__col">
              {dadosObjetivo.map((d, i) => (
                <div
                  className={`transf__item${i < dadosObjetivo.length - 1 ? ' transf__item--border' : ''}`}
                  key={i}
                >
                  <p className="transf__item-label transf__item-label--goal">{d.label}</p>
                  <p className="transf__item-value">{d.valor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* faixa de destaque */}
        <div className="transf__highlight">
          ✨ Seu potencial: <strong>-{CM_PROJECTION} cm de barriga</strong> em 21 dias
        </div>
      </div>
    </section>
  )
}
