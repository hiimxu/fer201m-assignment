import React, { useState } from 'react'
import { TextField, Button, Container, Grid, Box } from '@mui/material'
import {styled} from '@mui/system'
import classNames from 'classnames/bind'
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Wrapper = styled(Box)({
    backgroundColor: 'red',
})

const cx = classNames.bind(styles)

export default function Login() {

    const [username, setUsername] = useState<string | number>();
    const [password, setPassword] = useState<string | number>();

    const checkAccount = false;

    return (
        <div >
            <TextField label="Outlined" variant="outlined" />
            <div className={cx("btn")}>
                <Button variant="contained" color='error'>Contained</Button>
            </div>

            <Container maxWidth="md">
                <Grid container >
                    <Grid item sm={3}>
                        <Wrapper>
                                demo style
                                {
                                  checkAccount ? <Link to="/">hello acc</Link> : <Link to="/">Dang nhap</Link>
                                }
                        </Wrapper>
                    </Grid>
                    <Grid item sm={9} color="primary" >Right</Grid>
                </Grid>
                 </Container>
        
            
        </div>
    )
}
