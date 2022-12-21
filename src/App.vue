<template>
  <v-app>
    <v-app-bar app color="grey" dark class="appbar" elevation="16">
      <div class="d-flex align-center">
        <h1>{{ title }}</h1>
      </div>
      <v-spacer></v-spacer>
      <v-btn href="#" text>
        <span class="mr-2">{{ $t('HOME') }}</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="mainbody">
      <router-view />
    </v-main>
    <snack-bar></snack-bar>
  </v-app>
</template>

<script>
import SnackBar from './components/snackBar/snackBar.vue';

export default {
  components: { SnackBar },
  name: 'App',

  data: () => ({
    title: 'shoping cart'
  }),
};
</script>

<style>
.mainbody {
  background-color: rgb(207, 201, 201);
}
.appbar {
  background-image: url(https://wallpaperaccess.com/full/1567665.png);
  background-size: cover;
}
</style>
