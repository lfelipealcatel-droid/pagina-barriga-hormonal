import './App.css'
import StickyHeader  from './components/StickyHeader'
import Hero          from './components/Hero'
import Transformacao from './components/Transformacao'
import Mockups       from './components/Mockups'
import Causa         from './components/Causa'
import Pilares       from './components/Pilares'
import FuturePacing  from './components/FuturePacing'
import Oferta        from './components/Oferta'
import Bonus         from './components/Bonus'
import ProvasSociais from './components/ProvasSociais'
import Garantia      from './components/Garantia'
import FAQ           from './components/FAQ'
import CtaFinal      from './components/CtaFinal'

// Perfil salvo pelo script inline do index.html (que remove nome/medidas da URL antes do Pixel)
function lerPerfilSalvo() {
  try {
    const raw = sessionStorage.getItem('vittalle_perfil')
    return raw ? JSON.parse(raw) || {} : {}
  } catch {
    return {}
  }
}

export default function App() {
  // Lê primeiro do sessionStorage; se não houver, da URL
  const perfil       = lerPerfilSalvo()
  const params       = new URLSearchParams(window.location.search)
  const nome         = (perfil.nome ?? params.get('nome'))?.trim() || ''
  const cmMin        = perfil.cm_min ?? params.get('cm_min')
  const cmMax        = perfil.cm_max ?? params.get('cm_max')
  const cmProjection =
    cmMin && cmMax && !isNaN(Number(cmMin)) && !isNaN(Number(cmMax))
      ? `${cmMin} a ${cmMax}`
      : '5 a 7'

  return (
    <>
      <StickyHeader />
      <main>
        <Hero nome={nome} />
        <Transformacao cmProjection={cmProjection} />
        <Mockups />
        <Causa />
        <Pilares />
        <FuturePacing />
        <Oferta />
        <Bonus />
        <ProvasSociais />
        <Garantia />
        <FAQ />
        <CtaFinal nome={nome} />
      </main>
    </>
  )
}
