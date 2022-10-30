import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@portal": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react(), svgr()],
});