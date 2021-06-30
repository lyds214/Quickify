import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, makeStyles } from '@material-ui/core'


{/**To-Do's:
    1. Make all buttons' size the same
*/}

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        borderRadius: "5em",
        minHeight: '50px',
    },
   
}))

const GroupButton = () => {
    const classes = useStyles()
    
    return (
        <div>
            <Grid 
                container
                direction = "row"
                justify = "center"
                alignItems = "center"
                spacing = {2}
            >
                <Grid item>
                    <Button 
                        variant = "contained" 
                        color = "secondary" 
                        disableElevation
                        className = {classes.button}
                        
                    >
                        Playlists
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "contained" 
                        color = "secondary" 
                        disableElevation
                        className = {classes.button}
                    >
                        Artists
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "contained" 
                        color = "secondary" 
                        disableElevation
                        className = {classes.button}
                    >
                        Genre
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "contained" 
                        color = "secondary" 
                        disableElevation
                        className = {classes.button}
                    >
                        Top 50
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default GroupButton
