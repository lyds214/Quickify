import React from 'react'
import { Avatar, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    card: {
        height: 250,
        width: 235,
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        height: 180,
        width: 200,
    },
}))

const Playlist = () => {
    const classes = useStyles()

    return (
        <div>
            <Card className = {classes.card}>
                <CardContent>
                    <Grid 
                        container
                        justify = "center"
                        alignItems = "center"
                        spacing = {2}
                    >
                        <Grid item>
                            <Avatar variant = "rounded" className = {classes.rounded}></Avatar>
                        </Grid>
                        <Grid item>
                            <Typography>Playlist Name</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Playlist
