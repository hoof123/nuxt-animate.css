import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@jpcreativemedia/nuxt-animate.css',
    configKey: 'animatecss',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: true
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addComponent({
        name: 'Animate',
        filePath: resolve(runtimeDir, 'components/animate.css', 'animate.vue')
      })
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
