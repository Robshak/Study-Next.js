"use client";

import { ButtonIconProps, icons } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";
// import Image from "next/image";

export const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
    const IconComp = icons[icon];

    return (
        <button
            className={cn(styles["button"], className, {
                [styles["primary"]]: appearance == "primary",
                [styles["white"]]: appearance == "white"
            })}
            {...props}
        >
            <IconComp></IconComp>
        </button>
    );
};