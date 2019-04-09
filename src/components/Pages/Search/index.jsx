import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';

class Search extends Component {
  constructor (props) {
    super();
    this.state = {
      username: '',
      email: '',
      formErrors: {
        username: '',
        email: ''
      },
      usernameValid: false,
      emailValid: false,
      formValid: false
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.search = this.search.bind(this);
  }

  handleChanges = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState( {[name]: value}, () => this.validateField(name, value));
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let usernameValid = this.state.usernameValid;
    const regexp = new RegExp(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/i);
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Is invalid';
        break;
      case 'username':
        usernameValid = !value.match(regexp);
        fieldValidationErrors.username = usernameValid ? '' : 'Contains illegal characters';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    usernameValid: usernameValid
                  }, this.validateForm);
  }
  
  validateForm = () => {
    this.setState({formValid: this.state.emailValid &&  this.state.usernameValid});
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter' && this.state.formValid) {
      this.search()
    }
  }

  search = () => {
    this.props.search('https://api.github.com/search/users?q=' + this.state.username);
  }

  render() {
    const {
      username,
      email,
      usernameValid,
      emailValid,
      formValid
    } = this.state;
    return(
      <div className='search'>
        <Form id='searchForm'>
          <Form.Group controlId='formUsername'>
            <Form.Control name='username'
                          isValid={usernameValid}
                          isInvalid={!usernameValid}
                          placeholder='Username'
                          onChange={this.handleChanges}
                          value={username}
                          onKeyPress={this.onKeyPress}/>
          </Form.Group>
          <Form.Group controlId='formEmail'>
            <Form.Control name='email'
                          type='email'
                          isValid={emailValid}
                          isInvalid={!emailValid}
                          placeholder='Email'
                          onChange={this.handleChanges}
                          value={email}
                          onKeyPress={this.onKeyPress}/>
          </Form.Group>
          <Button variant={formValid ? 'primary' : 'secondary'}
                  type='button'
                  onClick={this.search}
                  disabled={!formValid}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default Search;