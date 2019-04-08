import React, { Component } from 'react';
import Header from '../../Header';
import Search from '../Search';
import { Tabs, Tab } from 'react-bootstrap';
import './index.css';

class HomePage extends Component {
  render() {
    return(
      <div className='home-page'>
        <Header/>
        <Tabs className='home-tabs mr-auto'>
          <Tab eventKey='Search' title='Search' className='home-search'>
            <Search />
          </Tab>
          <Tab eventKey='History' title='History'>

          </Tab>
          <Tab eventKey='Result' title='Result'>
            
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default HomePage;