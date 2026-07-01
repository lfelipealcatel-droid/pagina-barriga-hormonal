import './Bonus.css'

const bonus = [
  {
    num: 'Bônus 1',
    title: 'Guia de Superalimentos Hormonais',
    text: 'Os 10 superalimentos que reequilibram seus hormônios — quais são, como usar e quando.',
    valor: 'R$37',
  },
  {
    num: 'Bônus 2',
    title: 'Lista de Compras Semana a Semana',
    text: 'Exatamente o que comprar no mercado nas 3 semanas. Sem desperdício, sem confusão.',
    valor: 'R$27',
  },
  {
    num: 'Bônus 3',
    title: 'Diário Hormonal de 21 Dias',
    text: 'Seu checklist diário para acompanhar cada vitória e manter o ritmo até o fim.',
    valor: 'R$27',
  },
]

export default function Bonus() {
  return (
    <section className="bonus">
      <div className="bonus__container">
        <h2 className="bonus__title">🎁 3 bônus que vêm junto, sem pagar nada a mais:</h2>

        <div className="bonus__grid">
          {bonus.map((b, i) => (
            <div className="bonus__card" key={i}>
              <div className="bonus__card-top">
                <span className="bonus__badge">BÔNUS</span>
                <span className="bonus__num">{b.num}</span>
              </div>
              <h3 className="bonus__card-title">{b.title}</h3>
              <p className="bonus__card-text">{b.text}</p>
              <div className="bonus__card-footer">
                <span className="bonus__valor-riscado">{b.valor}</span>
                <span className="bonus__incluso">✅ incluso</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
