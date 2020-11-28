<template>
  <div class="checkout">
    <checkout-header
      :title="title"
      :url-avatar="urlAvatar"
      @get-back="getBack()"
    />
    <v-card class="elevation-0" color="#FFFFFF">
      <v-card-text class="pb-0">
        <stepper :step="2" />
      </v-card-text>
      <v-card-text class="pb-0">
        <v-container class="">
          <v-row>
            <v-col class="d-none d-xl-block" cols="1">
              <v-spacer></v-spacer>
            </v-col>
            <v-col cols="4" xl="4" lg="5">
              <v-card rounded="lg" elevation="0">
                <v-img
                  width="600"
                  height="650"
                  :src="selectedCard.maxresURL"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6" xl="6" lg="7">
              <checkout-card />
            </v-col>
            <v-col class="d-none d-xl-block" cols="1">
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CheckoutHeader from './checkout-header'
import Stepper from './checkout-steppers.vue'
import { mapState } from 'vuex'
import CheckoutCard from './checkout-card.vue'

export default {
  name: 'checkout',
  components: {
    CheckoutHeader,
    Stepper,
    CheckoutCard
  },
  data() {
    return {
      title: 'Checkout',
      urlAvatar: 'https://tinyurl.com/y2gkmq6s'
    }
  },
  computed: {
    ...mapState(['selectedCard'])
  },
  methods: {
    getBack() {
      this.$router.push({ name: 'Sneakers' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
