import logo from './logo.svg';
import './App.css';
import Homepage from './view/page/Homepage';
import MajorPage from './view/page/MajorPage';
import {
  BrowserRouter as Router,
  Switch as SW,
  Route,
  Link
} from "react-router-dom";
import Universitypage from './view/page/Universitypage';
import MajorDetail from './view/page/Majordetail';
function App() {
  return (
    <div>
        <Router>
          <div>
            <SW>
              <Route exact path="/">
                <Homepage></Homepage>
              </Route>
              <Route path="/Major">
                <MajorPage></MajorPage>
              </Route>
              <Route path="/University">
                <Universitypage></Universitypage>
              </Route>
              <Route path="/MajorDetail">
                <MajorDetail></MajorDetail>
              </Route>
              <Route path="/UniversityrDetail">
              </Route>
            </SW>
          </div>
        </Router>
    </div>
  );
}

export default App;
