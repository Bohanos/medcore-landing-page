import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Journey from './sections/Journey'

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Journey />
      </main>

      <Footer />
    </div>
  )
}