; import { fileURLToPath, URL } from 'node:url';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['ep'] // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
        }),
      ],
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ["src/components"],
      directoryAsNamespace: true,
      resolvers: [
        ElementPlusResolver(),
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    css: {
			preprocessorOptions: {
				less: {
					additionalData: `@import "@/styles/var.less";`
				}
			}
		},
  }
})
