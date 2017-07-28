import React from 'react';

import '../font-awesome-4.7.0/css/font-awesome.css';

export default class Cuerpo extends React.Component{
  render() {
    return (
      <main className="main-content">
        <div className="main-top">
            <p className="main-title"><strong>Biblioteca de documentos oficiales del INE</strong></p>
          <p className="main-title">Bienvenidos al repositorio de documentos oficiales del INE.
            En esta plataforma podran encontrar toda la documentacion que genera el INE
            a partir de su estrcutura operativa, aqui va un texto de presentacion.
            Los documentos se encuentran clasificados por cada una de las areas operativas del INE.</p>
        </div>
        <div className="main-middle">
          <p className="main-title"><strong>Ver documentos por cada area que genera informacion</strong></p>
          <p className="main-title">Se listan las areas operativas del INE, si no sabe que direccion o unidad genera
             la informacion que requiere por favor use nuestro buscador.</p>
          <ul className="main-middle-list">
            <li><a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i>Centro para el Dsarrollo Democratico</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Consejo General</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Coordinacion de Asuntos Internacionales</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Direccion Ejecutiva de Capacitacion Electoral y Educacion Civica</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Direccion Ejecutiva de Organizacion Electoral</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Junta General Ejecutiva</a></li>
            <li><a href=""><i className="fa fa-plus-circle" aria-hidden="true"></i>Unidad Tecnica de Adcitos</a></li>
          </ul>
        </div>
        <div className="main-bottom">
          <p className="main-title"><strong>Ultimos documentos agregados a la biblioteca de documentos</strong></p>
          <p className="text-title">Este es el titulo del documento</p>
          <p className="text-middle-gray">Perez, Manuel; Ctro, Autor (2001-09-11)</p>
          <p className="text-middle">Este es el resuemen del documento, que trata sobre la reunion en materia de
          fiscalizacion con el partiblo blah.</p>

          <p className="text-title">Directamente respecto del procedimiento especializado incodo por la Coalicion
            "Alianza Por Mexico", en Contra de la Coalicion "Por El Bien De Todos", por Hechos
            que Considera Constituyen Violaciones al Codigo Federal de Instituciones y procedimientos Electorales.</p>
          <p className="text-middle-gray">Instituto Federal Electoral (2006-10-25)</p>
          <p className="text-middle">JGE168/2006 - Dictamen de la Sesion Extraordinaria del 2006-10-25</p>

          <p className="text-title">Dictamen respecto del procedimiento especializado incoado por la Coalicion "Por El Bien De Todos",
          en Contra de Quien Resulte Responsable, por Hechos que Considera Constituyen Violaciones al Codigo
          Federal de Instituciones y procedimientos Electorales</p>
          <p className="text-middle-gray">Instituto Federal Electoral (2006-10-25)</p>
          <p className="text-middle">JGE170/2006 - Dictamen de la Sesion Extraordinaria del 2006-10-25</p>

          <p className="text-title">DICTAMENTE RESPECTO DEL PROCEDIMIENTO ESPECIALIZADO INCOADO POR EL PARTIDO ACCION NACIONAL,
          EN CONTRA DE LA COALICION "ALIANZA POR MEXICO", POR HECHOS QUE CONSIDERA CONTITUYEN VIOLACIONES
          AL CODIGO FEDERAL DE INSTITUCIONES Y PROCEDIMIENTOS ELECTORALES.</p>
          <p className="text-middle-gray">Instituto Federal Electoral (2006-10-25)</p>
          <p className="text-middle">JGE169/2006 - Dictamen de la Sesion Extraordinaria del 2006-10-25</p>

          <p className="text-title">Dictamen respecto del procedimiento especializado incoado por la Coalicion "Por El Bien De Todos",
          en Contra de la Coalizion "Alianza Por Mexico", por Hechos que Considera Constituyen Violaciones al Codigo
          Federal de Instituciones y procedimientos Electorales</p>
          <p className="text-middle-gray">Instituto Federal Electoral (2006-10-25)</p>
          <p className="text-middle">JGE167/2006 - Dictamen de la Sesion Extraordinaria del 2006-10-25</p>
          <p className="text-middle-2">Mas</p>
        </div>
      </main>
    );
  }
}
