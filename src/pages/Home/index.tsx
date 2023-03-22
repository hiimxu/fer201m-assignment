import React, { useEffect, useState } from 'react';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getListMovie } from '~/services/movies'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);

export default function Home() {

    const [movies, setMovie] = useState<any>();

    useEffect(() => {
        const getAPI = async () => {
            const response = await getListMovie()
            if (response?.status === 200 && movies) {
                setMovie(response.data.data)
            }
            console.log(movies);
        }
        getAPI();
    }, [])

    return (
        <div className={cx('content')}>
            <div className={cx('list-movie')}>
                {
                    // movies && movies.map(m => (
                        <div className={cx('list-movie-item')}>
                            <Link to='/'>
                                <Image src='' alt='' className={cx('movie-item-img')} />
                            </Link>
                            <div className={cx('movie-item-detail')}>
                                <Link to='/'>
                                    <h3 className={cx('item-title')}>
                                        Vua hải tặc
                                    </h3>
                                </Link>

                                <div className={cx('movie-item-born')}>
                                    Năm: <span>2012</span>
                                </div>
                                <div className={cx('movie-item-type')}>
                                    Thể loại: <span>Hoạt hình</span>
                                </div>
                                <div className={cx('movie-item-score')}>
                                    Điểm: <span>7.65</span>
                                </div>
                                <div className={cx('movie-item-btn')}>
                                    <Link to='/'>
                                        <Button variant="contained">Đánh giá</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    // ))
                }


            </div>
        </div>

    )
}
