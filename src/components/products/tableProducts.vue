<!-- eslint-disable vue/valid-v-slot -->
<template>
    <div>
        <v-row class="px-4">
            <v-col>
                <v-text-field v-model="search" append-icon="mdi-magnify" :label="$t('SEARCH')" outlined></v-text-field>
            </v-col>
        </v-row>
        <v-data-table :loading="loading" :headers="headers" :items="products" :search="search" class="cardEffect">
            <template v-slot:item.title="{ item }">
                <div>
                    <u>{{ item.title }} </u>
                </div>
            </template>
            <template v-slot:item.price="{ item }">
                <div>
                    <v-row>
                        <v-col cols="12">
                            <h2>
                                <b>{{ item.price }} €</b>
                            </h2>
                        </v-col>
                        <v-col cols="12" class="mt-n6">
                            <h5>
                                <span> {{ item.price }} € {{ $t("DELIVERY_INCLUDED") }} </span>
                            </h5>
                        </v-col>
                    </v-row>
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <div class="py-4">
                    <v-btn elevation="5" color="#80CBC4" @click="addCart(item)">
                        {{ $t("ADD") }}
                        <v-icon right dark> mdi-cart-variant </v-icon>
                    </v-btn>
                </div>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: "tableProducts",

    data() {
        return {
            search: "",
            loading: false,
            products: [],
            headers: [
                { text: this.$t("HEADERS.OFFER_NAME"), value: "title" },
                { text: this.$t("HEADERS.PRICE_AND_SHIPPING_COST"), value: "price" },
                { text: this.$t("HEADERS.DELIVERY_DATE"), value: "deliveryDate" },
                { text: this.$t("HEADERS.ACTIONS"), value: "actions" },
            ],
            delivery_date: [
                this.$t("DATE_VALUE_DELIVERY.DAY"),
                this.$t("DATE_VALUE_DELIVERY.HOUR"),
                this.$t("DATE_VALUE_DELIVERY.EXPRESS"),
            ],
        };
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            this.loading = true
            this.axios
                .get("https://dummyjson.com/products")
                .then((response) => {
                    this.products = response.data.products;
                    this.addDateDelivery();
                })
                .catch((e) => {
                    this.$utils.setSnackBar("shop_error", e);
                }).finally(() => {
                    this.loading = false
                });
        },
        addDateDelivery() {
            this.products.forEach((element) => {
                const random = Math.floor(Math.random() * this.delivery_date.length);
                element["deliveryDate"] = this.delivery_date[random];
                element["numberToBuy"] = 0;
            });
        },
        addCart(item) {
            //esto es por que copia la direccion en memoria donde esta la variable lo que es paso por valor o referencia 
            let itemAux = this.$utils.copy(item)
            if (!this.productIsInCart(itemAux.id)) {
                this.$store.dispatch('incrementCartAction', itemAux)
            } else {
                this.$store.dispatch('incrementNumberItemAction', itemAux)
            }

        },
        productIsInCart(id) {
            return this.$store.state.cart.find(item => item.id === id)
        }

    },
};
</script>

<style>

</style>