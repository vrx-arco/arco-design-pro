import { NuxtOptions } from '@nuxt/schema'
import { componentStyle } from '@vrx-cp/nuxt-utils'
import { kebabCase } from 'scule'
import { VrxArcoOption } from '../type'

const matchComponents = [
  {
    pattern: /^AnchorLink$/,
    componentDir: 'anchor',
  },
  {
    pattern: /^AvatarGroup$/,
    componentDir: 'avatar',
  },
  {
    pattern: /^BreadcrumbItem$/,
    componentDir: 'breadcrumb',
  },
  {
    pattern: /^ButtonGroup$/,
    componentDir: 'button',
  },
  {
    pattern: /^(CardMeta|CardGrid)$/,
    componentDir: 'card',
  },
  {
    pattern: /^CarouselItem$/,
    componentDir: 'carousel',
  },
  {
    pattern: /^CascaderPanel$/,
    componentDir: 'cascader',
  },
  {
    pattern: /^CheckboxGroup$/,
    componentDir: 'checkbox',
  },
  {
    pattern: /^CollapseItem$/,
    componentDir: 'collapse',
  },
  {
    pattern: /^(WeekPicker|MonthPicker|YearPicker|QuarterPicker|RangePicker)$/,
    componentDir: 'date-picker',
  },
  {
    pattern: /^DescriptionsItem$/,
    componentDir: 'descriptions',
  },
  {
    pattern: /^(Doption|Dgroup|Dsubmenu|DropdownButton)$/,
    componentDir: 'dropdown',
  },
  {
    pattern: /^FormItem$/,
    componentDir: 'form',
  },
  {
    pattern: /^(Col|Row|GridItem)$/,
    componentDir: 'grid',
  },
  {
    pattern: /^(ImagePreview|ImagePreviewGroup)$/,
    componentDir: 'image',
  },
  {
    pattern: /^(InputGroup|InputSearch|InputPassword)$/,
    componentDir: 'input',
  },

  {
    pattern: /^(LayoutHeader|LayoutContent|LayoutFooter|LayoutSider)$/,
    componentDir: 'layout',
  },
  {
    pattern: /^(ListItem|ListItemMeta)$/,
    componentDir: 'list',
  },
  {
    pattern: /^(MenuItem|MenuItemGroup|SubMenu)$/,
    componentDir: 'menu',
  },
  {
    pattern: /^RadioGroup$/,
    componentDir: 'radio',
  },
  {
    pattern: /^(Option|Optgroup)$/,
    componentDir: 'select',
  },

  {
    pattern: /^(SkeletonLine|SkeletonShape)$/,
    componentDir: 'skeleton',
  },
  {
    pattern: /^Countdown$/,
    componentDir: 'statistic',
  },
  {
    pattern: /^Step$/,
    componentDir: 'steps',
  },
  {
    pattern: /^(Thead|Td|Th|Tr|Tbody|TableColumn)$/,
    componentDir: 'table',
  },
  {
    pattern: /^TagGroup$/,
    componentDir: 'tag',
  },
  {
    pattern: /^TabPane$/,
    componentDir: 'tabs',
  },
  {
    pattern: /^TimelineItem$/,
    componentDir: 'timeline',
  },
  {
    pattern: /^(TypographyParagraph|TypographyTitle|TypographyText)$/,
    componentDir: 'typography',
  },
]

function getComponentStyleDir(
  theme = '@arco-design/web-vue',
  importName: string,
  importStyle: boolean | 'css' | 'less'
) {
  if (['ConfigProvider', 'Icon'].includes(importName)) return

  let componentDir = kebabCase(importName)
  for (const item of matchComponents) {
    if (item.pattern.test(importName)) {
      componentDir = item.componentDir
      break
    }
  }
  if (importStyle === 'less') return `${theme}/es/${componentDir}/style/index.js`
  if (importStyle === 'css' || importStyle) return `${theme}/es/${componentDir}/style/css.js`
}

/**
 * 按需导入arco-design/web-vue 的样式
 * 改写自 https://github.com/antfu/unplugin-vue-components/blob/main/src/core/resolvers/arco.ts
 */
export const arcoUnplugin = (nuxtoption: NuxtOptions, vrxArco: VrxArcoOption) => {
  componentStyle(
    nuxtoption,
    {
      name: 'vrx-arco:nuxt',
      component(name) {
        const styles: string[] = []
        if (name.match(/^A[A-Z]/)) {
          const importStyle = vrxArco.importStyle || 'css'

          const importName = name.slice(1)

          const style = getComponentStyleDir(vrxArco.theme, importName, importStyle)
          style && styles.push(style)
        }
        return styles
      },
      ...vrxArco.importStyleDir,
    },
    vrxArco.importStylePlugin
  )
}
