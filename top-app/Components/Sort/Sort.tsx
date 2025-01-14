"use client";

import { SortEnum, SortProps } from "./Sort.props";
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";
import cn from "classnames";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles["sort"], className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={cn(styles["category"], {
                    [styles["active"]]: sort == SortEnum.Rating
                })}
            >
                <SortIcon className={styles["icon"]} />По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn(styles["category"], {
                    [styles["active"]]: sort == SortEnum.Price
                })}
            >
                <SortIcon className={styles["icon"]} />По цене
            </span>
        </div>
    );
};