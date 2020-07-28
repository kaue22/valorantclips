import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CadastroVideo from './pages/cadastro/video';
import Home from './pages/Home/index';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


//criar um jogo para pagina 404
const Pagina404 = () => (<div>Essa Página não existe!!!</div>);
ReactDOM.render(

  <BrowserRouter>

    <Switch>
      
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={Home} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
