import './ProvasSociais.css'

const depoimentos = [
  {
    foto: '/imagem/depoimento1-45anos.png',
    nome: 'Flávia, 45 anos',
    sealNum: '-9 cm',
    texto: 'Malhava 4x por semana e a barriga não saía. Descobri que o problema era hormonal, não falta de esforço. Perdi 9 cm de barriga fazendo 8 minutos por dia em casa. Voltei a fechar a calça que estava guardada.',
  },
  {
    foto: '/imagem/depoimento2-47anos.png',
    nome: 'Luciana, 47 anos',
    sealNum: '-10 cm',
    texto: 'Meu médico não liberou reposição hormonal e eu me sentia sem saída. Esse protocolo trabalhou meus hormônios pela alimentação e pelo movimento. Perdi 10 cm de barriga e 8 kg — e o melhor, minha energia voltou. Nem parece que sou eu.',
  },
  {
    foto: '/imagem/depoimento3-59anos.png',
    nome: 'Sônia, 59 anos',
    sealNum: '-8 cm',
    texto: 'Achei que na minha idade não tinha mais jeito. Tenho dor no joelho e não podia fazer exercício de impacto. Aqui foi tudo sem impacto, no meu ritmo. Desinchei, dormi melhor e perdi 8 cm. Queria ter descoberto antes.',
  },
]

export default function ProvasSociais() {
  return (
    <section className="provas">
      <div className="provas__container">
        <h2 className="provas__title">Resultados reais de mulheres como você</h2>

        <div className="provas__grid">
          {depoimentos.map((d, i) => (
            <div className="provas__card" key={i}>

              <div className="provas__photo-wrap">
                <div className="provas__photo-clip">
                  <img
                    src={d.foto}
                    alt={`Resultado de ${d.nome}`}
                    className="provas__photo"
                  />
                </div>
              </div>

              {/* selo centralizado, puxado para cima com margin negativa */}
              <div className="provas__seal-row">
                <div className="provas__seal">
                  <span className="provas__seal-num">{d.sealNum}</span>
                  <span className="provas__seal-sub">de barriga</span>
                </div>
              </div>

              <p className="provas__texto">"{d.texto}"</p>
              <div className="provas__autor">{d.nome}</div>

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
