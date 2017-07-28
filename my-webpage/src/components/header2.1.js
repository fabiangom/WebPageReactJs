import React from 'react';

// import '../index.css';
import '../font-awesome-4.7.0/css/font-awesome.css';

var number = [1, 2, 3, 4];

export default class Header4 extends React.Component {
  render() {
    return (
      <div>
        {number.map((x) => {
          return (
            <p>{x*2}</p>
          )
        })}
      </div>
    );
  }
}
