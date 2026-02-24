import type { Project } from '../data/projects'
import { projects } from '../data/projects'

/**
 * 单张项目卡片：截图、标题、描述、技术栈标签
 * 支持无截图时占位、链接可点击、图片懒加载
 */
function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      {/* 截图区域：有图用 img 懒加载，无图用渐变占位 */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-gray-800/50">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} 截图`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20"
            aria-hidden
          >
            <span className="text-4xl font-light text-white/30">暂无截图</span>
          </div>
        )}
        {/* 顶部渐变遮罩，增强与内容区的衔接 */}
        <div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* 内容区：标题、描述、技术栈 */}
      <div className="flex flex-1 flex-col rounded-b-xl border border-white/5 border-t-0 bg-white/[0.03] p-5">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-2.5 py-1 text-xs font-medium text-cyan-300 ring-1 ring-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-xl transition focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
      >
        {content}
      </a>
    )
  }

  return <article className="group flex h-full flex-col overflow-hidden rounded-xl">{content}</article>
}

/**
 * 项目展示区块：网格展示项目卡片列表
 * 深色主题、渐变色标签、移动端适配、图片懒加载
 */
export function Projects() {
  if (projects.length === 0) {
    return (
      <section className="px-4 py-16 md:py-24" aria-label="项目展示">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-semibold text-white md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              项目展示
            </span>
          </h2>
          <p className="text-gray-400">暂无项目，稍后更新。</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 md:py-24" aria-label="项目展示">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-semibold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            项目展示
          </span>
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
