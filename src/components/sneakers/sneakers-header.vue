<template>
  <div class="top">
    <div>
      <v-row class="py-3">
        <v-col cols="4"><v-spacer></v-spacer></v-col>
        <v-col cols="4" class="text-lg-center"
          ><span class="top__title">{{ title }}</span></v-col
        >
        <v-col cols="4" class="text-right pr-16">
          <v-avatar size="35">
            <img :src="urlAvatar" />
          </v-avatar>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    urlAvatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background-color: #f1f1f1;
  overflow: hidden;
  height: 87px;
  &__title {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 26.1038px;
    line-height: 30px;
    text-align: center;

    color: #000000;
  }
}
</style>
