<template>
    <div>
        <v-row>
            <v-col cols="12" class="text-center">
                <text-animation :text="$t('CART')"></text-animation>
            </v-col>
            <v-col cols="12" class="text-center mt-n4 mb-n4">
                <h4>
                    {{ items.length }} {{ $t('PRODUCTS') }}
                </h4>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span v-for="item in items" :key="item.id">
                    <show-product :item="item" class="mt-2" @delete="deleteItem(item)" @remove="removeItem(item)"
                        @add="addItem(item)"></show-product>
                </span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="cartCheckout">
                    <div>
                        <v-row>
                            <v-col cols="6">
                                {{ $t('SUBTOTAL') }}
                            </v-col>
                            <v-col cols="6" class="text-right">
                                {{ subtotal }}€
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                {{ $t('TOTAL') }}
                            </v-col>
                            <v-col cols="6" class="text-right">
                                {{ subtotal }}€
                            </v-col>
                            <v-col cols="12" class="mt-n5">
                                <h6>
                                    {{ $t('IVA') }}
                                </h6>
                            </v-col>
                        </v-row>
                    </div>
                    <v-row>
                        <v-col cols="12" class="text-center mt-4">
                            <button-animation @click="checkout()" :text="$t('CHECKOUT')"></button-animation>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import ButtonAnimation from '../buttons/buttonAnimation.vue'
import textAnimation from '../textComponents/textAnimation.vue'
import ShowProduct from './showProduct.vue'
export default {
    components: { textAnimation, ShowProduct, ButtonAnimation },
    name: 'cartProducts',
    computed: {
        items() {
            return this.$store.state.cart
        },
        subtotal() {
            let result = 0
            this.$store.state.cart.forEach(element => {
                result = result + (element.price * element.numberToBuy)
            });

            return result
        }
    },
    methods: {
        deleteItem(item) {
            let index = this.$store.state.cart.indexOf(item)
            this.$store.dispatch('deleteItemFromCartAction', index)
        },
        removeItem(item) {
            this.$store.dispatch('removeItemFromCartAction', item)
        },
        addItem(item) {
            this.$store.dispatch('incrementNumberItemAction', item)
        },
        checkout() {
            if (this.$store.state.cart.length === 0) return this.$utils.setSnackBar("no_products");
            else {
                this.$utils.setSnackBar("shop_succes");
                this.$store.dispatch('cleanCartAction')
            }
        }
    }
}
</script>

<style>
.cartCheckout {
    background: grey;
    box-shadow: 0 18px 32px 0 rgba(168, 160, 160, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    bottom: 10%;
    left: 5%;
    right: 5%;
    padding: 45px;
}
</style>