import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    cart: []
  },
  getters: {
    getCart (state) {
      return state.cart
    },
  },
  mutations: {
    incrementCart (state, item) {
      state.cart.push(item)
    },
    incrementNumberItem (state, item) {
      state.cart.forEach(products=>{
        if(products.id == item.id){
          products.numberToBuy = products.numberToBuy+1
        }
      })   
      state.cart = [...state.cart] 
    },
    deleteItemFromCart (state, index) {
      state.cart.splice(index,1)
    },
    removeItemFromCart (state, item) {
      state.cart.forEach(products=>{
        if(products.id == item.id){
          products.numberToBuy = products.numberToBuy-1
        }
      })   
      state.cart = [...state.cart] 
    },
    cleanCart (state) {
      state.cart = []
    }
  },
  actions: {
    incrementCartAction (context, item) {
      item.numberToBuy = item.numberToBuy+1
      context.commit( 'incrementCart', item)
    },
    incrementNumberItemAction (context, item) {
      context.commit( 'incrementNumberItem', item)
    },
    deleteItemFromCartAction(context, itemIndex){
      context.commit( 'deleteItemFromCart', itemIndex)
    },
    removeItemFromCartAction(context, item){
      context.commit( 'removeItemFromCart', item)
    },
    cleanCartAction(context){
      context.commit( 'cleanCart')
    }
  },
  modules: {
  }
})
