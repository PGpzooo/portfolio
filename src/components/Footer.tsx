/**
 * 页脚组件 - 占位，后续实现
 */
export function Footer() {
  return (
    <footer className="px-4 py-10" aria-label="页脚">
      <div className="mx-auto max-w-6xl border-t border-white/5 pt-8 text-sm text-gray-500">
        <p>
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Personal Portfolio
          </span>{' '}
          · Built with React + TypeScript + Vite
        </p>
      </div>
    </footer>
  )
}
