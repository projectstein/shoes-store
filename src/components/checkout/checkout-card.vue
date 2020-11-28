<template>
  <v-card rounded="lg" color="#F7F7F7" min-height="650">
    <v-card-text class="py-0">
      <v-container>
        <v-row>
          <v-col class="black--text cart-description pl-10" cols="6">
            <p>Cart total</p>
            <p class="subtitle ma-0">{{ selectedCard.description }}</p>
            <p class="content ma-0">
              {{
                `x ${selectedCard.quantity} ${selectedCard.color} Size ${selectedCard.size}`
              }}
            </p>
            <p class="content ma-0">
              {{ `Item #${selectedCard.id}` }}
            </p>
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
                <p class="cost">{{ `$${selectedCard.totalCost}` }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-item-group :value="0" @change="setPayment">
        <v-container class="pa-0 px-10">
          <v-row>
            <v-col class="payment-title" cols="12"
              >Select your payment method</v-col
            >

            <v-col
              v-for="(payment, index) in paymentList"
              :key="index"
              class="pb-0"
              cols="12"
            >
              <v-item v-slot="{ active, toggle }">
                <checkout-payment
                  :active="active"
                  @click="toggle"
                  :payment="payment"
                />
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
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
              :disabled="!payment"
              v-text="labelButton"
              @click="$emit('go-review-and-confirmation', payment)"
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
      labelButton: 'Continue',
      paymentList: [
        {
          title: 'Online Banking',
          src: 'bannerOnlineBank.svg',
          badget: true,
          description: 'onlineBanking'
        },
        {
          title: 'Card payment',
          src: 'cardPayment.svg',
          badget: false,
          description: 'cardPayment'
        },
        {
          title: 'Apple Pay',
          src: 'applePay.svg',
          badget: false,
          description: 'applePay'
        }
      ],
      payment: null
    }
  },
  computed: {
    ...mapState(['selectedCard'])
  },
  mounted() {
    this.setPayment(0)
  },
  methods: {
    setPayment(value) {
      this.payment = this.paymentList[value]
    }
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
