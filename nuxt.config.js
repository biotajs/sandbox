import path from "path";
import MonacoEditorPlugin from "monaco-editor-webpack-plugin";

export default {
  mode: "universal",
  dev: process.env.NODE_ENV !== "production",
  generate: {
    dir: "dist"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Biota's sandbox",
    description: "hosted test environment for biota",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description"
      }
    ],
    link: [{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/css/tailwind.css", "vue-resize/dist/vue-resize.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~plugins/json-pretty",
      ssr: false
    },
    {
      src: "~plugins/resize",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-167990472-2"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxt-purgecss",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  purgeCSS: {
    mode: "postcss",
    enabled: process.env.NODE_ENV === "production"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      },
      plugins: [
        require('postcss-import'),
        require("tailwindcss")(path.resolve(__dirname, "./tailwind.config.js")),
        require('autoprefixer'),
      ]
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    plugins: [
      new MonacoEditorPlugin({
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        // Include a subset of languages support
        // Some language extensions like typescript are so huge that may impact build performance
        // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
        // Languages are loaded on demand at runtime
        languages: ["json", "javascript", "css", "html", "typescript"]
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
