import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://dummy.restapiexample.com/api/v1/employees").then((data) => {
      console.log("data", data);
      data.json().then((result) => {
        console.log("result", result);
        setUser(result.data);
      });
    });
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>salary</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
                <td>{item.employee_age}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default User;
