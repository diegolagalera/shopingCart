<template>
  <v-container fluid class="mt-4">
    <v-row>
      <v-col cols="9">
        <div class="cardEffect">
          <table-products></table-products>
        </div>
      </v-col>
      <v-col cols="3">
        <div class="cart">
          <cart-products></cart-products>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import tableProducts from "@/components/products/tableProducts.vue";
import CartProducts from "@/components/products/cartProducts.vue";

export default {
  components: { tableProducts, CartProducts },
  name: "ShopingCart",

};
</script>
<style>
.cardEffect {
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0, 1) rgba(255, 255, 255, 0, 1));
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgb(0, 0, 0, 0.36);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 45px;
}

.cart {
  background: linear-gradient(360deg, #070606, #369c8b);
  box-shadow: 0 18px 32px 0 rgba(5, 100, 84, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 45px;
}
</style>
