import React from 'react';

const HelloWorld = (props) => {
  console.debug('children', props.children);
  // {props.children}
  return(
    <div>
      Hello {props.name}
      {props.children}
    </div>
  );
};


HelloWorld.prototype.componentDidMount = () => {
  console.debug('componentDidMount');
};

export default HelloWorld;
