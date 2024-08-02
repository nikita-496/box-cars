module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "react", "@typescript-eslint", "perfectionist"],
  rules: {
    "no-var": ["error"],
    "prefer-const": ["error"],
    "prettier/prettier": ["warn"],
    "react/jsx-no-target-blank": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "all",
      },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "type",
          "react",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "side-effect",
          "style",
          "object",
          "unknown",
        ],
        "newlines-between": "always",
        "internal-pattern": [
          "@/components/**",
          "@/stores/**",
          "@/pages/**",
          "@/lib/**",
          "@/assets/**",
        ],
      },
    ],
  },
};
