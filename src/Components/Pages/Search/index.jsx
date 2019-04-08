import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css'

class Search extends Component {
  constructor (props) {
    super();
  }

  submit = () => {

  }

  render() {
    return(
      <div className='search'>
        <Form id='searchForm'>
          <Form.Group controlId='formUsername'>
            <Form.Control placeholder='Username'/>
          </Form.Group>
          <Button variant='primary' type='button' onClick={() => this.submit()}>
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default Search;