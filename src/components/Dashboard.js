import React from 'react';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>01/01/1990</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
