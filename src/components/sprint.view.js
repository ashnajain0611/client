import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
var { ProgressBar } = require("react-bootstrap");

export default class sprintDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sprints: [
        {
          id: 1,
          name: "sprint 1",
          description: "for client xyz",
          goal: "to enable task addition",
          progress: 60
        },
        {
            id: 1,
            name: "sprint 2",
            description: "for client zero",
            goal: "to enable task sub",
            progress: 30
          }
      ],
      teamMembers: [
        { id: 1, name: "ashna" },
        { id: 2, name: "yash" }
      ]
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
          <div className="spintView" styles={{ display: "inline-block" }}>
            {this.state.sprints.map(sprint => (
              <li key={sprint.id} onClick={this.viewDetails} styles={{ display: "inline-block" }}>
                <div>{sprint.name}</div>
                <div>{sprint.description}</div>
                <div>{sprint.goal}</div>
                <ProgressBar now={sprint.progress} />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
