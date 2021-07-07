import React from 'react'
import ArtistAvatar from '../components/ArtistAvatar'

import { Box, Card, CardContent, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    space: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(16),
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}))

const ArtistPage = () => {
    const classes = useStyles()

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
                                <ArtistAvatar/>
                            </CardContent>
                        </Grid>
                    </Grid>
                   
                </Card>
            </Box>
        </div>
    )
}

export default ArtistPage
