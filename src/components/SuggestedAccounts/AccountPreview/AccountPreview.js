import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccoutPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8127a90836df54ac78790462c5bb8a77~c5_100x100.jpeg?x-expires=1667365200&x-signature=ZsgeGWfBTZxTZBI73E%2Bs%2Bpsry%2F4%3D"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary small>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>giadinhtruyenhinh</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Gia Đình Truyền Hình</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>8.2M </strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

AccoutPreview.propTypes = {};

export default AccoutPreview;
