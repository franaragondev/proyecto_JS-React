import logo from './logo.png';
import './App.css';
import menu from './3844438-hamburger-menu-more-navigation_110319.png';
import Flashcard from './componentes/FlashcarComponent'
import {PRODUCTOS} from './shared/datos.js'
import React, { Component } from 'react';

var listaMostrar = []

var listaCampoAplicacion = []
function BuscadorCampoAplicacion(input_campoAplicacion){
  listaCampoAplicacion= []
  PRODUCTOS.forEach(element => {
    element['campos'].forEach(e => {
      if(e.toLowerCase().includes(input_campoAplicacion.toLowerCase()) && input_campoAplicacion.length>0){
        if(!listaCampoAplicacion.includes(element)){
          listaCampoAplicacion.push(element)
        }
      }
    });
  });
}

var listaKeyword = []
function BuscadorKeyword(input_keyword){
  listaKeyword= []
  PRODUCTOS.forEach(element => {
    element['keywords'].forEach(e => {
      if(e.toLowerCase().includes(input_keyword.toLowerCase()) && input_keyword.length>0){
        if(!listaKeyword.includes(element)){
          listaKeyword.push(element)
        }
      }
    });
  });
}

function UnirBusquedas(listaCampoUnir, listaKeywordUnir){
  if(listaCampoUnir.length<1){
    listaMostrar = []
    listaKeywordUnir.forEach(element => {
      listaMostrar.push(element)
    });
  }else if(listaKeywordUnir.length<1){
    listaMostrar = []
    listaCampoUnir.forEach(element => {
      listaMostrar.push(element)
    });
  }
  return listaMostrar
}


function DisplayProducts(props){
  const losproductos = listaMostrar; 
  
  const lista = losproductos.map((productos_map)=>
  <Flashcard
      imagen={productos_map.imagen}
      nombre={productos_map.nombre}
      campos={productos_map.campos}
   />);
   return(
   <div id='lista_productos'>
     {lista}
   </div>
   );
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      productos: PRODUCTOS,
      campo_aplicacion: '',
      keyword: ''
    }
    this.handleChangeCampoAplicacion = this.handleChangeCampoAplicacion.bind(this)
    this.handleChangeKeyword = this.handleChangeKeyword.bind(this)
  }

  handleChangeCampoAplicacion (e) {
    const campo_aplicacion = e.target.campo_aplicacion;
    const value = e.target.value;
    this.setState({
      [campo_aplicacion]: value
    })
    listaKeyword= []
    listaCampoAplicacion= []
    BuscadorCampoAplicacion(value)
    UnirBusquedas(listaCampoAplicacion, listaKeyword)
  };

  handleChangeKeyword (e) {
    const keyword = e.target.keyword;
    const value = e.target.value;
    this.setState({
      [keyword]: value
    })
    listaKeyword= []
    listaCampoAplicacion= []
    BuscadorKeyword(value)
    UnirBusquedas(listaCampoAplicacion, listaKeyword)
  };

  render(){
    return(
      <div className="App">
      <div id='cabecera'>
        <img id='menu' src={menu} ></img>
        <h1 id='texto_cabecera'>APOTHEKE I</h1>
        <img id='logo' src={logo}></img>
      </div>
      <div id='buscador'>
        <form>
          <input type='text' name='name' value={this.state.handleChangeCampoAplicacion} onChange={this.handleChangeCampoAplicacion} id='buscador_campo' placeholder='Buscador Campo de Aplicación'></input>
          <input type='text' name='email' value={this.state.handleChangeKeyword} onChange={this.handleChangeKeyword} id='buscador_keyword' placeholder='Buscador Keyword'></input>
          {/*<Button type='submit' onClick={this.handleSubmit} id='btn_buscar'>Buscar</Button>*/}
        </form>
      </div>
      <header className="App-header">
        <DisplayProducts product={this.state.productos}/>
      </header>
    </div>
    )
  }
}

export default App;
