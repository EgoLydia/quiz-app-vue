<template>
  <div>
    <h1>Your score is {{ userscore }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    userscore() {
      return this.$route.params.userscore;
    },
  },
};
</script>

<style></style>
