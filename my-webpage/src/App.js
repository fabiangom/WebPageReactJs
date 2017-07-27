import React from 'react';

import './index.css';

import './components/header2';
import HeaderOne from './components/header1';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-global">
        <HeaderOne />
      </div>
    );
  }
}
