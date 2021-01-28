import { createI18n } from 'vue-i18n'
import cnMsg from './locale.cn'
import enMsg from './locale.en'

const messages = {
  cn: cnMsg,
  en: enMsg,
}

const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  fallbackLocale: 'en',
  messages
})

export default i18n
