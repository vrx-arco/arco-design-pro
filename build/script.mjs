#!/usr/bin/env zx

import { cd, $ } from 'zx'

cd('packages')

cd('css-render')

await $`pnpm run build`

cd('../')

cd('icon')

await $`pnpm run build`

cd('../')

cd('use')

await $`pnpm run build`

cd('../')

cd('pro-layout')

await $`pnpm run build`

cd('../')

cd('pro-components')

await $`pnpm run build`

cd('../')

cd('app')

await $`pnpm run build`
