// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  fonts: {
    defaults: {
      weights: [300, 400, 700],
      subsets: ['latin']
    },
    families: [
      { name: 'Inter', provider: 'google' }
    ]
  },
  image: {
    format: ['webp'],
    domains: [
      'vm-images-test.global.ssl.fastly.net',
      'jj-images-test.global.ssl.fastly.net',
      'jx-images-test.global.ssl.fastly.net'
    ],
    presets: {
      thumbnail: {
        modifiers: {
          fit: 'contain',
          format: 'webp',
          width: 300,
          height: 400
        }
      },
      carouselLarge: {
        modifiers: {
          fit: 'contain',
          format: 'webp',
          width: 450,
          height: 600
        }
      },
      carouselThumbnail: {
        modifiers: {
          fit: 'contain',
          format: 'webp',
          width: 75,
          height: 100
        }
      }
    }    
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'esnext',
        target: 'es2017'
      }
    }
  }  
})