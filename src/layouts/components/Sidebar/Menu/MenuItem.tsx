import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type Props = {
    title: string;
    to: string;
    icon?: JSX.Element;
    activeIcon?: JSX.Element;
};

function MenuItem({ title, to }: Props) {
    return (
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
