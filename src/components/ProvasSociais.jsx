import './ProvasSociais.css'

const depoimentos = [
  {
    foto: '/imagem/depo-1.jpg',
    nome: 'Andreia',
    idade: '43 anos',
    cm: '-9 cm',
    texto: 'Achei que era frescura. Funcionou. Voltei a fechar a calça que estava guardada há 2 anos.',
  },
  {
    foto: '/imagem/depo-2.jpg',
    nome: 'Vanessa',
    idade: '46 anos',
    cm: '-9 cm',
    texto: 'Em 21 dias minha barriga desinchou e eu finalmente me reconheci no espelho de novo.',
  },
  {
    foto: '/imagem/depo-3.jpg',
    nome: 'Cláudia',
    idade: '45 anos',
    cm: '-7 cm',
    texto: 'Eu já tinha tentado de tudo. Foi a primeira vez que algo respeitou o meu corpo nessa fase.',
  },
]

export default function ProvasSociais() {
  return (
    <section className="provas">
      <div className="provas__container">
        <h2 className="provas__title">🔥 Resultados reais de mulheres como você:</h2>

        <div className="provas__grid">
          {depoimentos.map((d, i) => (
            <div className="provas__card" key={i}>
              <div className="provas__photo-wrap">
                <img
                  src={d.foto}
                  alt={`Depoimento ${d.nome}`}
                  className="provas__photo"
                  onError={e => {
                    e.currentTarget.parentElement.classList.add('provas__photo-wrap--placeholder')
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="provas__photo-ph">📸</div>
              </div>
              <div className="provas__cm">{d.cm}</div>
              <p className="provas__texto">"{d.texto}"</p>
              <div className="provas__autor">
                <strong>{d.nome}</strong>, {d.idade}
              </div>
            </div>
          ))}
        </div>

        <div className="provas__footer">
          ⭐⭐⭐⭐⭐ 4.9/5 · baseado em 8.213 avaliações
        </div>
      </div>
    </section>
  )
}
