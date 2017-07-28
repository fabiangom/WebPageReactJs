import React from 'react';

import '../font-awesome-4.7.0/css/font-awesome.css';

export default class Aside extends React.Component {
  render() {
    return (
        <aside className="aside">
          <div className="aside-header">
            <i className="fa fa-home" aria-hidden="true"></i>
            <p>CIPE</p>
          </div>
          <div className="aside-search">
            <input type="text" name="name" placeholder="Busquedas" />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <div className="aside-fecha">
            <p className="aside-title">Fecha</p>
              <p><a href="">2010 - 2016 (5883)</a></p>
              <p><a href="">2000 - 2009  (3628)</a></p>
              <p><a href="">1990 - 1999 (44)</a></p>
          </div>
          <div className="aside-documento">
            <p className="aside-title">Tipo de Documento:</p>
              <p><a href="">Resolucion (4684)</a></p>
              <p><a href="">Acuerdo (3528)</a></p>
              <p><a href="">Dictamen (622)</a></p>
              <p><a href="">...mas</a></p>
          </div>
          <div className="aside-tema">
            <p className="aside-title">Tema</p>
              <p className="par-1"><a href="">Infracciones y delitos electorales (3098)</a></p>
              <p><a href="">Proceso electoral (2376)</a></p>
              <p className="par-2"><a href="">Fiscalizacion de los recursos de los partidos y asociaciones politicas (2308)</a></p>
              <p><a href="">...mas</a></p>
          </div>
          <div className="aside-cuenta">
            <p className="aside-title-2">Mi cuenta</p>
              <p><a href="">Acceder</a></p>
              <p><a href="">Registro</a></p>
          </div>
          <div className="aside-rss">
            <p className="aside-title-2">RSS Feeds</p>
              <p><i className="fa fa-rss" aria-hidden="true"></i><a href="">RSS 1.0</a></p>
              <p><i className="fa fa-rss" aria-hidden="true"></i><a href="">RSS 2.0</a></p>
              <p><i className="fa fa-rss" aria-hidden="true"></i><a href="">Atom</a></p>
          </div>
        </aside>
    );
  }
}
