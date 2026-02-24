import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/**
 * 个人作品集 - 根组件
 * 符合 AGENTS.md：函数式组件、Tailwind、深色主题
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
