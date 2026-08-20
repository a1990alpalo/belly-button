import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["node_modules/**"]),

  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        d3: "readonly",
        Plotly: "readonly",
      },
    },

    plugins: {
      js,
    },

    extends: ["js/recommended"],

    rules: {
      eqeqeq: "warn",
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^optionChanged$",
        },
      ],
    },
  },
]);
