import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    styleBtn,
    size,
    disabled = false,
    onClick,
    children,
    className,
    ...passProps
}) {
    let Component = "button";
    const props = {
        onClick,
        ...passProps,
    };

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
        [styleBtn]: styleBtn,
        [size]: size,
        [className]: className,
        disabled,
    });

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;
