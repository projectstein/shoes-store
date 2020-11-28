<template>
  <div>
    <v-card
      color="#FFFFFF"
      flat
      class="d-flex align-center"
      :class="{ 'border-active': active }"
      tile
      height="60"
      rounded="lg"
      @click="$emit('click')"
    >
      <v-card-text>
        <v-container class="pa-0">
          <v-row class="align-center">
            <v-col cols="6">
              <p class="inline-label ma-0">{{ payment.title }}</p>
            </v-col>
            <v-col cols="6">
              <v-img
                :class="[payment.badget ? 'svg-banner' : 'svg-size']"
                :src="require(`../../assets/${payment.src}`)"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    payment: {
      type: Object,
      default: () => {}
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.inline-label {
  font-family: 'Open Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  color: #535353;
}
.border-active {
  border: 1px solid #5dac50 !important;
  border-radius: 10px !important;
}
.svg-size {
  width: 100px;
  max-height: 35px;
  margin-left: auto;
}

.svg-banner {
  max-width: 200px;
  margin-left: auto;
}
</style>
