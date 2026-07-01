import './Pilares.css'

const pilares = [
  {
    num: 'PILAR 1',
    title: 'Movimento Hormonal',
    tagline: 'não é exercício. é ativação.',
    text: '8 minutos por dia, em casa, sem impacto. Sequências que ativam o sistema linfático, baixam o cortisol e reativam seu metabolismo. Evolui em 3 fases ao longo dos 21 dias.',
  },
  {
    num: 'PILAR 2',
    title: 'Alimentação Hormonal',
    tagline: 'não é dieta. é protocolo.',
    text: 'Sem cortar nada, sem contar caloria. Você adiciona superalimentos específicos que agem nas três pontas do seu Triângulo Hormonal.',
  },
  {
    num: 'PILAR 3',
    title: 'Hábitos Hormonais',
    tagline: 'não são mudanças de vida. são âncoras diárias.',
    text: 'Apenas 3 hábitos simples, baseados em ciência. Cada um destrava uma ponta do triângulo — em minutos por dia.',
  },
]

export default function Pilares() {
  return (
    <section className="pilares">
      <div className="pilares__container">
        <h2 className="pilares__title">
          🧬 Seu plano age nas 3 causas da sua barriga ao mesmo tempo:
        </h2>

        <div className="pilares__grid">
          {pilares.map((p, i) => (
            <div className="pilares__card" key={i}>
              <span className="pilares__num">{p.num}</span>
              <h3 className="pilares__card-title">{p.title}</h3>
              <p className="pilares__tagline"><em>{p.tagline}</em></p>
              <p className="pilares__card-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
