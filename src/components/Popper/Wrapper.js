import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function wrapper({ children }) {
    return <li className={cx("wrapper")}>{children}</li>;
}

export default wrapper;
