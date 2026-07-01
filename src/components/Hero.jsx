import './Hero.css'

// ─── DADOS DINÂMICOS — fácil de editar ───────────────────────────────────────
const USER_NAME = 'Maria'          // ← nome da usuária (vira dinâmico depois)
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          {USER_NAME}, seu Plano Barriga Hormonal 40+ está pronto.
        </h1>
        <p className="hero__subtitle">
          O protocolo de 21 dias personalizado para o seu perfil hormonal — 8 minutos por dia, em casa, sem academia e sem dieta restritiva.
        </p>
        <div className="hero__seal">
          ✅ +23.847 mulheres 40+ já começaram &nbsp;·&nbsp; ⭐ 4.9/5
        </div>
      </div>
    </section>
  )
}
