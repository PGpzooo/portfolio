/**
 * 联系方式：邮箱、GitHub、社交媒体 - 占位，后续实现
 */
export function Contact() {
  const phone = '15306186026'
  const email = '15306186026@163.com'
  const githubUser = 'PGpzooo'
  const githubUrl = `https://github.com/${githubUser}`

  return (
    <section className="px-4 py-16 md:py-24" aria-label="联系方式">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            联系方式
          </span>
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`tel:${phone}`}
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            <p className="text-sm text-gray-400">电话</p>
            <p className="mt-2 text-lg font-semibold text-white">{phone}</p>
            <p className="mt-3 text-sm text-gray-400">点击直接拨号</p>
          </a>

          <a
            href={`mailto:${email}`}
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            <p className="text-sm text-gray-400">邮箱</p>
            <p className="mt-2 break-all text-lg font-semibold text-white">{email}</p>
            <p className="mt-3 text-sm text-gray-400">点击打开邮件客户端</p>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            <p className="text-sm text-gray-400">GitHub</p>
            <p className="mt-2 text-lg font-semibold text-white">@{githubUser}</p>
            <p className="mt-3 text-sm text-gray-400">点击访问主页</p>
          </a>
        </div>
      </div>
    </section>
  )
}
