import React from 'react';

import { pick, keys } from 'ramda';

import SchemaForm from 'react-jsonschema-form';

const schema = {
  title: "Daily survey",
  type: "object",
  // required: ["title"],
  properties: {
    mood: {type: "number", title: "Mood", minimum: 1, maximum: 10},
    cigarettes : {type: "number", title: "How many cigarettes did you smoke?"},
    journal: {type:"string", "title": "Journal entry"}
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


    let payload = JSON.stringify(pick(keys(schema.properties), form.formData));


    let req = fetch(`/api/survey/${form.formData.id}`, {
      method: "PUT",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: payload // pick schema keys and only submit them
    });

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

