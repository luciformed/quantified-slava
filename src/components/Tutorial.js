import React from 'react';
import 'whatwg-fetch';


const Tutorial = React.createClass({
  componentDidMount : () => {
    console.debug('componentDidMount', 'Tutorial');

    fetch('/api').then(console.log.bind(console));
  },
  render() {
    return (
      <div>
        Tutorial
      </div>)
  }
});


export default Tutorial;
