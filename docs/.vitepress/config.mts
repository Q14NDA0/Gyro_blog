import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gyro_blog',
  description: 'my personal tech blog',

  themeConfig: {
    nav: 
    [
      { text: '首页', link: '/' },
      { text: '近期感悟', link: '/recent-thoughts' },
      { text: '测试页', link: '/test' },
      { text: '项目资料', link: '/projects' }
    ],

    sidebar: 
    {
      '/learning_route/': 
      [
        {
          text: '学习路线',
          items: 
          [
            { text: '总览', link: '/learning_route/' },
            { text: 'PX4通信链路入门（一）简单的读取与控制', link: '/learning_route/px4_basic' },
          ]
        }
      ]
    }
  }
})