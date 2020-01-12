import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  FormControl,
  Form,
  Row,
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import "../styles/projects.view.css";
import httpService from "../services/httpServices";
import MaterialTable from "material-table";

export default class projectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: [],
      projects: [],
      addProject: true,
      taskChosen: "projects"
    };
    this.viewDetails = this.viewDetails.bind(this);
    this.viewActivities = this.viewActivities.bind(this);
    this.getAllProjects = this.getAllProjects.bind(this);
    this.getMyProjects = this.getMyProjects.bind(this);
    this.getTeamOKR = this.getTeamOKR.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  async componentDidMount() {
    var projects = await httpService.get("/okr/1/projects/all");
    this.setState({
      allProjects: projects[0]["okr"]["projects"],
      projects: projects[0]["okr"]["projects"]
    });
  }
  viewDetails() {
    console.log("comes");
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
      { id: 1, name: "all 1", description: "A good one", status: "Pending" },
      { id: 2, name: "def", description: "A good one", status: "Completed" }
    ];
    this.setState({
      projects: this.state.allProjects,
      addProject: false,
      taskChosen: "projects"
    });
  }

  async getMyProjects() {
    var myProjects = await httpService.get('/user/1/projects');
    console.log(myProjects)
    
    this.setState({
      projects: myProjects,
      addProject: false,
      taskChosen: "myProjects"
    });
  }

  getTeamOKR() {
    
    this.props.history.push({
      pathname: "/okrDetails"
    });
  }

  handleSelect(key) {
    if (key === "addProject") {
      this.props.history.push({
        pathname: "/addProject"
      });
    } else if (key === "notStarted") {
        var notStarted = this.state.allProjects.filter( function (project) {
            return project.state === "NOT_STARTED"});
      this.setState({projects: notStarted});
    }
    else if(key === "onGoing"){
        var onGoing = this.state.allProjects.filter( function (project) {
            return project.state === "STARTED"});
      this.setState({projects: onGoing});
    }
    else if(key === "completed"){
        var completed = this.state.allProjects.filter( function (project) {
            return project.state === "FINISHED"});
      this.setState({projects: completed});
    }

  }
  render() {
    let addbutton, navBar;
    if (this.state.taskChosen == "projects") {
      navBar = (
        <Tabs
          className="tabsLeft"
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="flex-column"
          onSelect={this.handleSelect}
        >
          <Tab eventKey="all" title="All"></Tab>
          <Tab eventKey="notStarted" title="Not started"></Tab>
          <Tab eventKey="onGoing" title="On Going"></Tab>
          <Tab eventKey="completed" title="Completed"></Tab>
          <Tab eventKey="addProject" title="Add Project"></Tab>
        </Tabs>
      );
    }
    console.log(this.state.projects);
    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Target Tracker</Navbar.Brand>
            <Nav className="mr-auto">
              <div onClick={this.getAllProjects}>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
                <Nav.Link href="#myprojects">My Projects</Nav.Link>
              </div>
              <div onClick={this.getTeamOKR}>
                <Nav.Link href="#okrdetails">Team OKR</Nav.Link>
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
        <Row>
          <Col sm={1.5}>{navBar}</Col>
          <div className="projectView" styles={{ display: "inline-block" }}>
            {this.state.projects.map(project => (
              <li
                key={project.id}
                onClick={this.viewDetails}
                styles={{ display: "inline-block" }}
              >
                {project.name} &nbsp; &nbsp;
                {project.details} &nbsp; &nbsp;
                <button className="View Details" onClick={this.viewDetails}>
                  Project Details
                </button>
              </li>
            ))}
          </div>
        </Row>
      </div>
    );
  }
}
