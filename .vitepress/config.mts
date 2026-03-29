import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gyro_blog',
  description: 'my personal tech blog',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '测试页', link: '/test' },
      { text: '项目资料', link: '/projects' }
    ]
  }
})