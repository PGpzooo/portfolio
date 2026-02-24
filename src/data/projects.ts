/**
 * 项目数据 - 项目名称、截图、描述、技术栈、链接
 * PRD：项目卡片列表
 */
export interface Project {
  id: string
  name: string
  image?: string
  description: string
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '1',
    name: '示例项目 A',
    description: '一个简洁的 Web 应用，展示响应式布局与现代交互。包含列表、筛选与详情页。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    id: '2',
    name: '示例项目 B',
    description: '数据可视化看板，支持多图表类型与实时更新，便于快速理解业务指标。',
    techStack: ['Vue', 'ECharts', 'Node.js'],
    link: 'https://github.com',
  },
  {
    id: '3',
    name: '示例项目 C',
    description: '移动端优先的待办应用，支持离线与同步，界面简洁易用。',
    techStack: ['React Native', 'Expo', 'Supabase'],
  },
]
