import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
var { ProgressBar } = require('react-bootstrap');


export default class sprintDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standups: [
        {id:1, name:"standup 1", date: "2020-02-02", description: "task 1 standup", status:true},       
        {id:2, name:"standup 1", date: "2020-02-05", description: "task 1 standup 2", status:false}
      ],
      teamMembers: [
        { id: 1, name: "ashna" },
        { id: 2, name: "yash" }
      ],
    
    };
  }

  render() {

    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Target Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <div onClick={this.getAllTasks}>
                <Nav.Link href="#alltasks">Sprint Plan</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
                <Nav.Link href="#features">Standup</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
                <Nav.Link href="#features">Sprint report</Nav.Link>
              </div>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />
          <br />
        </div>
        <div className="Projects">
          <div className="todoItem" styles={{ display: "inline-block" }}>
            {this.state.standups.map(standup => (
              <li key={standup.id} onClick={this.viewDetails}>
                {standup.name}
                {standup.description}
                {standup.goal}
                <ProgressBar now={sprint.progress} />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
