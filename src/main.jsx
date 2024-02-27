import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Berries } from './Components/Berries'
import { Pokemons } from './Components/Pokemons'
import { Location } from './Components/Locations'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Pokemons/>}/>
        <Route  path='/berries' element={<Berries/>}/>
        <Route  path='/locations' element={<Location/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
