import { TrendingDown, Flame, Droplets } from 'lucide-react'
import './Causa.css'

const cards = [
  { Icon: TrendingDown, title: 'Hormônios',    sub: 'em queda'    },
  { Icon: Flame,        title: 'Metabolismo',  sub: 'travado'     },
  { Icon: Droplets,     title: 'Inflamação',   sub: 'silenciosa'  },
]

export default function Causa() {
  return (
    <section className="causa">
      <div className="causa__container">

        <p className="causa__headline">A sua barriga não é culpa sua.</p>
        <div className="causa__rule" />

        <p className="causa__lead">
          Ela apareceu porque seu corpo entrou numa nova fase hormonal — e o Triângulo Hormonal 40+ travou 3 coisas ao mesmo tempo:
        </p>

        <div className="causa__cards">
          {cards.map(({ Icon, title, sub }) => (
            <div className="causa__card" key={title}>
              <Icon className="causa__card-icon" strokeWidth={1.8} />
              <span className="causa__card-title">{title}</span>
              <span className="causa__card-sub">{sub}</span>
            </div>
          ))}
        </div>

        <p className="causa__body">
          Cada dieta e cada treino que você tentou atacou só uma ponta. Por isso <strong>nada funcionou</strong>.
        </p>

        <p className="causa__body">
          O <strong className="causa__brand">Plano Barriga Hormonal 40+</strong> é o primeiro feito para{' '}
          <strong className="causa__brand">atacar as três ao mesmo tempo</strong> — no ritmo e nas limitações do seu corpo hoje.
        </p>

      </div>
    </section>
  )
}
