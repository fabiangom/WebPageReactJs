import React from 'react';

import '../index.css';
import logo from '../logoINE.png';
import FontAwesome from 'react-fontawesome';
import '../font-awesome-4.7.0/css/font-awesome.css'

export default class HeaderOne extends React.Component {
  render(){
    return (
      <header className="container">
        <section className="top-row">
          <div className="top-row-1">
            <p>Datos Electorales</p>
            <p>Mi perfil es</p>
          </div>
          <div className="top-row-2">
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a>
          </div>
        </section>
        <section className="middle-row">
          <div className="middle-row-1">
            <img src={logo} alt="Logotipo INE" />
          </div>
          <div className="middle-row-2">
            <nav className="menu">
              <i className="fa fa-home" aria-hidden="true"></i>
              <a href="#"><strong>SOBRE INE</strong></a>
              <a href="#"><strong>CREDENCIAL DE ELECTOR</strong></a>
              <a href="#"><strong>ELECCIONES</strong></a>
              <a href="#"><strong>PARTIDOS POLITICOS</strong></a>
              <a href="#"><strong>ESTADOS</strong></a>
              <a href="#"><strong>EDUCACION CIVICA</strong></a>
              <a href="#"><strong>CENTRAL ELECTORAL</strong></a>
            </nav>
          </div>
        </section>
        <div className="bottom-row">
          <p>ACCESO</p>
        </div>
      </header>
    );
  }
}
