export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fitz Brothers (official) | Surrender to the music',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'Andreas K. Hahn' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Band, fitz, FITZ, F-I-T-Z, FITZ!, Austrian Band, Fitz Brothers' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is the official Fitz Brothers website. Surrender to the music.'
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        innerHTML: `window.sib_prefix='sib';  window.sib_dateformat = 'dd-mm-yyyy'`, // needed for SendInBlue script init
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '~/assets/styles/main.scss', lang: 'scss' },
    '~/assets/styles/sendInBlue.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/reveal', ssr: false },
    { src: '~/plugins/lazyload', ssr: false },
    { src: '~/plugins/scrollto', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'nuxt-facebook-pixel-module',
  ],
  /**
   * Facebook Pixel config
   */
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1060878250708992',
    disabled: true
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';
      config.module.rules.push({
                                 test: /\.(ogg|mp3|wav|mpe?g)$/i,
                                 loader: 'file-loader',
                                 options: {
                                   name: '[path][name].[ext]'
                                 }
                               });
    }
  }
};
