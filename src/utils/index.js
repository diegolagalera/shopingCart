import { EventBus } from './eventBus'
import i18n from '@/plugins/i18n'
export default {
  setSnackBar (action, ms = '', col = '') {
    let t = ''
    let c = ''
    switch (action) {
      case 'shop_succes':
        t = ms !== '' ? ms : i18n.messages.es.API.SUCCESS_SHOP
        c = col !== '' ? col : 'success'
        break
      case 'no_products':
        t = ms !== '' ? ms : i18n.messages.es.API.NO_PRODUCTS
        c = col !== '' ? col : 'warning'
      break
      case 'shop_error':
        t = ms !== '' ? ms : i18n.messages.es.API.ERROR_SHOP
        c = col !== '' ? col : 'error'
        break
      default:
        t = ms !== '' ? ms : i18n.messages.es.API.SUCCESS_SHOP
        c = col !== '' ? col : 'success'
        break
    }
    EventBus.$emit('SNACK_BAR', { text: t, color: c })
  },
  copy (object) {
    return JSON.parse(JSON.stringify(object))
  }
}
