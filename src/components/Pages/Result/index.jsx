import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './index.css';
import Score from './Score'

class Result extends Component {
  render() {
    const {result} =this.props;
    return(
      <div className='result-page'>
      {result ?
      (
        <div className='results'>
          <p>URL: '{result.url}'</p>
          <p>Total count: {result.totalCount}</p>
          <Table className='result-table'>
            <thead>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Login</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {result.items.map((item, i) => {
                return(
                <tr key={i}>
                  <td><img className='result-user-avatar' src={item.avatar_url} alt=''/></td>
                  <td>{item.id}</td>
                  <td>{item.login}</td>
                  <td><Score score={item.score} /></td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      ) :
      (
        <p>Not result</p>
      )}
      </div>
    )
  }
}

export default Result;