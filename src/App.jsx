import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Projects'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
