import { React, useState } from 'react'
import { Avatar, ButtonBase, Card,  CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    card: {
        height: 250,
        width: 235,
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
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

    const [playlist, setPlaylist] = useState(false)

    const handleClick = () => {
        setPlaylist(true)
    }

    return (
        <div>
            <Card className = {classes.card}>
                <ButtonBase className = {classes.cardAction} onClick = {handleClick}>
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
                </ButtonBase>
            </Card>
        </div>
    )
}

export default Playlist
