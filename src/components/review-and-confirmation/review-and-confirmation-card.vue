<template>
  <v-card class="pt-16" rounded="lg" color="#F7F7F7" min-height="630">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="black--text order-description pl-10" cols="6">
            <p>Order summary</p>
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
          <v-col class="black--text payment-description pl-10 pt-0" cols="6">
            <v-row>
              <v-col class="pb-0" cols="12"><p>Payment Method</p></v-col>
              <v-col class="pt-0" cols="2">
                <v-img
                  height="47"
                  width="47"
                  src="../../assets/green-bank-icon.svg"
                ></v-img>
              </v-col>
              <v-col cols="6"
                ><p>{{ selectedPayment.title }}</p></v-col
              >
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-text>
      <v-container class="pa-0">
        <v-row>
          <v-col class="black--text total-cost pl-13" cols="6">
            <v-row>
              <v-col cols="5">
                <p class="ma-0 pb-3">Total cost</p>
                <p class="content ma-0">Delivery included</p>
              </v-col>
              <v-col>
                <p class="cost">{{ `$${selectedCard.totalCost}` }}</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="px-10 pt-7" cols="6">
            <v-btn
              class="white--text text-capitalize"
              color="#6B8067"
              v-text="labelButton"
            ></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      labelButton: 'Place order'
    }
  },
  computed: {
    ...mapState(['selectedCard', 'selectedPayment'])
  }
}
</script>

<style lang="scss" scoped>
.order-description {
  font-family: 'Open Sans';
  font-size: 20px;
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

.payment-description {
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
