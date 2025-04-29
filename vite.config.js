import { defineConfig } from "vite"
export default defineConfig({
    base:"./",
    build:{
        minify : "terser",
// kaboom needs terser to run the code 
    },
})