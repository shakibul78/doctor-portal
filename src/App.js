import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home.js';
import Appointment from './pages/Home/Appointment/Appointment/Appointment.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
