import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ tag, children, className, ...props }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(className, {
                [styles["p1"]]: tag == "p1",
                [styles["p2"]]: tag == "p2",
                [styles["p3"]]: tag == "p3"
            })}
            {...props}
        >
            {children}
        </p>
    );
};