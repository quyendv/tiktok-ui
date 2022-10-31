import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccoutItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8127a90836df54ac78790462c5bb8a77~c5_100x100.jpeg?x-expires=1667365200&x-signature=ZsgeGWfBTZxTZBI73E%2Bs%2Bpsry%2F4%3D"
                alt="avatar"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>giadinhtruyenhinh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Gia Đình Truyền Hình</p>
            </div>
        </div>
    );
}

AccoutItem.propTypes = {};

export default AccoutItem;
