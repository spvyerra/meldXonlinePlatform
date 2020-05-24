import React from 'react';
import { Jumbotron, Table } from 'reactstrap';

const BusinessDashboard = (props) => {
  return (
    <Jumbotron>
      <h1 className="display-3">Business</h1>
      <p className="lead">Equity Distribution</p>
      <hr className="my-2" />
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </Jumbotron>
  );
}

export default BusinessDashboard;
