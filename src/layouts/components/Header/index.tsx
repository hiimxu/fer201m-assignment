import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Typography, Stack, TextField, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '~/redux/selectors/authSelector';
import { logout } from '~/redux/actions/creators/auth';

const cx = classNames.bind(styles);

export default function Header() {
    const { account } = useSelector(authSelector);

    const dispatch = useDispatch();

    const handleLogout = () => {
        //@ts-ignore
        dispatch(logout());
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Stack direction="row" spacing={4}>
                    <Link to="/">
                        <Typography variant="h5">Movie</Typography>
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <NavLink to="/">
                            <Typography>Trang chủ</Typography>
                        </NavLink>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        size="small"
                        placeholder="Nhập tên phim cần tìm"
                    />
                    <Button size="small" variant="outlined">
                        Tìm
                    </Button>

                    {!account ? (
                        <>
                            <Button size="small">
                                <Link to="/login">Đăng nhập</Link>
                            </Button>

                            <Button size="small">
                                <Link to="/login">Đăng ký</Link>
                            </Button>
                        </>
                    ) : (
                        <Stack direction="row" spacing={1}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography>
                                    Chào mừng: {account && account.fullname}
                                </Typography>
                            </Box>
                            <Button size="small" onClick={() => handleLogout()}>
                                Đăng xuất
                            </Button>
                        </Stack>
                    )}
                </Stack>
            </div>
        </header>
    );
}
