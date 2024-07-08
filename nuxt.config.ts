export default defineNuxtConfig({
    app: {
        head: {
            title: 'Fitz Brothers (official) | Surrender to the music',
            meta: [
                { name: 'author', content: 'Andreas K. Hahn' },
                {
                    name: 'keywords',
                    content:
                        'Band, fitz, FITZ, F-I-T-Z, FITZ!, Austrian Band, Fitz Brothers'
                },
                {
                    name: 'description',
                    content:
                        'This is the official Fitz Brothers website. Surrender to the music.'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: '/js/pixel.js',
                    // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
                    tagPosition: 'head'
                },
                {
                    innerHTML:
                        "window.sib_prefix='sib';  window.sib_dateformat = 'dd-mm-yyyy'"
                }
                // needed for SendInBlue script init
            ],
            noscript: [
                {
                    innerHTML: `<img height="1" width="1" style="display:none" 
     src="https://www.facebook.com/tr?id=1060878250708992&ev=PageView&noscript=1"/>`,
                    tagPosition: 'bodyClose'
                }
            ]
        }
    },

    /*
     ** Global CSS
     */
    css: ['~/assets/styles/main.scss', '~/assets/styles/sendInBlue.css'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~/plugins/reveal' }],

    /*
     ** Nuxt.js modules
     */
    modules: [],

    devServerHandlers: [],

    devtools: { enabled: false },

    /*
     ** Build configuration
     */
    build: {},

    compatibilityDate: '2024-07-08'
})
