<!-- src/components/NavBar.vue -->
<template>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link v-if="!isLoggedIn" to="/login">登录</router-link>
    <router-link v-if="!isLoggedIn" to="/register">注册</router-link>
    <router-link to="/cbct-analysis">CBCT分析</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
  computed: {
    isLoggedIn() {
      return localStorage.getItem("isLoggedIn") === "true";
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed; /* 固定定位 */
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: #e3fad5;
  z-index: 1000; /* 确保导航栏在最上层 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

/* 调整页面内容区域，避免被导航栏遮挡 */
.analysis-page {
  margin-top: 70px; /* 根据导航栏高度调整 */
}
/* nav {
  padding: 1rem;
  background-color: #f0f0f0;
  margin-bottom: 2rem;
} */
nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
