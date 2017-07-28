import React from 'react';

import '../index.css';
import logo from '../logoINE.png';
import '../font-awesome-4.7.0/css/font-awesome.css';

// Array para declarar cada una de las opciones del menu dentro del nav de la pagina
var menu = ['SOBRE INE', 'CREDENCIAL DE ELECTOR', 'ELECCIONES', 'PARTIDOS POLITICOS', 'ESTADOS', 'EDUCACION CIVICA', 'CENTRAL ELECTORAL'];

export default class HeaderTwo extends React.Component {
  render() {
    return (
        <section className="middle-row">
          <div className="middle-row-1">
            <img src={logo} alt="Logotipo INE" />
          </div>
          <div className="middle-row-2">
            <nav className="menu">
              <i className="fa fa-home" aria-hidden="true"></i>
{/* Uso del map para recorrer el array por medio de una funcion */}
                {menu.map((current, ind) => {
                  return (
                    <a href="#" key={ind}><strong>{current}</strong></a>
                  )
                })}
{/* El codigo de arriba con el map sustituye todas estas lineas ancor */}
                {/* <a href="#"><strong>SOBRE INE</strong></a>
                <a href="#"><strong>CREDENCIAL DE ELECTOR</strong></a>
                <a href="#"><strong>ELECCIONES</strong></a>
                <a href="#"><strong>PARTIDOS POLITICOS</strong></a>
                <a href="#"><strong>ESTADOS</strong></a>
                <a href="#"><strong>EDUCACION CIVICA</strong></a>
                <a href="#"><strong>CENTRAL ELECTORAL</strong></a> */}
            </nav>
          </div>
        </section>
    );
  }
}
