// import './App.css';
import Header from "./components/Header";
import GroupButton from "./components/GroupButton";

import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'

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
      <CssBaseline/>
        <Header/>
        <GroupButton/>
     </MuiThemeProvider>
  );
}

export default App;
