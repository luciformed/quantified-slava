import React from 'react';

const Tutorial = React.createClass({
  componentDidMount : () => {
    console.debug('componentDidMount', 'Tutorial');
  },
  render() {
    return (
      <div>
        Tutorial
      </div>)
  }
});


export default Tutorial;
