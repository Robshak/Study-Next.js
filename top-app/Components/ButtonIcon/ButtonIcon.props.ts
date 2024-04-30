import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from "./up.svg";
import close from "./close.svg";
import menu from "./menu.svg";

export const icons = {
    up,
    close,
    menu
};

export type IconType = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconType;
    appearance: "primary" | "white";
}