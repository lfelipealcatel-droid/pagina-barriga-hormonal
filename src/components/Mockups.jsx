import { useState, useRef, useEffect, useCallback } from 'react'
import './Mockups.css'

const screens = [
  { src: '/imagem/tela-1.png', label: 'Hoje'        },
  { src: '/imagem/tela-2.png', label: 'Movimento'   },
  { src: '/imagem/tela-3.png', label: 'Alimentação' },
  { src: '/imagem/tela-4.png', label: 'Evolução'    },
  { src: '/imagem/tela-5.png', label: 'Termômetro'  },
  { src: '/imagem/tela-6.png', label: 'Coach Lara'  },
]

const bullets = [
  'Seu plano diário — abre e já sabe o que fazer hoje',
  'Sequências em vídeo — 8 minutos guiados, sem adivinhação',
  'Guia de superalimentos — o que adicionar, calibrado pro seu perfil',
  'Sua evolução dia a dia — acompanhe a barriga reduzindo',
]

const GAP   = 13
const SPEED = 3200
const N     = screens.length

// Track estendido: [clone-do-último, ...slides-reais, clone-do-primeiro]
// Índices reais: 1..N | índice 0 = clone do último | índice N+1 = clone do primeiro
const ext = [screens[N - 1], ...screens, screens[0]]

export default function Mockups() {
  const [active, setActive] = useState(1)   // começa no primeiro slide real (ext[1])
  const [cW,     setCW]     = useState(375)
  const [drag,   setDrag]   = useState(0)
  const [trans,  setTrans]  = useState(true)

  const vpRef    = useRef(null)
  const timer    = useRef(null)
  const dragging = useRef(false)
  const startX   = useRef(0)
  const curDrag  = useRef(0)
  const wasDrag  = useRef(false)

  const SW     = Math.min(Math.max(cW * 0.47, 159), 198)
  const trackX = (cW - SW) / 2 - active * (SW + GAP) + drag

  // ── Auto-play (sempre para a direita) ─────────────────────────────────────
  const play = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setTrans(true)
      setActive(p => Math.min(p + 1, N + 1))
    }, SPEED)
  }, [])

  useEffect(() => { play(); return () => clearInterval(timer.current) }, [play])

  // ── Pulo silencioso ao pousar num clone ───────────────────────────────────
  // Aguarda a transição terminar (460ms) e troca para o slide real equivalente
  // sem animação — como os slides são idênticos, o salto é invisível.
  useEffect(() => {
    if (active === 0) {
      const t = setTimeout(() => {
        setTrans(false)
        setActive(N)      // clone do último → real último
      }, 460)
      return () => clearTimeout(t)
    }
    if (active === N + 1) {
      const t = setTimeout(() => {
        setTrans(false)
        setActive(1)      // clone do primeiro → real primeiro
      }, 460)
      return () => clearTimeout(t)
    }
  }, [active])

  // ── ResizeObserver ─────────────────────────────────────────────────────────
  useEffect(() => {
    const el = vpRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setCW(el.offsetWidth))
    ro.observe(el)
    setCW(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  // ── Drag global (pointer events) ──────────────────────────────────────────
  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      curDrag.current = e.clientX - startX.current
      setDrag(curDrag.current)
    }
    const onUp = () => {
      if (!dragging.current) return
      dragging.current = false
      setTrans(true)
      const d = curDrag.current
      wasDrag.current = Math.abs(d) > 8
      curDrag.current = 0
      setDrag(0)
      if      (d < -50) setActive(p => Math.min(p + 1, N + 1)) // próximo (dir.)
      else if (d >  50) setActive(p => Math.max(p - 1, 0))     // anterior (esq.)
      play()
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup',   onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup',   onUp)
    }
  }, [play])

  const onDown = (e) => {
    dragging.current = true
    wasDrag.current  = false
    startX.current   = e.clientX
    curDrag.current  = 0
    setDrag(0)
    setTrans(false)
    clearInterval(timer.current)
  }

  // ── Escala e opacidade por distância do ativo ─────────────────────────────
  const slideStyle = (i) => {
    const d = Math.abs(i - active)
    return {
      width:           SW,
      marginRight:     GAP,
      transform:       `scale(${d === 0 ? 1 : d === 1 ? 0.84 : 0.73})`,
      opacity:         d === 0 ? 1 : d === 1 ? 0.68 : 0.45,
      transition:      trans
        ? 'transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.46s'
        : 'none',
      transformOrigin: 'center',
      cursor:          i === active ? 'default' : 'pointer',
    }
  }

  // Índice real (0..N-1) para acender o dot correto
  const realIndex = ((active - 1) % N + N) % N

  const goTo = (realIdx) => {
    setTrans(true)
    setActive(realIdx + 1) // índice real → índice ext
    play()
  }

  return (
    <section className="mockups">
      <div className="mockups__head">
        <h2 className="mockups__title">
          Tudo num só lugar, no seu celular — acesso imediato após a compra:
        </h2>
      </div>

      {/* ── Viewport do carrossel ── */}
      <div
        className="mockups__vp"
        ref={vpRef}
        onPointerDown={onDown}
      >
        <div
          className="mockups__track"
          style={{
            transform:  `translateX(${trackX}px)`,
            transition: trans ? 'transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
          }}
        >
          {ext.map((s, i) => (
            <div
              key={i}
              className="mockups__slide"
              style={slideStyle(i)}
              onClick={() => {
                if (wasDrag.current) { wasDrag.current = false; return }
                if (i !== active) goTo((i - 1 + N) % N)
              }}
            >
              <div className="mockups__phone">
                <div className="mockups__island" />
                <div className="mockups__screen">
                  <img
                    src={s.src}
                    alt={s.label}
                    className="mockups__screen-img"
                    draggable={false}
                  />
                </div>
                <div className="mockups__home" />
              </div>
              <p className="mockups__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dots (baseados no índice real) ── */}
      <div className="mockups__dots">
        {screens.map((_, i) => (
          <button
            key={i}
            className={`mockups__dot${i === realIndex ? ' mockups__dot--on' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir para tela ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Bullets ── */}
      <div className="mockups__body">
        <ul className="mockups__bullets">
          {bullets.map((b, i) => (
            <li key={i} className="mockups__bullet">
              <span>✅</span><span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="mockups__footer">
          Funciona no celular, tablet ou computador. Nada para baixar, nada para instalar.
        </p>
      </div>
    </section>
  )
}
