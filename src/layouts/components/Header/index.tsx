import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Typography, Stack, TextField, Box } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Header() {
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

                    <Button size="small">
                        <Link to="/login">Đăng nhập</Link>
                    </Button>

                    <Button size="small">
                        <Link to="/register">Đăng ký</Link>
                    </Button>
                </Stack>
            </div>
        </header>
    );
}
