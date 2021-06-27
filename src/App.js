// import './App.css';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

//Icons
import AdjustIcon from '@material-ui/icons/Adjust';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function App() {
  return (
   <div>
     <AppBar position = "static">
       <Toolbar>
         <AdjustIcon/>

         <Typography variant = "h5">
           Hello
         </Typography>

       </Toolbar>
     </AppBar>
   </div>
  );
}

export default App;
