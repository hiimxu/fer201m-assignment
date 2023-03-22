import React, { useEffect, useState } from 'react';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { getListMovie } from '~/services/movies'
import { Link } from 'react-router-dom';
import { Button, Rating } from '@mui/material';

const cx = classNames.bind(styles);

export default function Home() {

    const [movies, setMovie] = useState<any>();

    useEffect(() => {
        const getAPI = async () => {
            const response = await getListMovie()
            if (response?.status === 200 ) {
                setMovie(response.data.data)
            }
            console.log(movies);
        }
        getAPI();
    }, [])

    useEffect(() => {
        console.log(movies);
        
    },[movies])
    return (
        <div className={cx('content')}>
            <div className={cx('list-movie')}>
                {
                    movies?.map((m:any) => (
                        <div className={cx('list-movie-item')}>
                            <Link to='/detail/:movieId'>
                                <Image src={m.imageurl} alt='' className={cx('movie-item-img')} />
                            </Link>
                            <div className={cx('movie-item-detail')}>
                                <Link to='/detail/:movieId'>
                                    <h3 className={cx('item-title')}>
                                       {m.title}
                                    </h3>
                                </Link>

                                <div className={cx('movie-item-born')}>
                                    Năm: <span>{m.release}</span>
                                </div>
                                <div className={cx('movie-item-type')}>
                                    Thể loại: <span>{m.type.name}</span>
                                </div>
                                <div >
                                     <span>Điểm:</span>  <Rating name="read-only" value={m.rate} readOnly />
                                </div>
                                <div className={cx('movie-item-btn')}>
                                    <Link to='/detail/:movieId'>
                                      <Button variant="contained">Đánh giá</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))
                }


            </div>
        </div>

    )
}
