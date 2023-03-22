import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getListTypeMovie } from '~/redux/actions/creators/typeMovie';

import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import { listTypeMovieSelector } from '~/redux/selectors/typeMovieSelector';

type AppDispatch = ThunkDispatch<null, any, AnyAction>;

const cx = classNames.bind(styles);

export default function Sidebar() {
    const dispatch: AppDispatch = useDispatch();

    const { data } = useSelector(listTypeMovieSelector);

    React.useEffect(() => {
        dispatch(getListTypeMovie());
    }, [dispatch]);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <React.Fragment>
                    {data?.map((item: any) => (
                        <MenuItem
                            key={item._id}
                            title={item.name}
                            to={`/typeMovie/${item.name}/${item._id}`}
                        />
                    ))}
                </React.Fragment>
            </Menu>
        </aside>
    );
}
