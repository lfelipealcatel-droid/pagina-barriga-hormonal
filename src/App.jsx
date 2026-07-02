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

export default function App() {
  // Lê os parâmetros da URL uma única vez (não mudam durante a sessão)
  const params       = new URLSearchParams(window.location.search)
  const nome         = params.get('nome')?.trim() || ''
  const cmMin        = params.get('cm_min')
  const cmMax        = params.get('cm_max')
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
