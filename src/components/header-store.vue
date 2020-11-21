<template>
  <div class="top">
    <v-container>
      <v-row>
        <v-col cols="4"><v-spacer></v-spacer></v-col>
        <v-col cols="4" class="text-lg-center"
          ><span class="top__title">{{ title }}</span></v-col
        >
        <v-col cols="4" class="text-lg-right">
          <v-avatar size="35">
            <img :src="urlAvatar" />
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
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
