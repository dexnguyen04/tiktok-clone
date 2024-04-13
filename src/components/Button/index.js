import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ to, href, onclick, children }) {
    // let Component = "button";

    // const classes = cx("wrapper");

    return (
        <button className={cx("wrapper")}>
            <span>{children}</span>
        </button>
    );
}

export default Button;
