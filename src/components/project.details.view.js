import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/project.details.view.css";
import { Tabs, Tab } from "react-bootstrap";

export default class projectsDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, name: "abc", description: "high priority", status: "pending" },
        { id: 2, name: "def", description: "low priority", status: "on-going" }
      ],
      sprints: [
        {
          id: 1,
          name: "sprint1",
          description: "high priority",
          status: "pending"
        },
        { id: 2, name: "s2", description: "low priority", status: "on-going" }
      ],
      teamMembers: [
        { id: 1, name: "ashna" },
        { id: 2, name: "yash" }
      ],
      displayBlock: [
        { id: 1, name: "abc", description: "high priority", status: "pending" },
        { id: 2, name: "def", description: "low priority", status: "on-going" }
      ],
      taskChosen: "tasks"
    };
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getMyProjects = this.getMyProjects.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
    this.getAllteamMembers = this.getAllteamMembers.bind(this);
    this.getAllSprints = this.getAllSprints.bind(this);
    this.getProjectReport = this.getProjectReport.bind(this);
  }
  /*
  componentDidMount() {

  }*/

  getAllTasks() {
    var allTasks = [
      { id: 1, name: "all project" },
      { id: 2, name: "def" }
    ];
    this.setState({ displayBlock: this.state.tasks, taskChosen: "tasks" });
  }
  getAllSprints() {
    this.setState({ displayBlock: this.state.sprints, taskChosen: "sprint" });
  }
  getAllteamMembers() {
    this.setState({ displayBlock: this.state.teamMembers, taskChosen: "team" });
  }
  viewDetails() {
    this.props.history.push({
      pathname: "/sprintDetails"
    });
  }
  getMyProjects() {
    var myProjects = [{ id: 1, name: "my project" }];
    this.setState({ projects: myProjects, addProject: false });
  }

  getProjectReport(){
    this.props.history.push({
        pathname: "/projectReport"
      });
  }

  render() {
    let navBar;
    console.log("all this");
    console.log(this.state.taskChosen);
    if (this.state.taskChosen == "sprint" || this.state.taskChosen == "tasks") {
      navBar = (
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="flex-column"
        >
          <Tab eventKey="all" title="All"></Tab>
          <Tab eventKey="notStarted" title="Not started"></Tab>
          <Tab eventKey="onGoing" title="On Going"></Tab>
          <Tab eventKey="completed" title="Completed"></Tab>
        </Tabs>
      );
    }
    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Target Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <div onClick={this.getAllTasks}>
                <Nav.Link href="#alltasks">Tasks</Nav.Link>
              </div>
              <div onClick={this.getAllSprints}>
                <Nav.Link href="#getAllSprints">Sprints</Nav.Link>
              </div>
              <div onClick={this.getAllteamMembers}>
                <Nav.Link href="#getTeamMembers">Team members</Nav.Link>
              </div>
              <div onClick={this.getProjectReport}>
                <Nav.Link href="#features">Project Report</Nav.Link>
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
        </div>
        <div className="Projects">
          <div className="btn-group">{navBar}</div>
          <div className="todoItem" styles={{ display: "inline-block" }}>
            {this.state.displayBlock.map(project => (
              <li key={project.id} onClick={this.viewDetails}>
                {project.name}
                <button className="View Details" onClick={this.viewDetails}>
                  Sprint Details
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
