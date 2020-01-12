import React, { Component } from "react";
import { Button, Navbar, Nav, FormControl, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import httpService from '../services/httpServices';
var { ProgressBar } = require("react-bootstrap");

export default class addProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(evt){
        this.setState({
          name: evt.target.value,
        });
  }

  handleDesChange(evt){
    this.setState({
        description: evt.target.value,
    });
}

async handleSubmit(evt) {
    evt.preventDefault();

    if(this.state.name && this.state.description)
    {
        console.log("USER PROJECTS")
        this.props.history.push('/projects')
        await httpService.post('/okr/1/projects/add', { name: this.state.name, details: this.state.description });
    }
    else
    {
        return this.setState({ error: 'Wrong input' });
    }    
  }


  render() {
    return (
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="name">Name</label>
          <input
            type="text"
            data-test="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label className="description">Description</label>
          <input
            type="text"
            data-test="description"
            value={this.state.description}
            onChange={this.handleDesChange}
          />

          <input type="submit" value="Submit" data-test="submit" />
        </form>
      </div>
      </div>

    );
  }
}
