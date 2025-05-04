import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Dash from './components/dashboard/Dash';
import "./App.css"
import Employe from './components/employe/Employe';
import Task from './components/task/Task';
import Project from './components/project/Project';

const App = () => {
  return (
    <Router>
      <Dash/>
      <Routes>
        <Route path='/' element={<Employe/>}></Route>
        <Route path='/Task' element={<Task/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
      </Routes>
    </Router>
  )
}

export default App