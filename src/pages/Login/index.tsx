import React, { useState } from 'react'
import { TextField, Button, Container, Grid, Box } from '@mui/material'
import {styled} from '@mui/system'

const Wrapper = styled(Box)({
    backgroundColor: 'red',
})

export default function Login() {

    const [username, setUsername] = useState<string | number>();
    const [password, setPassword] = useState<string | number>();


    return (
        <div >

            <TextField label="Outlined" variant="outlined" />
            <div className="btn">
                <Button variant="contained" color='error'>Contained</Button>
            </div>

            <Container maxWidth="md">
                <Grid container >
                    
                    <Grid item sm={3}>
                        <Wrapper>
                                demo style
                        </Wrapper>
                    </Grid>
                    <Grid item sm={9} color="primary" >Right</Grid>
                </Grid>
            </Container>
        </div>
    )
}
