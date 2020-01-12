import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class welcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: "abc" },
        { id: 2, name: "def" }
      ],
      addProject : true
    };
    this.viewDetails = this.viewDetails.bind(this);
    this.viewActivities = this.viewActivities.bind(this);
    this.getAllProjects = this.getAllProjects.bind(this);
    this.getMyProjects = this.getMyProjects.bind(this);
    this.getTeamOKR = this.getTeamOKR.bind(this)
  }
  /*
  componentDidMount() {

  }*/
  viewDetails() {
      console.log("comes")
    this.props.history.push({
      pathname: "/projectDetails",
      state: { projectName: "abc", projectDescription: "A good project" }
    });
  }

  viewActivities() {
    this.props.history.push({
      pathname: "/projectDetails"
    });
  }

  getAllProjects() {
    var allProjects = [
      { id: 1, name: "all project" },
      { id: 2, name: "def" }
    ];
    this.setState({ projects: allProjects ,addProject: false});
  }

  getMyProjects() {
    var myProjects = [{ id: 1, name: "my project" }];
    this.setState({ projects: myProjects, addProject: false });
  }

  getTeamOKR() {
    var myProjects = [{ id: 1, name: "my project" }];
    this.setState({ projects: myProjects, addProject: false });
  }
  
  render() {
    console.log("this", this.state.projects);

    return (
        <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Target Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav pullRight className="ml-auto">
      <Nav.Link href="#home">LogIn</Nav.Link>
      <Nav.Link href="#link">SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <div>
        <Jumbotron>
  <h1>Hello!</h1>
  <p>
    We make target tracking easier :) 
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
</div>
</div>
    )};

}
