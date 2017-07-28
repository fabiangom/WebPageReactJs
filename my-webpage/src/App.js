import React from 'react';

import './index.css';

import HeaderOne from './components/header1';
import HeaderTwo from './components/header2';
import HeaderThree from './components/header3';
import Aside from './components/aside';
import Cuerpo from './components/main';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-global">
        <div className="container">
          <HeaderOne />
          <HeaderTwo />
          <HeaderThree />
        </div>
          <Aside />
          <Cuerpo />
      </div>
    );
  }
}
