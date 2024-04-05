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
                    <input placeholder="Search" />
                    <button className={cx("clear")}>
                        <XIcon />
                    </button>
                    <LoadingIcon />
                    <button className={cx("search-btn")}>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
