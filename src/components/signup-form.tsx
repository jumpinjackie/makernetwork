import * as React from 'react';
import * as ReduxForm from 'redux-form';
import { Alert, FormControl, ControlLabel, ButtonGroup, Button } from 'react-bootstrap';

interface ISignUpFormProps {
  slim?: boolean;
  onSubmit?: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    firstname: ReduxForm.FieldProp;
    lastname: ReduxForm.FieldProp;
    email: ReduxForm.FieldProp;
  };
};

// Making this a class-based component until redux-form typings support 
// stateless functional components.
class SignUpForm extends React.Component<ISignUpFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        firstname,
        lastname,
        email
      }
    } = this.props;
    
    let aProgress = null;
    let aError = null;
    if (isPending) {
      aProgress = <Alert bsStyle="info"><i className="fa fa-refresh" /> Signing up ...</Alert>;
    }
    if (hasError) {
      aError = <Alert bsStyle="danger"><i className="fa fa-exclamation-circle" /> An error occurred signing up</Alert>;
    }
    
    let vFirstName = null;
    if (!!(firstname.touched && firstname.error)) {
      vFirstName = <Alert bsStyle="danger"><i className="fa fa-exclamation-circle" /> {firstname.error}</Alert>;
    }
    let vLastName = null;
    if (!!(lastname.touched && lastname.error)) {
      vLastName = <Alert bsStyle="danger"><i className="fa fa-exclamation-circle" /> {lastname.error}</Alert>;
    }
    let vEmail = null;
    if (!!(email.touched && email.error)) {
      vEmail = <Alert bsStyle="danger"><i className="fa fa-exclamation-circle" /> {email.error}</Alert>;
    }
    
    return <form onSubmit={handleSubmit}>
        {aProgress}
        {aError}
        <ControlLabel>First Name</ControlLabel>
        <FormControl type="text" placeholder="First Name" />
        {vFirstName}
        <ControlLabel>Last Name</ControlLabel>
        <FormControl type="text" placeholder="Last Name" />
        {vLastName}
        <ControlLabel>Email Address</ControlLabel>
        <FormControl type="email" placeholder="Email" />
        {vEmail}
        <br />
        <ButtonGroup>
          <Button bsSize="large" type="submit" bsStyle="primary">Register</Button>
          <Button bsSize="large" onClick={resetForm} bsStyle="danger">Clear</Button>
        </ButtonGroup>
        <hr />
        <p>Or sign up with ...</p>
        <ButtonGroup>
          <Button bsSize="large" bsStyle="primary"><i className="fa fa-facebook" /> Facebook</Button>
          <Button bsSize="large" bsStyle="primary"><i className="fa fa-twitter" /> Twitter</Button>
          <Button bsSize="large" bsStyle="primary"><i className="fa fa-linkedin" /> LinkedIn</Button>
        </ButtonGroup>
    </form>;
  }

  static validate(values) {
    const errors = { lastname: '', firstname: '', email: '' };

    if (!values.lastname) {
      errors.lastname = 'Last Name is required.';
    }

    if (!values.firstname) {
      errors.firstname = 'First Name is required.';
    }
    
    if (!values.email) {
      errors.email = 'Email is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'login',
  fields: [
    'firstname',
    'lastname',
    'email'
  ],
  validate: SignUpForm.validate,
})(SignUpForm);
