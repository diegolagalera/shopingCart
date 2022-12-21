import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '@/i18n/en.js'
import esLocale from '@/i18n/es.js'

Vue.use(VueI18n)
export default new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es: esLocale,
    en: enLocale
  }
})

