import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import { VerifyBadgeIcon, DotsHorizontal } from "~/Icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <span className={cx("span-avata")}>
                <img
                    className={cx("img-avata")}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580~c5_300x300.webp?lk3s=a5d48078&x-expires=1713171600&x-signature=GAH19G80Y8Yw6VJKVoo5%2FNlB%2BWA%3D"
                    alt="Hoa"
                />
            </span>
            <div className={cx("item-wrapper")}>
                <div className={cx("user-info")}>
                    <h4 className={cx("user-name")}>
                        hoaa.hanassii
                        <span className={cx("verify-badge")}>
                            <VerifyBadgeIcon width="1.4rem" height="1.4rem" />
                        </span>
                    </h4>
                    <p className={cx("nick-name")}>Đào Lê Phương Hoa</p>
                </div>
                <div className={cx("action-container")}>
                    <div className={cx("more-container")}>
                        <DotsHorizontal width="1.6rem" height="1.6rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
