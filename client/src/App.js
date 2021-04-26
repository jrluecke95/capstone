import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from './pages/Home'
import './App.css'
import Login from "./pages/Login";
import Register from './pages/Register'
import Navbar from "./components/Navbar";
import CreatePlate from "./pages/CreatePlate";
import { UserProfile } from "./pages/UserProfile";
import ProfileView from "./pages/ProfileView";
import FollowSection from "./components/FollowSection";
import Post from "./components/MiddleContainer/Post";
import SearchPost from "./pages/SearchPost";



function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <Container style={{ margin: '2em auto' }}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/CreatePlate'>
                <CreatePlate />
              </Route>
              <Route path='/profile'>
                <UserProfile />
              </Route>
              <Route path='/:id/proSection'>
                <ProfileView />
              </Route>
              <Route path='/post'>
                <SearchPost />
              </Route>
              {/* <Route path="/#">
                <Page />
              </Route>
              <Route path="/#">
                <Page />
              </Route>             */}
            </Switch>
          </Container>
      </Router>
        
    </div>
  );
}

export default App;