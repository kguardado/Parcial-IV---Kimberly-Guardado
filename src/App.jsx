import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
//Componentes
import {Menu} from './Components/Menu';
import {Menumovil} from './Components/Menumovil';
import {Footer} from './Components/Footer';

//Paginas
import Home from './pages/Home';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';

import './sass/App.scss';

export default function App() {
  return (
  <Router>
    <Menu/>
    <Menumovil/>
    <Switch>
      <Route path="/" exact> <Home/> </Route>
      <Route path="/Acerca" exact> <Acerca/></Route>
      <Route path="/Contacto" exact> <Contacto/> </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}


