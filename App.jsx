import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--ink)]">
      <Navbar />
      <Hero />
      <Courses />
      <Stats />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  )
}

export default App
