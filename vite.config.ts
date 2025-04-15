import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
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
    resolvers:[AntDesignVueResolver()],
  }),
   Components({
    resolvers: [AntDesignVueResolver({
      importStyle: false, // css in js
      resolveIcons: true,
    }),],
    dts: 'types/components.d.ts',
    dirs: ['src/components'],
  })
  ],
  resolve: {
  },

})
