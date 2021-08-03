import React, {useState} from 'react'
import PlaylistCard from '../components/PlaylistCard'
import Artist from '../classes/Artist'
import PlaylistDisplay from '../components/PlaylistDisplay'

import { Box, Card, CardContent, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(16),
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    playlistSpace: {
        marginTop: theme.spacing(5),
    }
}))

{/**To-dos:
 -Add padding at the top and bottom of the box
 */}
 

const PlaylistPage = () => {
    const classes = useStyles()
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)

    const playlist = {
        "BillieEillish": new Artist(
            "Billie Eillish",
            "Album Name",
            "bad guy"
        ),
        "BTS": new Artist(
            "BTS",
            "IDOL",
            "Love Yourself: Answer"
        )
    }

    return (
        <div className = {classes.space}>
            <Box width = "92%">
                <Card>
                    <Grid
                        container 
                        direction = "row"
                        justify = "flex-start"
                    >
                        <Grid item>
                            <CardContent>
                                <PlaylistCard onClick = {() => setSelectedPlaylist(true)}/>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>

                <Card className = {classes.playlistSpace}>
                    {selectedPlaylist ? <PlaylistDisplay playlist = {selectedPlaylist}/> : null}
                </Card>
            </Box>
        </div>
    )
}

export default PlaylistPage
