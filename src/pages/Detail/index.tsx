import React from 'react'
import Image from '~/components/Image'
import styles from './Detail.module.scss'
import className from 'classnames/bind'
import { Grid, Rating, Button } from '@mui/material';
import { Link} from 'react-router-dom';


const cx = className.bind(styles);

export default function Detail() {
  return (
    <div className={cx('detail-movie')}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Image src='' alt='' className={cx('image-detail')} />
        </Grid>
        <Grid item xs={8}>
          <div className={cx('header-detail')}>
            <div className={cx('detail-name')}>
              <h3>Vua hải tặc</h3>
            </div>
            <div className={cx('type-movie')}>
              <span>Thể loại:</span> <span>Hoạt hình</span>
            </div>
            <div className={cx('score-movie')}>
              <span>Điểm đánh giá:</span>
              <span> <Rating name="read-only" value={5} readOnly /></span>
            </div>

            <div className={cx('type-movie')}>
              <span>Mô tả:</span>
              <p></p>
            </div>

            <div className={cx('movie-item-btn')}>
              <Link to='/detail/:movieId'>
                <Button variant="contained">Đánh giá</Button>
              </Link>
            </div>

            <div>
              
            </div>
          </div>

          
          <hr />
          <div className={cx('comment')}>
            <h3>Bình luận:</h3>
            <div className={cx('comment-item')}>
                <span className={cx('username')}>Bùi Xuân Linh:</span>
                <p className={cx('comment-detail')}>Rất thích bộ phim này</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
