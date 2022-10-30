import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const defaultFn = () => {}; // dùng Fn trống thì k sợ bị lỗi

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; // Cấp cuối, luôn lấy ra cấp cuối và render, lùi về thì xóa cấp cuối khỏi history

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // Khi tắt Menu thì items về cấp đầu chứ k ở mãi cấp cuối trước khi tắt: Reset to first page
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <HeadlessTippy
            // visible
            delay={[0, 200]}
            offset={[12, 8]}
            hideOnClick={hideOnClick} // truyền dạng props sau có cái set true còn nhận
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {/* Tức từ cấp 2 trở đi thì hiện title */}
                        {history.length > 1 && (
                            <Header
                                // title="Language" /* cần fix thêm phần title, nên để thành history[history.length - 1].title hoặc current.title (vì current luôn là phần tử cuối) */
                                title={current.title}
                                onBack={handleBackMenu}
                            />
                        )}

                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetMenu}
        >
            {children}
        </HeadlessTippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
