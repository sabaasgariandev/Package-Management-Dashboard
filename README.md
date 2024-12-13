# React + TypeScript + Vite
[Demo Project](https://package-management-dashboard.vercel.app/)

- Developed by Saba Asgarian

- Created - 2024-12-13

- Technologies Used - Tailwind ,React js ,Api 

- Hooks Used : useState
- Role - Frontend

- How to reach me : with my [instagram](https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr) and [linkedin](https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
![avali](https://github.com/user-attachments/assets/5c275e7e-1e5c-49bd-af91-98a5b2a62248)


-This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

-Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Package Management Dashboard

## Installation

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the project:
    ```bash
    npm start
    yarn dev
    ```

## Features

- Fetches and displays a list of workout packages.
- Provides search and filter functionality.
- Allows viewing detailed information about a specific package.

## Assumptions

- Data is fetched from a mock API.
- The project uses React with TypeScript.
- TailwindCSS & mui is used for styling.

-you can see the picture of output in folder OutPut
