import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    upload = false,
    rounded = false,
    small = false,
    large = false,
    disabled = false,
    onClick,
    children,
    ...passProps
}) {
    let Component = "button";
    const props = {
        onClick,
        ...passProps,
    };

    // console.log("Button");

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
        to = "";
        href = "";
    }

    // Remove event listener when btn is disabled
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }

    const classes = cx("wrapper", {
        primary,
        outline,
        upload,
        rounded,
        small,
        large,
        disabled,
    });

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;
