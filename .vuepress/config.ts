import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'shen',
  description: '走',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/ice.png',
    author: 'shen',
    docsRepo: '一些记录',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/code/': [
        {
          text: '前端',
          children: ['home', 'theme']
        },
      ]
    },
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: '导航', link: '/categories/code/' },
      { text: '关于',
        children: [
          { text: '关于我', link: '/about/me' },
          { text: '导航', link: '/blogs/other/guide' }
        ]
      },
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
