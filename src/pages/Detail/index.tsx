import React from 'react'
import Image from '~/components/Image'
import styles from './Detail.module.scss'
import className from 'classnames/bind'
import {
  Grid,
  Rating,
  Button,
  FormControl,
  TextField
} from '@mui/material';
import { Link } from 'react-router-dom';


const cx = className.bind(styles);

export default function Detail() {
  return (
    <div className={cx('detail-movie')}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Image src='' alt='' className={cx('image-detail')} />
        </Grid>
        <Grid item xs={8}>
          <div className={cx('container-detail')}>
            <div className={cx('detail-name')}>
              <h1>Vua hải tặc</h1>
            </div>
            <div className={cx('type-movie')}>
              <h5>Thể loại:</h5> <span>Hoạt hình</span>
            </div>
            <div className={cx('score-movie')}>
              <h5>Điểm đánh giá:</h5>
              <Rating name="read-only" value={5} readOnly />
            </div>

            <div className={cx('type-movie')}>
              <h5>Mô tả:</h5>
              <p>The flex items are laid out in a
                single line which may cause the flex
                container to overflow. The cross-start is either
                equivalent to start or before depending on the
                flex-direction value. This is the default value.
              </p>
            </div>



            <div className={cx('review')}>
              <h3>Chi tiết đánh giá</h3>
                <p>Điểm đánh giá:</p>
                <Rating name="read-only" />
                <p>Bình luận:</p>
                <TextField
                  rows={7}
                  multiline
                  fullWidth
                  variant="outlined" />
              <div className={cx('btn-comment')}>
                <Link to='/detail/:movieId'>
                  <Button variant="contained">Đánh giá</Button>
                </Link>
              </div>
            </div>

            <hr />

            <div className={cx('comment')}>
              <h3>Bình luận:</h3>
              <div className={cx('comment-item')}>
                <h5 className={cx('username')}>Bùi Xuân Linh:</h5>
                <p className={cx('comment-detail')}>Rất thích bộ phim này</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
