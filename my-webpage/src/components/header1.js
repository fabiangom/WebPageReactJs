import React from 'react';

// import '../index.css';
import '../font-awesome-4.7.0/css/font-awesome.css';

var icons = [ <i className="fa fa-facebook" aria-hidden="true"></i>,
              <i className="fa fa-twitter" aria-hidden="true"></i>,
              <i className="fa fa-google-plus" aria-hidden="true"></i>,
              <i className="fa fa-youtube-play" aria-hidden="true"></i>,
              <i className="fa fa-rss" aria-hidden="true"></i>
            ];

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
            {icons.map((current, ind) => {
              return (
                <a href="#">{current}</a>
              )
            })}
            {/* <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a> */}
          </div>
        </section>
      </header>
    );
  }
}
