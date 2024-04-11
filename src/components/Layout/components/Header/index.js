import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { SearchIcon, XIcon, LoadingIcon } from "~/Icons";
import { wrapper as PopperWrapper } from "~/components/Popper";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 2000);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to={"/"}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                <div className={cx("search")}>
                    <Tippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        theme="light"
                        render={(attrs) => (
                            <div
                                className={cx("search-result")}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>Ket qua</PopperWrapper>
                            </div>
                        )}
                    >
                        <form className={cx("form-search")}>
                            <input
                                placeholder="Search"
                                className={cx("input-search")}
                            />
                            <button className={cx("clear")}>
                                <XIcon width="16px" height="16px" />
                            </button>
                            <span className={cx("loading")}>
                                <LoadingIcon width="12px" height="12px" />
                            </span>
                            <span className={cx("span-Spliter")}></span>
                            <button className={cx("search-btn")}>
                                <SearchIcon width="24px" height="24px" />
                            </button>
                        </form>
                    </Tippy>
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
