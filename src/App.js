import React from "react";
import projectsView from './components/projects.view';
import projectsDetailsView from './components/project.details.view';
import tasksDetailsView from './components/task.view';
import sprintDetailsView from './components/sprint.view';
import okrDetailsView from './components/okr.js';
import okrProjectsView from './components/okr.projects.view';
import { Route, BrowserRouter as Router } from "react-router-dom";
import projectReportView from './components/project.report.view';
import welcomePage from "./components/welcomePage";
import addProject from "./components/addProject";
import Login from "./components/login"
import { Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/projects" component={projectsView} />
          <Route exact path="/projectDetails" component={projectsDetailsView} />
          <Route exact path="/sprintDetails" component={sprintDetailsView}/>
          <Route exact path="/taskDetails" component={tasksDetailsView}/>
          <Route exact path="/LoginPage" component={Login}/>
          <Route exact path="/RegisterPage"/>
          <Route exact path="/okrDetails" component={okrDetailsView}/>
          <Route exact path="/okrProjectsView" component={okrProjectsView}/>
          <Route exact path="/projectReport" component={projectReportView}/>
          <Route exact path="/addProject" component={addProject}/>
          <Route exact path="/" component={welcomePage}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
