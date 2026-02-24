/**
 * Hero 区块：大标题 + 简介 + 头像
 * 深色主题、渐变色强调、移动端适配
 */
export interface HeroProps {
  /** 主标题 */
  title?: string
  /** 副标题或一句话简介 */
  subtitle?: string
  /** 头像图片地址，不传则显示首字母占位 */
  avatarSrc?: string
  /** 头像 alt / 占位时显示的首字母 */
  avatarAlt?: string
}

const defaultTitle = '你好，我是创作者'
const defaultSubtitle =
  '专注产品与体验，用代码与设计把想法变成现实。这里是我的项目与思考。'

export function Hero({ title = defaultTitle, subtitle = defaultSubtitle, avatarSrc, avatarAlt = '我' }: HeroProps) {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 py-16 md:py-24 overflow-hidden"
      aria-label="首页介绍"
    >
      {/* 背景渐变装饰 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto">
        {/* 文案区：大标题 + 简介 */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 头像：圆形 + 渐变边框，支持懒加载 */}
        <div className="flex-shrink-0 order-1 md:order-2">
          <div className="relative p-1 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25">
            <div className="rounded-full overflow-hidden bg-[#0a0a0a] p-0.5">
              {avatarSrc ? (
                <img
                  src={avatarSrc}
                  alt={avatarAlt}
                  width={200}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover"
                />
              ) : (
                <div
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-4xl sm:text-5xl font-semibold text-white/90 border-2 border-white/10"
                  aria-label={`头像占位：${avatarAlt}`}
                >
                  {avatarAlt.slice(0, 1)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
