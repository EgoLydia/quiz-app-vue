<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/quiz">Quiz</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  box-sizing: border-box;
  height: 70px;
  width: 100%;
}

ul {
  display: flex;
  list-style: none;
  padding: 10px;
  li {
    margin-left: 10px;
  }
}
</style>
