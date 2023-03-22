import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Button, Typography, Stack, TextField, Box } from '@mui/material';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '~/redux/selectors/authSelector';
import { logout } from '~/redux/actions/creators/auth';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getListMovie } from '~/redux/actions/creators/movies';

const cx = classNames.bind(styles);
type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function Header() {
    const [search, setSearch] = React.useState('');

    const { account } = useSelector(authSelector);

    const { typeId } = useParams();

    const dispatch: AppDispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    React.useEffect(() => {
        setSearch('');
    }, [typeId]);

    const handleSearch = () => {
        dispatch(
            getListMovie({
                search: search,
                typeMovieId: typeId || '',
            }),
        );
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Stack direction="row" spacing={4}>
                    <Link to="/">
                        <Typography variant="h5">Movie</Typography>
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <NavLink
                            to="/"
                            className={(nav) => cx({ active: nav.isActive })}
                        >
                            <Typography>Home</Typography>
                        </NavLink>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField
                        size="small"
                        value={search}
                        placeholder="Nhập tên phim cần tìm"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <Button variant="outlined" onClick={() => handleSearch()}>
                        Search
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
