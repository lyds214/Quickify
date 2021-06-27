// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import Search from './pages/Search'

function App() {
  return (
    <Router>
      <Switch>

        {/** Home Page */}
        <Route exact path ="/">
          <Library/>
        </Route>

        {/** Search Page */}
        <Route path = "/search">
          <Search/>
        </Route>

        {/** Playlist Page */}
        <Route path = "/playlist">
          <Playlist/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
