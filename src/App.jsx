import { useState } from 'react'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'
import FilmsPage from './pages/FilmsPage'
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  const [stato, setStato] = useState(null)

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
}

export default App
