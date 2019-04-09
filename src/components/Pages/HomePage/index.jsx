import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../../Header';
import Search from '../Search';
import History from '../History';
import Result from '../Result';
import { Tabs, Tab } from 'react-bootstrap';
import { newResponce } from '../../../js/actions';
import './index.css';

class HomePage extends Component {
  initState = {
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
    this.props.newResponce(request, { ...result, url: url });
    this.setState(prevState => ({
      ...prevState,
      tab: 'Result'
    }));
  }

  selectTab = (event) => {
    this.setState({
      tab: event
    });
  }

  render() {
    const {
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
            <History search={this.search}/>
          </Tab>
          <Tab eventKey='Result' title='Result'>
            <Result/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  newResponce: (history, result) => dispatch(newResponce(history, result))
});

export default connect(null, mapDispatchToProps)(HomePage);