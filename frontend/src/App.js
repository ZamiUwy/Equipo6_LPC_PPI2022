
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
import Houses2 from './Paginas/House2';
import Houses3 from './Paginas/House3';
import Houses4 from './Paginas/House4';
import Houses5 from './Paginas/House5';
import Houses6 from './Paginas/House6';
import Houses7 from './Paginas/House7';
import Houses8 from './Paginas/House8';
import Houses9 from './Paginas/House9';
import Houses10 from './Paginas/House10';
import Houses11 from './Paginas/House11';



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
      <Route exact path='/House2' element={<Houses2/>}/>
      <Route exact path='/House3' element={<Houses3/>}/>
      <Route exact path='/House4' element={<Houses4/>}/>
      <Route exact path='/House5' element={<Houses5/>}/>
      <Route exact path='/House6' element={<Houses6/>}/>
      <Route exact path='/House7' element={<Houses7/>}/>
      <Route exact path='/House8' element={<Houses8/>}/>
      <Route exact path='/House9' element={<Houses9/>}/>
      <Route exact path='/House10' element={<Houses10/>}/>
      <Route exact path='/House11' element={<Houses11/>}/>
     
      


      
      </Routes>
    </Router>
  );
}

export default App;
