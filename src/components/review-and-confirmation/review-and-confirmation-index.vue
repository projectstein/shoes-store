<template>
  <div class="checkout">
    <review-and-confirmation-header
      :title="title"
      :url-avatar="urlAvatar"
      @get-back="getBack()"
    />
    <v-card class="elevation-0" color="#FFFFFF">
      <v-card-text class="pb-0">
        <stepper :step="3" />
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
                  height="630"
                  :src="selectedCard.maxresURL"
                ></v-img>
              </v-card>
            </v-col>
            <v-col cols="6" xl="6" lg="7">
              <review-and-confirmation-card />
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
import ReviewAndConfirmationHeader from './review-and-confirmation-header'
import Stepper from '../steppers.vue'
import { mapState } from 'vuex'
import ReviewAndConfirmationCard from './review-and-confirmation-card'

export default {
  name: 'checkout',
  components: {
    ReviewAndConfirmationHeader,
    Stepper,
    ReviewAndConfirmationCard
  },
  data() {
    return {
      title: 'Review and Confirmation',
      urlAvatar: 'https://tinyurl.com/y2gkmq6s'
    }
  },
  computed: {
    ...mapState(['selectedCard'])
  },
  methods: {
    getBack() {
      this.$router.push({ name: 'Checkout' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
