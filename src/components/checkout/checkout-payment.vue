<template>
  <div>
    <v-card
      color="#FFFFFF"
      flat
      class="d-flex align-center"
      tile
      height="60"
      rounded="lg"
    >
      <v-card-text>
        <v-container class="pa-0">
          <v-row class="align-center">
            <v-col cols="7">
              <p class="inline-label ma-0">Online Banking</p>
            </v-col>
            <v-col cols="5">
              <v-img
                height="28"
                src="../../assets/bannerOnlineBank.svg"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {}
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
</style>
