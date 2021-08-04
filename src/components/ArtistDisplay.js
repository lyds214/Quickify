import React from 'react'
import {Avatar, Grid, makeStyles, Typography} from '@material-ui/core'
import SongCard from './SongCard'

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 100,
        width: 100,
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),

    },
    spacing: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}))

const ArtistDisplay = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid 
                container
                direction = "row"
                justifyContent = "center"
                alignItems = "center"
                spacing = {3}

            >
                <Grid item>
                    <Avatar className = {classes.avatar}/>
                </Grid>
                <Grid item>
                    <Typography>Artist's Name</Typography>
                </Grid>
            </Grid>
            <Grid 
                container
                direction = "column"
                justifyContent = "center"
                spacing = {3}
                className = {classes.spacing}
            >
                <Grid container item spacing = {1}>
                    <SongCard/>
                </Grid>
                <Grid container item spacing = {1}>
                    <SongCard/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default ArtistDisplay
