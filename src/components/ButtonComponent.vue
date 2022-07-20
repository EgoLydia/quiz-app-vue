<template>
  <div>
    <button
      class="btn"
      @click="changeColor"
      :style="{ backgroundColor: buttonStyle }"
    >
      {{ value }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    value: {
      default: "Submit",
      type: String,
    },
    style: {
      type: String,
    },
  },
  computed: {
    buttonStyle() {
      if (this.style === "Primary") {
        return "#0069d9";
      } else if (this.style === "Danger") {
        return "#c82333";
      } else if (this.style === "Success") {
        return "#218838";
      } else {
        return "#5a6268";
      }
    },
  },
  methods: {
    changeColor() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  padding: 7px 20px;
}
</style>
