import * as React from 'react';
import * as ReduxForm from 'redux-form';
import Form from './form/form';
import FormGroup from './form/form-group';
import FormLabel from './form/form-label';
import FormError from './form/form-error';
import Input from './form/input';
import Button from './button';
import Alert from './alert';

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
    return <Form handleSubmit={ handleSubmit }>
        <Alert isVisible={ isPending }>Signing up ...</Alert>
        <Alert id="qa-alert" isVisible={ hasError } status="error">
            Invalid username and password
        </Alert>
        <FormGroup>
            <FormLabel id="qa-fname-label">First Name</FormLabel>
            <Input type="text" fieldDefinition={ firstname } id="qa-fname-input"/>
            <FormError id="qa-fname-validation"
            isVisible={ !!(firstname.touched && firstname.error) }>
            { firstname.error }
            </FormError>
        </FormGroup>

        <FormGroup>
            <FormLabel id="qa-lname-label">Last Name</FormLabel>
            <Input type="text"
            fieldDefinition={ lastname }
            id="qa-lname-input" />
            <FormError id="qa-lname-validation"
            isVisible={ !!(lastname.touched && lastname.error) }>
            { lastname.error }
            </FormError>
        </FormGroup>
        
        <FormGroup>
            <FormLabel id="qa-email-label">Email</FormLabel>
            <Input type="text" fieldDefinition={ email } id="qa-email-input"/>
            <FormError id="qa-email-validation"
            isVisible={ !!(email.touched && email.error) }>
            { email.error }
            </FormError>
        </FormGroup>

        <FormGroup>
            <Button type="submit" className="mr1" id="qa-login-button">
            Register
            </Button>
            <Button onClick={ resetForm }
            type="reset"
            className="bg-red" id="qa-clear-button">
            Clear
            </Button>
        </FormGroup>

        <FormGroup>
            <FormLabel>Or sign up with ...</FormLabel>
            <hr />
            <Button className="mr1">Facebook</Button>
            <Button className="mr1">Twitter</Button>
            <Button className="mr1">LinkedIn</Button>
        </FormGroup>
    </Form>;
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
