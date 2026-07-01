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
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <Transformacao />
        <Mockups />
        <Causa />
        <Pilares />
        <FuturePacing />
        <Oferta />
        <Bonus />
        <ProvasSociais />
        <Garantia />
        <FAQ />
        <CtaFinal />
      </main>
    </>
  )
}
