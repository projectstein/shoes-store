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
              <checkout-card
                @go-review-and-confirmation="goReviewAndConfirmation"
              />
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
import Stepper from '../steppers'
import { mapActions, mapState } from 'vuex'
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
    ...mapActions(['SET_SELECTED_PAYMENT']),
    getBack() {
      this.$router.push({ name: 'Sneakers' })
    },
    goReviewAndConfirmation(payment) {
      this.SET_SELECTED_PAYMENT(payment)
      if (payment.description !== 'onlineBanking') {
        this.$router.push({ name: 'ReviewAndConfirmation' })
      } else {
        this.integration()
      }
    },
    integration() {
      const PayWithMyBank = window.PayWithMyBank
      PayWithMyBank.addPanelListener(function(command, event) {
        if (command === 'event' && event.type === 'new_location') {
          if (event.data.indexOf('#success') === 0) {
            alert('success!')
            this.$router.push({ name: 'ReviewAndConfirmation' })
          } else {
            alert('cancel!')
            this.$router.push({ name: 'Checkout' })
          }
          return false
        }
      })
      PayWithMyBank.establish({
        accessId: 'D61EC9BAF0BB369B9438',
        merchantId: this.selectedCard.id,
        metadata: { demo: 'enabled' },
        currency: 'USD',
        paymentType: 'Deferred',
        amount: this.selectedCard.totalCost,
        description: 'projectstein@gmail.com',
        merchantReference: 'a3e54d0b-af71-40b6-a98d-c8a10d485e29',
        returnUrl: '#success',
        cancelUrl: 'localhost:8080/checkout'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
