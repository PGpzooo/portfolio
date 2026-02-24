/**
 * 关于我：详细介绍 + 技能列表 - 占位，后续实现
 */
import { skills } from '../data/skills'

export function About() {
  return (
    <section className="px-4 py-16 md:py-24" aria-label="关于我">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            关于我
          </span>
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          {/* 详细介绍 */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 md:p-8">
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                我熟悉 Python 编程语言，常用 Pandas、NumPy、Matplotlib 以及
                scikit-learn 等工具包进行数据处理、分析与建模；了解常见的分类、回归与聚类模型，
                能够完成从数据清洗、特征处理到模型训练与评估的基础流程。
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                数据库方面，我熟练使用 MySQL，能够编写包含窗口函数、表连接（JOIN）等在内的查询语句，
                并具备一定的 R 语言基础。同时熟练使用办公软件：Word、Excel（常用函数与数据透视表）、
                PPT 等，能高效支持日常分析与汇报。
              </p>
            </div>
          </div>

          {/* 技能列表 */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white">技能概览</h3>
              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {skills.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-2.5 py-1 text-xs font-medium text-cyan-200 ring-1 ring-white/10">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/5 bg-[#0a0a0a]/40 p-4">
                <p className="text-sm leading-relaxed text-gray-400">
                  提示：你可以在 <code className="rounded bg-white/5 px-1.5 py-0.5 text-gray-300">src/data/skills.ts</code> 中
                  直接增删技能条目，页面会自动更新。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
