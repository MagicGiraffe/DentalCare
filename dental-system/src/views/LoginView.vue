<template>
  <div class="auth-page">
    <h1>登录</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" placeholder="用户名" />
      <input v-model="password" type="password" placeholder="密码" />
      <button type="submit">登录</button>
    </form>
    <p>没有账号？<router-link to="/register">去注册</router-link></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // 模拟登录成功，跳转到分析页面
      localStorage.setItem("isLoggedIn", "true");
      this.$router.push("/cbct-analysis");
    },
  },
});
</script>

<style scoped>
.auth-page {
  margin-top: 70px;
  padding: 20px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
