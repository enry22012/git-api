import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css'

class Search extends Component {
  constructor (props) {
    super();
    this.state = {
      fields: {
        username: {
          value: '',
          err: null
        },
        email: {
          value: '',
          err: null
        },
        repositories: {
          value: '',
          err: null
        }
      }
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.search = this.search.bind(this);
  }

  handleChanges = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log("target", target.name, target.value);
    this.setState(prevState => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [name]: {
          value: value
        }
      }
    }));
  }

  search = () => {
    this.state.fields.forEach(field => {
      
    });
    fetch('https://api.github.com/search/users?q=test')
    .then(res => { return res.json()})
    .then(result => {this.setState({result: result})})
    .catch(err => {throw new Error(err)});
  }

  validateField = () => {

  }

  render() {
    return(
      <div className='search'>
        <Form id='searchForm'>
          <Form.Group controlId='formUsername'>
            <Form.Control name='username'
                          placeholder='Username'
                          onChange={this.handleChanges}
                          value={this.state.fields.username.value}/>
          </Form.Group>
          <Form.Group controlId='formEmail'>
            <Form.Control name='email'
                          type='email'
                          isValid={this.state.fields.email.value}
                          isInvalid={!this.state.fields.email.value}
                          placeholder='Email'
                          onChange={this.handleChanges}
                          value={this.state.fields.email.value}/>
          </Form.Group>
          <Button variant='primary' type='button' onClick={this.search}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default Search;