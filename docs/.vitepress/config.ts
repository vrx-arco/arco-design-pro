import * as fs from 'node:fs'
import * as path from 'node:path'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import matter from 'gray-matter'

import UnoCss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { presetUno } from 'unocss'
import { VrxArcoProComponentsResolver } from '@vrx-arco/helper'
import pkg from '../package.json'
import { pwa } from './pwa'

function getModules() {
  const dir = 'modules'
  const funList: Record<string, { link: string; text: string }[]> = {}
  fs.readdirSync(path.resolve(dir)).forEach((item) => {
    if (item === 'index.md') return
    const isDirectory = fs.statSync(path.resolve(dir, item)).isDirectory()
    const mdRaw = fs.readFileSync(path.join(dir, item, isDirectory ? 'index.md' : ''), 'utf-8')
    const { data } = matter(mdRaw)
    const name = data.name
    const type = data.type
    const text = item.replace(/(.md)$/, '')
    funList[type] ||= []
    funList[type].push({
      text: `${name} ${text}`,
      link: `/modules/${text}${isDirectory ? '/' : ''}`,
    })
  })

  return {
    '/modules/': [
      {
        text: '组件',
        items: [{ text: '介绍', link: '/modules/' }],
      },
      ...Object.keys(funList)
        .sort()
        .map((key) => {
          return {
            text: key,
            items: funList[key],
            collapsed: true,
          }
        }),
    ],
  }
}
export default withPwa(
  defineConfig({
    title: 'vrx-arco',
    lang: 'zh-CN',
    base: '/arco-design-pro/',
    lastUpdated: true,
    vite: {
      server: { port: 3002, host: true },
      plugins: [
        UnoCss({ presets: [presetUno()] }),
        Components({
          extensions: ['vue', 'md'],
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          resolvers: [
            ArcoResolver({ importStyle: 'css', sideEffect: true }),
            VrxArcoProComponentsResolver({ importStyle: 'css', sideEffect: true }),
          ],
        }),
      ] as any,
    },
    description: '对arco-design-vue 的pro预设的封装',
    markdown: {
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    themeConfig: {
      logo: '/favicon.svg',
      lastUpdatedText: '最后更新时间',
      socialLinks: [{ link: 'https://github.com/vrx-arco/arco-design-pro', icon: 'github' }],
      outline: {
        label: '本页',
      },
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '暗色模式',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present White Kite',
      },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },
      nav: [
        {
          text: '指引',
          link: '/guide/',
          activeMatch: '^/guide/',
        },
        {
          text: '组件',
          link: '/modules/',
          activeMatch: '^/modules/',
        },
        {
          text: '图标',
          link: 'https://vrx-arco.github.io/icons/',
        },
        {
          text: pkg.version,
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vrx-arco/arco-design-pro/blob/main/CHANGELOG.md',
            },
          ],
        },
      ],
      sidebar: {
        '/guide/': [
          {
            text: '指引',
            items: [
              { text: '动机', link: '/guide/motive' },
              { text: '开始', link: '/guide/' },
              { text: '服务端渲染 SSR', link: '/guide/ssr' },
              { text: '迁移指南', link: '/guide/migration' },
            ],
          },
          {
            text: '组件',
            items: [
              {
                text: '组件',
                link: '/modules/',
              },
            ],
          },
        ],
        ...getModules(),
      },
    },
    head: [
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'author', content: 'WhiteKite' }],
      [
        'link',
        {
          rel: 'icon',
          href: '/arco-design-pro/favicon.ico',
          sizes: 'any',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          href: '/arco-design-pro/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
      [
        'link',
        {
          rel: 'apple-touch-icon',
          href: '/arco-design-pro/apple-touch-icon-180x180.png',
        },
      ],
    ],
    pwa,
  })
)
