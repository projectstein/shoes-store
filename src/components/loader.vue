<template>
  <v-flex xs12 pa-3>
    <div class="text-xs-center">
      <v-progress-circular
        v-if="loading"
        :size="size"
        :color="color"
        indeterminate
      />
    </div>
  </v-flex>
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
