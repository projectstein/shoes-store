<template>
  <div class="stepper-horizontal" id="stepper1">
    <div class="step" :class="{ editing: step === 1 || step > 1 }">
      <div class="step-circle"></div>
      <div class="step-title">Cart</div>
      <div class="step-bar-left"></div>
      <div class="step-bar-right"></div>
    </div>
    <div class="step" :class="{ editing: step === 2 || step > 2 }">
      <div class="step-circle"></div>
      <div class="step-title">Payment options</div>
      <div class="step-bar-left"></div>
      <div class="step-bar-right"></div>
    </div>
    <div class="step" :class="{ editing: step === 3 }">
      <div class="step-circle"></div>
      <div class="step-title">Receipt</div>
      <div class="step-bar-left"></div>
      <div class="step-bar-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
$fill-color: #61cb46;
$border-color: #e8e8e8;
$text-color: #000000;
$text-color-inactive: #bebebe;

.stepper-horizontal {
  display: table;
  width: 90%;
  margin: 0 auto;
  .step {
    display: table-cell;
    position: relative;
    padding: 2rem;
    z-index: 2;
    width: 25%;
    &:last-child .step-bar-left,
    &:last-child .step-bar-right {
      display: none;
    }
    .step-circle {
      width: 1rem;
      height: 1rem;
      margin: 0 auto;
      border-radius: 50%;
      text-align: center;
      line-height: 1.75rem;
      font-size: 16px;
      font-weight: 400;
      z-index: 2;
      background: #e8e8e8;
    }
    &.editing {
      .step-circle {
        background: #61cb46;
      }
      .step-title {
        color: $text-color;
      }
    }
    .step-title {
      margin-top: 1rem;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      color: $text-color-inactive;
    }
    .step-bar-left,
    .step-bar-right {
      position: absolute;
      top: calc(2rem + 8px);
      height: 0.5px;
      background-color: $border-color;
      border: solid $border-color;
      border-width: 1px 0;
    }
    .step-bar-left {
      width: calc(100% - 2rem);
      left: 50%;
      margin-left: 1rem;
      z-index: -1;
    }
    .step-bar-right {
      width: 0;
      left: 50%;
      margin-left: 1rem;
      z-index: -1;
    }
  }
}
</style>
