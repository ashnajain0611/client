import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.details.view.css";
import httpService from '../services/httpServices';
import { Tabs, Tab } from "react-bootstrap";
var { ProgressBar } = require('react-bootstrap');


export default class okrDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      okr: [],
    };   
    this.viewProjects = this.viewProjects.bind(this);
  }

  async componentDidMount(){
      this.setState({ okr: await httpService.get('/okr/all')})
      console.log(this.state.okr)
  }
  viewProjects(){
    this.props.history.push({
        pathname: "/okrProjectsView"
      });
  }

  render() {
    return (
        <div className="Projects">
            OKR Details
          <div className="okrDetails" styles={{ display: "inline-block" }}>
            {this.state.okr.map(okr => (
              <li key={okr.id} onClick={this.viewProjects} styles={{ display: "inline-block" }}>
                <span>{okr.name}</span>&nbsp;&nbsp;
                <span>{okr.description}</span>&nbsp;&nbsp;
                <span>{okr.status}</span>&nbsp;&nbsp;
                <ProgressBar now={okr.projectbar} />
              </li>
            ))}
          </div>
          </div>
    );
  }
}
