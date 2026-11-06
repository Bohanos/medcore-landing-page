import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import Modules from './sections/Modules'
import Roles from './sections/Roles'
import Screens from './sections/Screens'
import LocalNetwork from './sections/LocalNetwork'

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Journey />
        <Modules />
        <Roles />
        <Screens />
        <LocalNetwork />
      </main>

      <Footer />
    </div>
  )
}