import React from 'react';

import SchemaForm from 'react-jsonschema-form';

const schema = {
  // title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: ""},
    done: {type: "boolean", title: "Done?", default: false}
  }
};


const Form = React.createClass({
  componentDidMount : () => {
    console.debug('componentDidMount', 'Form');
  },
  render() {
    return (
      <div>
        <SchemaForm schema={schema} />
      </div>
      )
  }
});


export default Form;
