import React from 'react'
import { Avatar, Card, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 130,
        width: 130,
    },
    content: {
        flex: '1 0 auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(6),
        paddingBottom: theme.spacing(3),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    playIcon: {
        height: 38, 
        width: 38,
    },
    root: {
        display: 'flex',
        width: 280,
        height: 130,
    },
}))

const SongCard = () => {
    const classes = useStyles()

    return (
       <Card className = {classes.root}>
           <Avatar variant = "square" className = {classes.avatar}/>
           <div className = {classes.details}>
               <CardContent className = {classes.content}>
                   <Typography component = "h5" variant = "h6">
                       Song Title
                   </Typography>
                   <Typography variant = "subtitle1" color = "textSecondary">
                       Artist Name
                   </Typography>
               </CardContent>
               <div className = {classes.controls}>
                    <IconButton aria-label = "play/pause">
                        <PlayArrowIcon className = {classes.icon}/>
                    </IconButton>
               </div>
           </div>
       </Card>
    )
}

export default SongCard
