<template>
  <v-snackbar v-model="snackbar" :timeout="timeout" elevation="24" class="mb-10" :color="color">
    <v-alert :type="color" class="mb-n1" dense>
      {{ text }}
    </v-alert>
    <template v-slot:action="{ attrs }">
      <v-btn color="black" text icon v-bind="attrs" @click="snackbar = false">
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { EventBus } from '../../utils/eventBus'

export default {
  name: 'SnackBar',
  data() {
    return {
      snackbar: false,
      text: 'My timeout is set to 5000.',
      color: 'success',
      timeout: 3000
    }
  },
  mounted() {
    EventBus.$on('SNACK_BAR', this.setSnackBar)
  },
  methods: {
    setSnackBar(data) {
      this.color = data.color
      this.text = data.text
      this.snackbar = true
    }
  }
}
</script>

<style>

</style>
