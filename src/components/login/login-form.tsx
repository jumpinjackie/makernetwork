import * as React from 'react';
import * as ReduxForm from 'redux-form';
import { Input, Button, Alert, ButtonGroup } from 'react-bootstrap';

interface ILoginFormProps {
  slim?: boolean;
  onSubmit: () => void;
  handleSubmit?: () => void;
  resetForm?: () => void;
  isPending: boolean;
  hasError: boolean;
  fields?: {
    username: ReduxForm.FieldProp;
    password: ReduxForm.FieldProp;
  };
};

// Making this a class-based component until redux-form typings support 
// stateless functional components.
class LoginForm extends React.Component<ILoginFormProps, void> {
  render() {
    const {
      handleSubmit,
      resetForm,
      isPending,
      hasError,
      fields: {
        username,
        password
      }
    } = this.props;

    let body = null;
    if (this.props.slim === true) {
      body = <div>
        <input type="text" className="form-control" placeholder="Username" {...username} />
        <input type="password" className="form-control" placeholder="Password" {...password} />
        <Button disabled={ isPending } type="submit" bsStyle="primary">
          { isPending ? "Logging In ..." : "Login" }
        </Button>
      </div>;
    } else {
      let aLoading = null;
      if (isPending) {
        aLoading = <Alert bsStyle="info"><i className="fa fa-refresh fa-spin" /> Logging In ...</Alert>;
      }
      let aError = null;
      if (hasError) {
        aError = <Alert bsStyle="danger"><strong><i className="fa fa-exclamation-circle" /> Invalid username and/or password</strong></Alert>;
      }
      let vUsername = null;
      if (!!(username.touched && username.error)) {
        vUsername = <Alert bsStyle="danger"><strong><i className="fa fa-exclamation-circle" /> {username.error}</strong></Alert>;
      }
      let vPassword = null;
      if (!!(password.touched && password.error)) {
        vPassword = <Alert bsStyle="danger"><strong><i className="fa fa-exclamation-circle" /> {password.error}</strong></Alert>;
      }
      
      body = <div>
        {aLoading}
        {aError}
        <Input type="text" label="Username" placeholder="Username" {...username} />
        {vUsername}
        <Input type="password" label="Password" placeholder="Password" {...password} />
        {vPassword}
        <ButtonGroup>
          <Button type="submit" bsStyle="primary">Login</Button>
          <Button onClick={ resetForm } bsStyle="danger">Clear</Button>
        </ButtonGroup>
      </div>;
    }
    return <form onSubmit={ handleSubmit }>
      {body}
    </form>;
  }

  static validate(values) {
    const errors = { username: '', password: '' };

    if (!values.username) {
      errors.username = 'Username is required.';
    }

    if (!values.password) {
      errors.password = 'Password is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'login',
  fields: [
    'username',
    'password',
  ],
  validate: LoginForm.validate,
})(LoginForm);
