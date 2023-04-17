import react from "eslint-plugin-react";

export default [
  "eslint:all",
  {
    files: ["src/**/*.{ts,tsx}", "download-tiles.js"],
    rules: {
      semi: "error",
      "prefer-const": "error"
    }
  }
];
