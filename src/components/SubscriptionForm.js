import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Header, Input} from 'semantic-ui-react';

import './SubscriptionForm.css';

class SubscriptionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      errorName: '',
      errorEmail: '',
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }  

  submit(event) {
    event.preventDefault();
    let errorName = null;
    let errorEmail = null;
    if (!this.state.name) {
      errorName = 'The name is required';
    }
    if (!this.state.email) {
      errorEmail = 'The email is required';
    } else if (!this.validateEmail(this.state.email)) {
      errorEmail = 'Invalid email';
    }
    if (errorName || errorEmail){
      this.setState({errorName, errorEmail});
      return;
    }
    this.props.subscribe(this.state.name, this.state.email);
    this.setState({name: '', email: ''});
  }

  handleOnChangeName(event) {
    this.setState({name: event.target.value, errorName: ''});
  }

  handleOnChangeEmail(event) {
    this.setState({email: event.target.value, errorEmail: ''});
  }

  render() {
    return (
      <Form className="form" onSubmit={this.submit.bind(this)} loading={this.props.loading}>
        <Header as="h3">Subscription</Header>
        <Form.Field>
          <label>Name</label>
          <Input 
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleOnChangeName.bind(this)}
            error={this.state.errorName !== ''}
          />
          {this.state.errorName !== '' ? <p className="form__field-error">{this.state.errorName}</p> : ''}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input 
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleOnChangeEmail.bind(this)}
            error={this.state.errorEmail !== ''}
          />
          {this.state.errorEmail !== '' ? <p className="form__field-error">{this.state.errorEmail}</p> : ''}
        </Form.Field>
        <Form.Group className="form__buttons">
          <Button type="button" onClick={this.props.toggleVisibility}>Cancel</Button>
          <Button secondary type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}

SubscriptionForm.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}
export default SubscriptionForm;