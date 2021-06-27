import React from 'react'
import { Button } from '@material-ui/core'

const GroupButton = () => {
    return (
        <div>
            <Button variant = "contained" color = "primary" disableElevation>My Playlists</Button>
            <Button variant = "contained" color = "primary" disableElevation>Artists</Button>
            <Button variant = "contained" color = "primary" disableElevation>Genre</Button>
            <Button variant = "contained" color = "primary" disableElevation>Top 50</Button>



        </div>
    )
}

export default GroupButton
