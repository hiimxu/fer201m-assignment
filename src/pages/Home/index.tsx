import React from 'react';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { Link, useParams } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { listMovieSelector } from '~/redux/selectors/movieSelector';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getListMovie } from '~/redux/actions/creators/movies';

const cx = classNames.bind(styles);
type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function Home() {
    const { data: movies } = useSelector(listMovieSelector);

    const { typeId } = useParams();

    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        if (typeId) {
            dispatch(
                getListMovie({
                    search: '',
                    typeMovieId: typeId,
                }),
            );
        } else {
            dispatch(
                getListMovie({
                    search: '',
                    typeMovieId: '',
                }),
            );
        }
    }, [typeId, dispatch]);

    return (
        <div className={cx('content')}>
            <div className={cx('list-movie')}>
                {movies?.map((m: any) => (
                    <div className={cx('list-movie-item')}>
                        <Link to="/detail/:movieId">
                            <Image
                                src={m.imageurl}
                                alt=""
                                className={cx('movie-item-img')}
                            />
                        </Link>
                        <div className={cx('movie-item-detail')}>
                            <Link to="/detail/:movieId">
                                <h3 className={cx('item-title')}>{m.title}</h3>
                            </Link>

                            <div className={cx('movie-item-born')}>
                                Năm: <span>{m.release}</span>
                            </div>
                            <div className={cx('movie-item-type')}>
                                Thể loại: <span>{m.type.name}</span>
                            </div>
                            <div className={cx('movie-item-score')}>
                                <span>Điểm:</span>{' '}
                                <Rating
                                    name="read-only"
                                    value={m.rate}
                                    readOnly
                                />
                            </div>
                            <div className={cx('movie-item-btn')}>
                                <Link to="/detail/:movieId">
                                    <Button variant="contained">
                                        Đánh giá
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
