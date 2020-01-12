import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class tasksDetailsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: "abc" , description:"high priority", status:"pending" },
        { id: 2, name: "def" , description:"low priority", status:"on-going" }
      ],
      sprints: [
        { id: 1, name: "sprint1" , description:"high priority", status:"pending" },
        { id: 2, name: "s2" , description:"low priority", status:"on-going" }
      ],
      teamMembers: [
        { id: 1, name: "ashna" },
        { id: 2, name: "yash" }
      ],
    
    };
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getMyProjects = this.getMyProjects.bind(this);
  }
  /*
  componentDidMount() {

  }*/
 
  getAllTasks() {
    var allTasks = [
      { id: 1, name: "all project" },
      { id: 2, name: "def" }
    ];
    this.setState({ tasks: allTasks});
  }

  getAllSprints() {
    var allSprints = [
      { id: 1, name: "all project" },
      { id: 2, name: "def" }
    ];
    this.setState({ tasks: allSprints});
  }

  getAllteamMembers(){
    var allTasks = [
        { id: 1, name: "all project" },
        { id: 2, name: "def" }
      ];
      this.setState({ tasks: allTasks});
  }



  getMyProjects() {
    var myProjects = [{ id: 1, name: "my project" }];
    this.setState({ projects: myProjects, addProject: false });
  }
  render() {
    console.log("this", this.state.projects);
    let addbutton;
    if (this.state.addProject) {
      addbutton = <button onClick={this.redirectAddProjects}>Add Project</button>
    } else {
      addbutton = "";
    }

    return (
      <div>
        <div>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <div onClick={this.getAllTasks}>
                <Nav.Link href="#alltasks">All Tasks</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
                <Nav.Link href="#features">Sprints</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
                <Nav.Link href="#features">Team members</Nav.Link>
              </div>
              <div onClick={this.getMyProjects}>
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
          <br />
          <br />
        </div>
        <div className="Projects">
        {addbutton}
          <div className="todoItem" styles={{ display: "inline-block" }}>
            {this.state.projects.map(project => (
              <li key={project.id} onClick={this.viewDetails}>
                {project.name}
                <button className="View Details" onClick={this.viewDetails}>
                  Project Details
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
