import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portfolio/", // 👈 Add this line (your repo name with slashes)
  plugins: [react(), tailwindcss()],
});
