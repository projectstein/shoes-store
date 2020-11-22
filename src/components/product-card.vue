<template>
  <v-card class="mx-xl-16 mx-lg-14">
    <v-img
      :src="card.thumbnailURL"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
    </v-img>
    <v-card-text class="pa-0">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            class="text-lg-center headline font-weight-regular black--text py-0"
            ><span>{{ card.description }}</span></v-col
          >
          <v-col cols="12" class="pa-0">
            <v-container class="py-0">
              <v-row>
                <v-col>
                  <label>{{ labelSize }}</label>
                  <v-select
                    class="drop-down"
                    dense
                    outlined
                    v-model="size"
                    :items="sizeList"
                  ></v-select
                ></v-col>

                <v-col>
                  <label>{{ labelQuantity }}</label>
                  <v-select
                    class="drop-down"
                    dense
                    outlined
                    v-model="quantity"
                    :items="quantityList"
                  ></v-select
                ></v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col
            cols="12"
            class="text-lg-center headline font-weight-regular black--text py-0"
          >
            <span>{{ `$ ${card.price}` }}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions class="pt-0">
      <v-btn
        class="white--text text-capitalize"
        color="#6B8067"
        v-text="labelButton"
        @click="$emit('addCart', card)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardStore',
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      labelButton: 'Add to cart',
      sizeList: [],
      quantityList: [],
      labelSize: 'Size',
      labelQuantity: 'Quantity',
      size: 41,
      quantity: 1
    }
  },
  created() {
    this.setSizeList()
    this.setQuantityList()
  },
  methods: {
    setSizeList() {
      let list = []
      for (let i = 33; i <= 46; i++) {
        list.push(i)
      }
      this.sizeList = list
    },
    setQuantityList() {
      let list = []
      for (let i = 1; i <= 10; i++) {
        list.push(i)
      }
      this.quantityList = list
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 41.77px;
}
.drop-down {
  border-radius: 25px;
}
</style>
