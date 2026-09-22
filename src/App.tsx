import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Path } from './components/Path'
import { Projects } from './components/Projects'
import { Publications } from './components/Publications'
import { Research } from './components/Research'
import { Students } from './components/Students'
import { ThesisIdeas } from './components/ThesisIdeas'

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#research">Skip to main content</a>
      <Header />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Path />
        <Publications />
        <Students />
        <ThesisIdeas />
        <About />
      </main>
      <Footer />
    </div>
  )
}
