import classNames from 'classnames/bind';
import React from 'react';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

type Props = {
    children?: React.ReactNode;
};

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }: Props) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar /> <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
