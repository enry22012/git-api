import React, { Component } from 'react';
import Header from '../../Header';
import Search from '../Search';
import History from '../History';
import Result from '../Result';
import { Tabs, Tab } from 'react-bootstrap';
import './index.css';

class HomePage extends Component {
  initState = {
    history: [],
    result: null,
    tab: 'Search'
  }
  constructor (props) {
    super();
    this.state = {
      ...this.initState
    }
  }

  search = async (url) => {
    const res = await fetch(url);
    const result = await res.json();
    const timeStamp = new Intl.DateTimeFormat('en-GB').format(new Date());
    const request = {
      url: url,
      totalCount: result.total_count,
      status: res.status,
      timeStamp: timeStamp
    };
    this.setState(prevState => ({
      ...prevState,
      history: [...prevState.history, request],
      result: { ...result, url: url },
      tab: 'Result'
    }));
  }

  setDateFormate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return day + '/' + month + '/' + year;
  }

  selectTab = (event) => {
    this.setState({
      tab: event
    });
  }

  render() {
    const {
      history,
      result,
      tab
    } = this.state;
    return(
      <div className='home-page'>
        <Header/>
        <Tabs className='home-tabs mr-auto' activeKey={tab} onSelect={this.selectTab}>
          <Tab eventKey='Search' title='Search'>
            <Search search={this.search}/>
          </Tab>
          <Tab eventKey='History' title='History'>
            <History history={history} search={this.search}/>
          </Tab>
          <Tab eventKey='Result' title='Result'>
            <Result result={result}/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default HomePage;