import React, { useState } from 'react'
import { Avatar, Button, Card, CardContent, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    artistSpacing: {
        paddingLeft: theme.spacing(2),
    },
    avatar: {
        height: 110,
        width: 110,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(6),
        paddingBottom: theme.spacing(3),
    },
    root: {
        display: 'flex',
        width: 280,
        height: 110,
    },
    
}))

// Play Button Icon
const PlayButton = () => {
    return (
        <div>
            <IconButton>
                <PlayArrowIcon fontSize = "medium"/>
            </IconButton>
        </div>
    )
}

const SongCard = () => {
    const classes = useStyles()
    const [hovering, isHovering] = useState(false)

    const handleMouseOver = () => {
        isHovering(true)
    }
    const handleMouseOut = () => {
        isHovering(false)
    }

    return (
       <Card className = {classes.root}>
            <Avatar 
                variant = "square" 
                className = {classes.avatar} 
                onMouseEnter = {handleMouseOver} 
                onMouseLeave = {handleMouseOut}
            /> {hovering && <PlayButton/>}

            <CardContent>
                <Grid container
                    direction = "row"
                    justifyContent = "center"
                    alignItems = "center"
                    spacing = {1}
                >
                    <Grid item>
                        <Typography 
                            className = {classes.artistSpacing} 
                            component = "h5" 
                            variant = "h6"
                        >
                            Song Title
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            size = "small"
                            className = {classes.artistSpacing}
                        >
                            Artist Name
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
       </Card>
    )
}

export default SongCard
