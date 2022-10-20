import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return (
        // chú ý cách thêm class custom khác so với cách ở Button
        <div className={cx('wrapper', className)}>{children}</div>
    );
}

export default Wrapper;
