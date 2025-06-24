import en from './en'
import vi from './vi'

import { SESSION_STORAGE_KEY } from '@/constants'
import { getSessionStorage } from '@/utils/storage'

const savedLang = getSessionStorage(SESSION_STORAGE_KEY.lang)
const initialLocale = savedLang || 'en'

document.documentElement.setAttribute('lang', initialLocale)

export default {
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
}
