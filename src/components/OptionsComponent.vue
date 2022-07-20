<template>
  <div :style="{ background: background }" class="option">
    <input :id="'value' + index" :name="question" :value="value" type="radio" />
    <label :for="'value' + index">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "Batman",
    },
    background: {
      default: "#6767ff65",
      type: String,
    },
    index: {
      default: 0,
      type: Number,
    },
    question: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.option {
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  p {
    margin-top: 17px;
    margin-left: 10px;
  }
}
</style>
