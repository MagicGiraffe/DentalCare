<template>
  <div class="auth-page">
    <h1>注册</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="用户名" />
      <input v-model="password" type="password" placeholder="密码" />
      <input v-model="email" placeholder="邮箱" />
      <button type="submit">注册</button>
    </form>
    <p>已有账号？<router-link to="/login">去登录</router-link></p>
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
      email: "",
    };
  },
  methods: {
    handleRegister() {
      // 模拟注册成功，跳转到分析页面
      localStorage.setItem("isLoggedIn", "true");
      this.$router.push("/cbct-analysis");
    },
  },
});
</script>
