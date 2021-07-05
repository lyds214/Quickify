import React from 'react'
import { Card, CardContent, Container, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    card: {
        height: 250,
        width: 235,
    }
}))

const Genre = () => {
    const classes = useStyles()

    return (
        <div>
            <Container>
                <Card className = {classes.card}>
                    <CardContent>
                        <Typography>Genre Name</Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Genre
