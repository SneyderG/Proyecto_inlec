import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'

export const App = () => {

  return (
    <>
      <BrowserRouter>
        
        
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>


      </BrowserRouter>


    </>
  )
}