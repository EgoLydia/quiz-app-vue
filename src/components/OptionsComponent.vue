<template>
  <div class="option">
    <input type="radio" />
    <label for="">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "Batman",
    },
  },
};
</script>

<style lang="scss">
.option {
  display: flex;
}
</style>
