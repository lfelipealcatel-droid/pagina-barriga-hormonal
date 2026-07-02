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

const GAP   = 13   // px entre slides
const SPEED = 3200 // ms por slide

export default function Mockups() {
  const [active,  setActive]  = useState(0)
  const [cW,      setCW]      = useState(375)   // container width
  const [drag,    setDrag]    = useState(0)      // px de drag atual
  const [trans,   setTrans]   = useState(true)   // transições ativas

  const vpRef    = useRef(null)
  const timer    = useRef(null)
  const dragging = useRef(false)
  const startX   = useRef(0)
  const curDrag  = useRef(0)
  const wasDrag  = useRef(false)

  const N  = screens.length
  // largura responsiva do slide: 41% da tela, entre 138 e 172 px
  const SW = Math.min(Math.max(cW * 0.47, 159), 198)
  // offset do track para centralizar o slide ativo
  const trackX = (cW - SW) / 2 - active * (SW + GAP) + drag

  // ── Auto-play ──────────────────────────────────────────────────────────────
  const play = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setTrans(true)
      setActive(p => (p + 1) % N)
    }, SPEED)
  }, [N])

  useEffect(() => { play(); return () => clearInterval(timer.current) }, [play])

  // ── Mede o container com ResizeObserver ────────────────────────────────────
  useEffect(() => {
    const el = vpRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setCW(el.offsetWidth))
    ro.observe(el)
    setCW(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  // ── Eventos globais de drag (mouse + touch via pointer events) ─────────────
  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const x = e.clientX
      curDrag.current = x - startX.current
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
      if (d < -50) setActive(p => Math.min(p + 1, N - 1))
      else if (d > 50) setActive(p => Math.max(p - 1, 0))
      play()
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup',   onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup',   onUp)
    }
  }, [N, play])

  const onDown = (e) => {
    dragging.current = true
    wasDrag.current  = false
    startX.current   = e.clientX
    curDrag.current  = 0
    setDrag(0)
    setTrans(false)
    clearInterval(timer.current)
  }

  // ── Estilo de cada slide (escala + opacidade por distância do ativo) ───────
  const slideStyle = (i) => {
    const d = Math.abs(i - active)
    return {
      width:       SW,
      marginRight: GAP,
      transform:  `scale(${d === 0 ? 1 : d === 1 ? 0.84 : 0.73})`,
      opacity:     d === 0 ? 1 : d === 1 ? 0.68 : 0.45,
      transition:  trans
        ? 'transform 0.46s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.46s'
        : 'none',
      transformOrigin: 'center',
      cursor: i === active ? 'default' : 'pointer',
    }
  }

  const goTo = (i) => {
    setTrans(true)
    setActive(i)
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
          {screens.map((s, i) => (
            <div
              key={i}
              className="mockups__slide"
              style={slideStyle(i)}
              onClick={() => {
                if (wasDrag.current) { wasDrag.current = false; return }
                if (i !== active) goTo(i)
              }}
            >
              {/* moldura de celular criada em CSS — estilo iPhone */}
              <div className="mockups__phone">
                {/* dynamic island */}
                <div className="mockups__island" />
                {/* área da tela */}
                <div className="mockups__screen">
                  <img
                    src={s.src}
                    alt={s.label}
                    className="mockups__screen-img"
                    draggable={false}
                  />
                </div>
                {/* barra home */}
                <div className="mockups__home" />
              </div>
              <p className="mockups__label">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dots ── */}
      <div className="mockups__dots">
        {screens.map((_, i) => (
          <button
            key={i}
            className={`mockups__dot${i === active ? ' mockups__dot--on' : ''}`}
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
