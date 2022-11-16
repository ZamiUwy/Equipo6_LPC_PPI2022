
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicios';
import Login from './Paginas/Login';
import Registro from './Paginas/Registro';
import HomeL from './Paginas/HomeL';
import Perfil from './Paginas/Perfil';
import Pagosdevi from './Paginas/Pagosdevivienda';
import Publicarvi from './Paginas/Publicarvivienda';
import Filtro from './Paginas/Filtro';
import Houses from './Paginas/House';

function App() {
  return (
    <Router>
      <Routes>

      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/registro' element={<Registro/>}/>
      <Route exact path='/homeL' element={<HomeL/>}/>
      <Route exact path='/perfil' element={<Perfil/>}/>
      <Route exact path='/pagosdevivienda' element={<Pagosdevi/>}/>
      <Route exact path='/Publicarvivienda' element={<Publicarvi/>}/>
      <Route exact path='/Filtro' element={<Filtro/>}/>
      <Route exact path='/House' element={<Houses/>}/>
     


      
      </Routes>
    </Router>
  );
}

export default App;
