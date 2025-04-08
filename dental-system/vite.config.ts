import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { hostname } from "os";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "10.193.214.10",
  },
});
