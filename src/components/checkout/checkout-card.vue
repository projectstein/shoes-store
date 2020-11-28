<template>
  <v-card rounded="lg" color="#F7F7F7" min-height="650">
    <v-card-text class="py-0">
      <v-container>
        <v-row>
          <v-col class="black--text cart-description pl-10" cols="6">
            <p>Cart total</p>
            <p class="subtitle ma-0">SS Sneaker</p>
            <p class="content ma-0">x 1 Green Size 41</p>
            <p class="content ma-0">Item #2839u512401</p>
          </v-col>
          <v-col class="black--text delivery-description pl-10" cols="6">
            <p>Delivery details</p>
            <p class="content ma-0">John Smith</p>
            <p class="content ma-0">Phone no: 01312428200</p>
            <p class="content ma-0">Address: Redwood City, 2000.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-text class="py-0">
      <v-container class="pa-0">
        <v-row>
          <v-col class="pl-3" cols="6">
            <v-spacer></v-spacer>
          </v-col>
          <v-col class="black--text total-cost pl-10" cols="6">
            <v-row>
              <v-col cols="5">
                <p class="ma-0 mb-3">Total cost</p>
                <p class="content ma-0">Delivery included</p>
              </v-col>
              <v-col>
                <p class="cost">$100</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="pa-0 px-10">
        <v-row>
          <v-col class="payment-title" cols="12"
            >Select your payment method</v-col
          >
          <v-col class="pb-0" cols="12">
            <checkout-payment />
          </v-col>
          <v-col class="pb-0" cols="12">
            <checkout-payment />
          </v-col>
          <v-col class="pb-0" cols="12">
            <checkout-payment />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container class="pb-0 px-10">
        <v-row>
          <v-col cols="6">
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="6">
            <v-btn
              class="white--text text-capitalize"
              color="#6B8067"
              v-text="labelButton"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import checkoutPayment from './checkout-payment.vue'

export default {
  components: { checkoutPayment },
  data() {
    return {
      labelButton: 'Continue'
    }
  },
  computed: {
    ...mapState(['selectedCard'])
  }
}
</script>

<style lang="scss" scoped>
.cart-description {
  font-family: 'Open Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0px;
  text-align: left;
  .subtitle {
    font-size: 16px;
    line-height: 19px;
  }
  .content {
    font-size: 16px;
    color: #a5a5a5;
    line-height: 25px;
  }
}

.delivery-description {
  font-family: 'Open Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  .content {
    font-size: 16px;
    color: #979797;
    line-height: 24px;
  }
}

.total-cost {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  .content {
    color: #a5a5a5;
    line-height: 19px;
  }
  .cost {
    font-size: 44px;
    line-height: 44px;
    text-align: left;
  }
}

.payment-title {
  font-family: 'Open Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}

button {
  width: 100%;
}
</style>
