import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.details.view.css";

export default class okrProjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: "pro 1", description: "high priority", status: "pending" },
        { id:2, name: "pro 2", description: "low priority", status: "on-going" }
      ],
    };   
  }

  render() {
    return (
        <div className="Projects">
            OKR Project Details
          <div className="okrDetails" styles={{ display: "inline-block" }}>
            {this.state.projects.map(project => (
              <li key={project.id} onClick={this.viewProjects} styles={{ display: "inline-block" }}>
                <span>{project.name}</span>&nbsp;&nbsp;
                <span>{project.description}</span>&nbsp;&nbsp;
                <span>{project.status}</span>&nbsp;&nbsp;
              </li>
            ))}
          </div>
          </div>
    );
  }
}
