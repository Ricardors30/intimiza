// build-tailwind.js
import { execSync } from "child_process";

const watch = process.argv.includes("--watch");
const input = "./src/style.css";
const output = "./dist/style.css";

const command = `npx tailwindcss -i ${input} -o ${output} ${watch ? "--watch" : "--minify"}`;

console.log(`🌀 Running: ${command}`);
execSync(command, { stdio: "inherit" });
