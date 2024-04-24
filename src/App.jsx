
import './App.css'
import { Error } from './pages/Error'
import { Home } from './pages/Home'
import { Success } from './pages/Success'
import {Routes , Route} from 'react-router-dom'
function App() {


  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sucess" element={<Success />} />
    <Route path="/*" element={<Error />} />
  </Routes>
    </>
  )
}

export default App
