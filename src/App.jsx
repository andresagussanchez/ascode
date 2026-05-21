import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Projects'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
