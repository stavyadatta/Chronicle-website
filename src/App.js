import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MainPage from './MainPage.js';

function MainPageRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
    </Switch>
  )
}

function App() {
  let route = <MainPageRoutes />;
  return (
    <Router> {route} </Router>
  );
}

export default App;
