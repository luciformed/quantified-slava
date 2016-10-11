require('core-js/fn/object/assign');

import React from 'react';

import SchemaForm from 'react-jsonschema-form';

const schema = {
  title: "Daily survey",
  type: "object",
  // required: ["title"],
  properties: {
    mood: {type: "number", title: "Today's mood", minimum: 1, maximum: 10},
    cigarettes : {type: "number", title: "How many cigarettes did you smoke?"},
    journal: {type:"string", "title": "Journal entry"}
    // timestamp: {type: "number", title: "Timestamp", "readonly" : true}
  }
};

const uiSchema = {
  journal : {
    "ui:widget": "textarea"
  },
  mood: {
    "ui:widget": "updown"
  },
  cigarettes: {
    "ui:widget": "updown"
  }
};



const Form = React.createClass({

  onFormSubmit(form) {

    console.log("onFormSubmit", form);

    let req = fetch(`/api/survey/${form.formData.id}`, {
      method: "PUT",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(Object.assign({}, form.formData, {timestamp:Date.now()}))
    }).then((resp) => {console.log(resp.json())});

  },

  onFormChange(form) {
    let data = form.formData;
    console.log(arguments);
  },

  componentDidMount() {
    console.debug('componentDidMount', 'Form');
  },
  render() {
    return (
      <div>
        <SchemaForm schema={schema} formData={this.props.data} onChange={this.onFormChange} uiSchema={uiSchema} onSubmit={this.onFormSubmit}/>
      </div>
      )
  }
});


export default Form;

