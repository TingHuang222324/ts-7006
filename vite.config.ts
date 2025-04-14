import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import AntdvResolver from 'antdv-component-resolver'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  vueJsx(),
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core',
       ],
    dts: 'types/auto-imports.d.ts',
    dirs: [ 'src/composables'],
  }),
   Components({
    resolvers: [AntdvResolver()],
    dts: 'types/components.d.ts',
    dirs: ['src/components'],
  })
  ],
  resolve: {
    alias: [
      {
        find: /^ant-design-vue\/es$/,
        replacement: 'ant-design-vue/es',
      },
      {
        find: /^ant-design-vue\/dist$/,
        replacement: 'ant-design-vue/dist',
      },
      {
        find: /^ant-design-vue\/lib$/,
        replacement: 'ant-design-vue/es',
      },
      {
        find: /^ant-design-vue$/,
        replacement: 'ant-design-vue/es',
      }
    ]
  }

})
