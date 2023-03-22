import React from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    FormHelperText,
    FormControl,
} from '@mui/material';
import { styled } from '@mui/system';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { login } from '~/redux/actions/creators/auth';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(-135deg,#c850c0,#4158d0)',
});

const Card = styled(Box)({
    width: 660,
    borderRadius: 50,
    background: 'rgba(255,255,255, 0.6)',
});

const CardHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    background: 'rgba(255,255,255, 0.2)',
    borderRadius: '50px 50px 0 0 ',
});

const HeaderText = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 700,
});

const CardBody = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 80px 80px 80px',
    borderRadius: '50px 50px 0 0 ',
});

const Item = styled(Box)({
    width: '100%',
    padding: '10px 0',
});

type LoginDetail = {
    email: string;
    password: string;
};

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDetail>();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<LoginDetail> = (data) => {
        const successCallback = () => {
            // window.location.reload();
            navigate('/');
        };
        dispatch(login({ ...data, successCallback }));
    };

    return (
        <Wrapper>
            <Card>
                <CardHeader>
                    <HeaderText>Login</HeaderText>
                </CardHeader>
                <CardBody onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error fullWidth>
                        <Item>
                            <TextField
                                fullWidth
                                type="email"
                                margin="dense"
                                variant="standard"
                                aria-describedby="component-error-text"
                                label="Email"
                                error={Boolean(errors?.email)}
                                {...register('email', {
                                    required: true,
                                    maxLength: 50,
                                })}
                            />

                            <FormHelperText id="component-error-text">
                                {errors.email?.type === 'required' &&
                                    'Email is required!'}
                                {errors.email?.type === 'maxLength' &&
                                    'Email must be less than 50 character!'}
                            </FormHelperText>
                        </Item>
                        <Item>
                            <TextField
                                fullWidth
                                type="password"
                                margin="dense"
                                variant="standard"
                                label="Password"
                                error={Boolean(errors.password)}
                                {...register('password', {
                                    required: true,
                                    pattern:
                                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/i,
                                })}
                            />
                            <FormHelperText id="component-error-text">
                                {errors.password?.type === 'required' &&
                                    'Password is required!'}
                                {errors.password?.type === 'pattern' &&
                                    'Password must be 8 to 40 character!'}
                            </FormHelperText>
                        </Item>
                        <Item>
                            <Button fullWidth type="submit" variant="contained">
                                Login
                            </Button>
                        </Item>
                    </FormControl>
                </CardBody>
            </Card>
        </Wrapper>
    );
}
export default React.memo(Login);
