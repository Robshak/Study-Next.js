"use client";

import { useEffect, useState } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRatting: number) => {
        const updateArray = ratingArray.map((r: JSX.Element, index: number) => {
            return (
                <span
                    className={cn({
                        [styles["editable"]]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(index + 1)}
                >
                    <StarIcon
                        className={cn(styles["star"], {
                            [styles["filled"]]: index < currentRatting
                        })}
                    />
                </span>
            );
        });
        setRatingArray(updateArray);
    };

    const changeDisplay = (index: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(index);
    };

    const onClick = (index: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(index);
    };

    return (
        <div {...props} className={styles["all-stars"]}>
            {ratingArray.map((rating, index) => {
                return <span key={index}>
                    {rating}
                </span>;
            })}
        </div>
    );
};