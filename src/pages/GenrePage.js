import React from 'react'
import Genre from '../components/Genre'

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

{/**To-dos:
 -Add padding at the top and bottom of the box
 */}
 
const GenrePage = () => {
    const classes = useStyles()

    return (
        <div className = {classes.space}>
            <Box width = "92%">
                <Card>
                    <Grid
                        container 
                        direction = "row"
                        justify = "center"
                    >
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <Genre/>
                            </CardContent>
                        </Grid>

                    </Grid>
                   
                </Card>
            </Box>
        </div>
    )
}

export default GenrePage
