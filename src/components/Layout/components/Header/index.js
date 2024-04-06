import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { SearchIcon, XIcon, LoadingIcon } from "~/Icons";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx("search")}>
                    <form className={cx("form-search")}>
                        <input
                            placeholder="Search"
                            className={cx("input-search")}
                        />
                        <button className={cx("clear")}>
                            <XIcon width="16px" height="16px" />
                        </button>
                        <span className={cx("loading")}>
                            <LoadingIcon width="16px" height="16px" />
                        </span>
                        <button className={cx("search-btn")}>
                            <SearchIcon width="24px" height="24px" />
                        </button>
                    </form>
                </div>
                <div className={cx("header-right-container")}>
                    <div className={cx("upload")}></div>
                    <div className={cx("message")}></div>
                    <div className={cx("notifications")}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
