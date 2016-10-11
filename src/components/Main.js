require('normalize.css/normalize.css');
require('bootswatch/paper/bootstrap.css');
require('styles/App.css');

import React from 'react';
import {range, map} from 'ramda';
import HelloWorld from "./HelloWorld.js";
import Tutorial from "./Tutorial.js";
import Form from "./Form.js";

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  // constructor() {
  //   super();

  // }
  //


  render() {
    let name = "Slava";
    let conditional;

    if(false) {
      conditional = <p> Condition passed </p>;
    }
    // console.log('props', this.props);

    return (
      <div className="index container">
        <ul> { map((i) => <li> { i } </li>, range(1, 10)) } </ul>
        {conditional}
        <HelloWorld custom-attr="lol" name={name}>
          I'm inside you!
          <span> ... really? </span>
        </HelloWorld>
        <Tutorial/>
        <Tutorial/>
        <Form/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
