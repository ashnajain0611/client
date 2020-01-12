import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.details.view.css";
import { Tabs, Tab } from "react-bootstrap";
var { ProgressBar } = require('react-bootstrap');


export default class projectReportView extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          tasks:[
                { id: 1, name: "abc", description: "high priority", status: "pending", progress : 60 },
                { id: 2, name: "def", description: "low priority", status: "on-going" ,progress : 70}
              ],
      }
  }


  render() {
    return (
      
        <div className="Projects">
          <div className="todoItem" styles={{ display: "inline-block" }}>
            {this.state.tasks.map(task => (
              <li key={task.id}>
                {task.name}
                {task.description}
                {task.status}
                <ProgressBar now={task.progress} />
              </li>
            ))}
          </div>
        </div>
    );
  }
}
