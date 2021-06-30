import Header from "./components/Header";
import GroupButton from "./components/GroupButton";
import PlaylistPage from "./pages/PlaylistPage";
import Top50Page from "./pages/Top50Page";
import ArtistPage from "./pages/ArtistPage";
import GenrePage from "./pages/GenrePage";

import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#fff'
    },
    background: {
      default: '#3f51b5'
    }
  }
})

function App() {
  return (
    <MuiThemeProvider theme = {theme}>
      <CssBaseline>
        <Router>
          <Header/>
          <GroupButton/>

          <Switch>
            <Route exact path = "/" component = {PlaylistPage}/>
            <Route path = "/artist" component = {ArtistPage}/>
            <Route path = "/genre" component = {GenrePage}/>
            <Route path = "/top50" component = {Top50Page}/>
          </Switch>
          
        </Router>
      </CssBaseline>
    </MuiThemeProvider>




    // <MuiThemeProvider theme = {theme}>
    //   <CssBaseline/>
    //     <Header/>
    //     <GroupButton/>
    //     <PlaylistPage/>
    //  </MuiThemeProvider>
  );
}

export default App;
