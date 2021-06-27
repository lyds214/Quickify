import React from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        borderRadius: "5em",
    },
   
}))

const GroupButton = () => {
    const classes = useStyles()
    
    return (
        <div className = {classes.button}>
            <Grid 
                container
                direction = "row"
                justify = "center"
                alignItems = "center"
                spacing = {2}
            >
                <Grid item>
                    <Button 
                        variant = "outlined" 
                        color = "primary" 
                        disableElevation
                        className = {classes.button}
                    >
                        My Playlists
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "outlined" 
                        color = "primary" 
                        disableElevation
                        className = {classes.button}
                    >
                        Artists
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "outlined" 
                        color = "primary" 
                        disableElevation
                        className = {classes.button}
                    >
                        Genre
                    </Button>
                </Grid>

                <Grid item>
                    <Button 
                        variant = "outlined" 
                        color = "primary" 
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
