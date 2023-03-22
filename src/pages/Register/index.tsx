import React from 'react'
import {
  Box,
  TextField,
  Typography,
  Button,
  FormHelperText,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/system';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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


const FormLabel = styled(Box)({
  color: '#000000',
})

type RegisterDetail = {
  username: string;
  password: string;
  fullname: string;
  gender: string;
};

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDetail>();

  const onSubmit: SubmitHandler<RegisterDetail> = (data) => console.log(data);
  return (
    <Wrapper>
      <Card>
        <CardHeader>
          <HeaderText>Register</HeaderText>
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
                label="Email Address"
                error={Boolean(errors?.username)}
                {...register('username', {
                  required: true,
                })}
              />
              <FormHelperText id="component-error-text">
                {errors.username?.type === 'required' &&
                  'Username is required!'}
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
              <TextField
                fullWidth
                type="text"
                margin="dense"
                variant="standard"
                label="Fullname"
                error={Boolean(errors.fullname)}
                {...register('fullname', {
                  required: true,
                })}
              />
              <FormHelperText id="component-error-text">
                {errors.fullname?.type === 'required' &&
                  'Fullname is required!'}
              </FormHelperText>
            </Item>

            <Item>
              <FormLabel> Gender </FormLabel>
              <RadioGroup
                row
                defaultValue="Male"
                {...register('gender', {
                    required:true,
                })}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
              </RadioGroup>
            </Item>
            <Item>
              <Button fullWidth type="submit" variant="contained">
                Register
              </Button>
            </Item>
            <Item>
                 <Link to="/login">Login</Link>
              </Item>
          </FormControl>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
export default React.memo(Register);
