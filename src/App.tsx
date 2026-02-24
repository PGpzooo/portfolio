import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

/**
 * 个人作品集 - 根组件
 * 符合 AGENTS.md：函数式组件、Tailwind、深色主题
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App
