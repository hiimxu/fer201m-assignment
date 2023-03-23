import React from 'react';
import Image from '~/components/Image';
import styles from './Detail.module.scss';
import className from 'classnames/bind';
import { Grid, Rating, Button, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { movieInformationSelector } from '~/redux/selectors/movieSelector';
import { getMovieInfo } from '~/redux/actions/creators/movies';
import {
    getCommentUserSelector,
    getListCommentSelector,
} from '~/redux/selectors/commentSelector';
import { authSelector } from '~/redux/selectors/authSelector';
import {
    getCommentCurrentUser,
    addComment,
    getListComment,
} from '~/redux/actions/creators/comment';
import SuccessDialog from '~/components/Dialog/SuccessDialog';

const cx = className.bind(styles);

type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export default function Detail() {
    const { data } = useSelector(movieInformationSelector);
    const { loading, data: userComment } = useSelector(getCommentUserSelector);
    const { account } = useSelector(authSelector);
    const { data: listComment } = useSelector(getListCommentSelector);

    const [myComment, setMyComment] = React.useState<any>(userComment);

    const [open, setOpen] = React.useState<boolean>(false);

    const { movieId } = useParams();
    const navigate = useNavigate();

    const dispatch: AppDispatch = useDispatch();

    React.useEffect(() => {
        if (movieId) {
            dispatch(getMovieInfo(movieId));
            dispatch(getListComment(movieId));
        }
    }, [movieId, dispatch]);

    React.useEffect(() => {
        if (movieId && account) {
            dispatch(
                getCommentCurrentUser({
                    movieId: movieId,
                    userId: account._id,
                }),
            );
        }
    }, [dispatch, movieId, account]);

    React.useEffect(() => {
        setMyComment({ ...userComment });
    }, [userComment]);

    const handleSubmit = () => {
        if (account) {
            const successCallback = () => {
                setOpen(true);
                if (movieId && account) {
                    dispatch(
                        getCommentCurrentUser({
                            movieId: movieId,
                            userId: account._id,
                        }),
                    );
                }
                if (movieId) {
                    dispatch(getListComment(movieId));
                }
            };
            if (myComment) {
                const { userid, rate, comment, movieid } = myComment;
                const submitObj = {
                    userId: account._id,
                    rate: rate,
                    comment: comment,
                    movieId: movieId,
                };
                dispatch(addComment({ ...submitObj }, successCallback));
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <div className={cx('detail-movie')}>
            <>
                <SuccessDialog
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    title="Comment"
                    content="Send comment successfully."
                />
            </>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Image
                        src={data?.imageurl}
                        alt=""
                        className={cx('image-detail')}
                    />
                </Grid>
                <Grid item xs={8}>
                    <div className={cx('container-detail')}>
                        <div className={cx('detail-name')}>
                            <h1>{data?.title}</h1>
                        </div>
                        <div className={cx('type-movie')}>
                            <h5>Category movie:</h5>{' '}
                            <span>{data?.type?.name}</span>
                        </div>
                        <div className={cx('score-movie')}>
                            <h5>Rate:</h5>
                            <Rating
                                name="read-only"
                                value={data?.rate}
                                readOnly
                            />
                        </div>

                        <div className={cx('type-movie')}>
                            <h5>Description:</h5>
                            <p>{data?.description}</p>
                        </div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : account ? (
                            <div className={cx('review')}>
                                <h3>Review detail</h3>
                                <p>Rate:</p>
                                {myComment?.rate !== undefined ? (
                                    <Rating
                                        value={myComment?.rate}
                                        onChange={(event, newValue) => {
                                            setMyComment((prev: any) => ({
                                                ...prev,
                                                rate: newValue,
                                            }));
                                        }}
                                    />
                                ) : (
                                    <Rating
                                        value={myComment?.rate || 0}
                                        onChange={(event, newValue) => {
                                            setMyComment((prev: any) => ({
                                                ...prev,
                                                rate: newValue,
                                            }));
                                        }}
                                    />
                                )}

                                <p>Comment:</p>
                                <TextField
                                    rows={7}
                                    multiline
                                    fullWidth
                                    variant="outlined"
                                    value={myComment?.comment}
                                    onChange={(e) => {
                                        setMyComment((prev: any) => ({
                                            ...prev,
                                            comment: e.target.value,
                                        }));
                                    }}
                                />
                                <div className={cx('btn-comment')}>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleSubmit()}
                                    >
                                        Comment
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={cx('btn-comment')}>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleSubmit()}
                                    >
                                        Đánh giá
                                    </Button>
                                </div>
                            </>
                        )}

                        <hr />

                        <div className={cx('comment')}>
                            <h3>Bình luận:</h3>
                            {listComment?.map((item: any) => (
                                <div className={cx('comment-item')}>
                                    <h4 className={cx('username')}>
                                        {item.user}:{' '}
                                        <span
                                            style={{
                                                fontWeight: 400,
                                            }}
                                            className={cx('comment-detail')}
                                        >
                                            {item.comment}
                                        </span>
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
