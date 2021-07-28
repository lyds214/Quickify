import React from 'react'
import {Avatar, Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'

import SongCard from '../components/SongCard'

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 100,
        width: 100,
    },
    space : {
        marginTop: theme.spacing(4),
    },
}))

const PlaylistDisplay= () => {
    const classes = useStyles()
    return (
        <div>
            <Grid
                container
                direction = "row"
                justifyContent = "flex-start"
                alignItems = "center"
                spacing = {3}
                
            >
                <Grid item>
                    <Avatar variant = "square" className = {classes.avatar}/>
                </Grid>
                <Grid item>
                    <Typography>Playlist Name</Typography>
                </Grid>

            </Grid>
            
            <Card className = {classes.space}>
                <CardContent>
                    <Grid
                        container
                        direction = "row"
                        justifyContent = "flex-start"
                        alignItems = "center"
                        spacing = {3}
                    >
                        <Grid item>
                            <SongCard/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            
        </div>
    )
}

export default PlaylistDisplay
