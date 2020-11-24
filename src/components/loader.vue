<template>
  <v-row>
    <v-col class="text-xl-center text-lg-center text-xs-center" cols="12" pa-3>
      <v-progress-circular
        v-if="loading"
        :size="size"
        :color="color"
        indeterminate
      />
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 30
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
