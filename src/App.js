import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home.js';
import Appointment from './pages/Home/Appointment/Appointment/Appointment.js';
import Login from './pages/Login/Login/Login.js';
import Register from './pages/Login/Register/Register.js';
import AuthProvider from './contexts/AuthProvider/AuthProvider.js';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute.js';
import Dashboard from './pages/Dashbord/Dashbord/Dashbord.js';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>

            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>



            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            {/* <Route path="/dashboard">
              <Register></Register>
            </Route> */}

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
