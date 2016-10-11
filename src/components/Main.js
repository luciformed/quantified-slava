require('normalize.css/normalize.css');
require('bootswatch/paper/bootstrap.css');
require('styles/App.css');

import React from 'react';
import {range, map, curry} from 'ramda';
import HelloWorld from "./HelloWorld.js";
import Tutorial from "./Tutorial.js";
import Form from "./Form.js";
import classNames from "classnames";

import 'whatwg-fetch';



const AppComponent = React.createClass({
  getInitialState() {
    return {
      surveys: [],
      selectedSurvey: null
    };
  },

  componentDidMount () {
    fetch('/api/survey').then((resp) => resp.json()).then((data) => this.setState({surveys:data, selectedSurvey:data[data.length - 1]}));
  },

  render() {

    let onSurveyClick = (survey) => {

    };

    return (
      <div className="index container">
        <div className="col col-sm-9">
          <Form data={ this.state.selectedSurvey }/>
        </div>
        <div className="col col-sm-3">
          {this.state.surveys.map((survey) => (
            <div className={ classNames({active:this.state.selectedSurvey == survey })}  onClick={ onSurveyClick.bind(this, survey) }> { survey.timestamp } </div>
          )) }
        </div>
      </div>
    );
  }
})

AppComponent.defaultProps = {
};

export default AppComponent;
