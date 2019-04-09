import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './index.css'

class History extends Component {
  
  render() {
    const {
      history,
      search
    } = this.props;
    return(
      <div className='history-page'>
        {(history.length === 0) ? (
          <p>Hystory empty</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>url</th>
                <th>Total count</th>
                <th>Status</th>
                <th>Time stamp</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, i) => {
                return(
                <tr key={i}>
                  <td>{item.url}</td>
                  <td>{item.totalCount}</td>
                  <td>{item.status}</td>
                  <td>{item.timeStamp}</td>
                  <td><Button onClick={() => search(item.url)}>Retry</Button></td>
                </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </div>
    )
  }
}

export default History;