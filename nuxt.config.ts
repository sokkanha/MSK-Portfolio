// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  alias: {
    "@": resolve(__dirname, ".")
  },
  app: {
    head: {
      link:[
        {rel:'icon',type:'image/png' ,href: 'https://sourceai.dev/img/logo/logo-sm.png'}
      ]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: [
    "~/assets/main.css"
  ],
})


