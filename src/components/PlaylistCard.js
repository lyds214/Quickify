import { React, useState } from 'react'
import { Avatar, ButtonBase, Card,  CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

import PlaylistDisplay from '../components/PlaylistDisplay'

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

const PlaylistCard = () => {
    const classes = useStyles()
    const [show, setShow] = useState(false)

    return (
        <div>
            <Card className = {classes.card}>
                <ButtonBase className = {classes.cardAction}>
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

export default PlaylistCard
