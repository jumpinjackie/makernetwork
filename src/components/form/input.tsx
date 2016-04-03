import * as React from 'react';
import * as ReduxForm from 'redux-form';

interface IInputProps extends React.Props<any> {
  fieldDefinition: ReduxForm.FieldProp;
  type?: string;
  placeholder?: string;
  id?: string;
};

const Input = ({
  type = 'text',
  placeholder = '',
  fieldDefinition,
  id = '',
  inline = false
}) => (
  <input
    id={ id }
    className={inline ? "field" : "block col-12 mb1 input"}
    type={ type }
    placeholder={ placeholder }
    { ...fieldDefinition } />
);

export default Input;
