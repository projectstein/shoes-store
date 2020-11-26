<template>
  <div class="checkout">
    <header-checkout :title="title" :url-avatar="urlAvatar" />
    <v-card class="elevation-0" color="#FFFFFF">
      <v-card-text class="pb-0"> </v-card-text>
    </v-card>
  </div>
</template>

<script>
import HeaderCheckout from './checkout-header'
import { mapState } from 'vuex'

export default {
  name: 'checkout',
  components: {
    HeaderCheckout
  },
  data() {
    return {
      title: 'Checkout',
      urlAvatar: 'https://tinyurl.com/y2gkmq6s'
    }
  },
  computed: {
    ...mapState(['selectedCard'])
  }
}
</script>

<style lang="scss" scoped></style>
