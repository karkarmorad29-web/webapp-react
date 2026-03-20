# Cookbook

- Avvio scaffold Javascript + React da Vite
`npm create vite@latest .`
- Rimozione asset inutilizzati sotto public e src/assets.
- Rimozione App.css tenendo come la prencipale Index.css
- Pulizzia Index.css scrivendo il solito reset
`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

a {
  color: #007bff;
  text-decoration: none;
}`

- Svuotato app.jsx. Rimosso import dei vari file e creazione di state. Tenuto solo un <h1>.

- Instalazzione react-router-dom
`npm i react-router-dom`
-In App.jsx:
```
import { useState } from 'react'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'
import FilmsPage from './pages/FilmsPage'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="films" element={<FilmsPage />} />
            <Route path="films/:id" element={<FilmPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
  ```
  - Creazione di <Header> (/components/Header.jsx) che usa <Link>
  - Creazione di layout (/layouts/DefaultLayout.jsx) con <Outlet> e <Header>
  - Creazione componenti di pagina (/pages/*page.jsx)









# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
