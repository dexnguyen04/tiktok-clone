import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ children }) {
    return (
        <Tippy
            offset={[15, 8]}
            delay={[0, 500]}
            arrow
            placement="top-end"
            interactive
            theme="light"
            render={(attrs) => (
                <ul className={cx("more-menu-items")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx("account-title")}>Account</div>
                        <AccountItem />
                    </PopperWrapper>
                </ul>
            )}
        >
            {children}
        </Tippy>
    );
}

export default MenuItem;
