import React, {useState} from 'react'
import {Avatar, Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'

import SongCard from '../components/SongCard'
import ArtistDisplay from '../components/ArtistDisplay'

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 100,
        width: 100,
    },
    songSpace : {
        marginTop: theme.spacing(4),
    },
    playlistNameSpace : {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}))

const PlaylistDisplay= () => {

    const classes = useStyles()
    const [artist, setArtist] = useState(false)

    return (
        <div className = {classes.playlistNameSpace}>
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
        
            <Card className = {classes.songSpace} style = {{backgroundColor: '#d9dadb'}} elevation = {0}>
                <CardContent>
                    <Grid
                        container
                        direction = "row"
                        justifyContent = "flex-start"
                        alignItems = "center"
                        spacing = {3}
                    >
                        <Grid item>
                            <SongCard onClick = {() => setArtist(true)}/>
                        </Grid>
                        <Grid item>
                            <SongCard/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card>
                {artist ? <ArtistDisplay artist = {artist}/> : false}
            </Card>
        </div>
       
    )
}

export default PlaylistDisplay
