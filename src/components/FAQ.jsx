import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'Funciona mesmo no meu caso?',
    a: 'Sim. O protocolo foi calibrado para o seu perfil hormonal específico, identificado no teste — incluindo as suas limitações físicas.',
  },
  {
    q: 'Preciso de equipamento ou academia?',
    a: 'Não. São 8 minutos por dia, em casa, sem impacto e sem nenhum equipamento.',
  },
  {
    q: 'Vou precisar fazer dieta?',
    a: 'Não. Você não corta nada e não conta caloria — apenas adiciona superalimentos ao que já come.',
  },
  {
    q: 'Quanto tempo até ver resultado?',
    a: 'A maioria sente a barriga desinchar já nos primeiros 3 a 5 dias. A redução em cm aparece ao longo dos 21 dias.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Assim que a compra é confirmada, você recebe um link e uma senha no seu e-mail para acessar tudo imediatamente pelo celular, tablet ou computador. Sem espera e sem app para baixar.',
  },
  {
    q: 'E se eu tiver mais de 50 ou 60 anos?',
    a: 'O protocolo se adapta à sua fase hormonal. Mulheres acima de 55 costumam ter os resultados mais consistentes.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq__item${open ? ' faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq__chevron">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq__answer">{a}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Perguntas frequentes</h2>
        <div className="faq__list">
          {items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
