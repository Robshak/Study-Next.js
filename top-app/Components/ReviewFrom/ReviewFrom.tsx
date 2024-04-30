"use client";

import { ReviewFromProps } from "./ReviewFrom.props";
import styles from "./ReviewFrom.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { FormEvent, useRef, useState } from "react";
import { API } from "@/app/API";

export const ReviewFrom = ({ productId, className, ...props }: ReviewFromProps): JSX.Element => {
    const [rating, setRating] = useState<number>(0);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const ref = useRef<HTMLFormElement>(null);

    const onSubmit = async (
        e: FormEvent<HTMLFormElement> & {
            target: {
                name: { value: string },
                title: { value: string },
                description: { value: string }
            }
        }
    ) => {
        e.preventDefault();
        const name = e.target.name.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        try {
            if (rating == 0) {
                throw new Error("Не указан рейтиг");
            }
            const res = await fetch(API.review.createDemo, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    title,
                    description,
                    rating,
                    productId
                }),
                headers: new Headers({ "content-type": "application/json" })
            });
            const data = await res.json();
            if (data) {
                setSuccess(true);
                setRating(0);
                ref.current?.reset();
            } else {
                throw new Error("Что-то пошло не так");
            }
        } catch (e: any) {
            console.error(e);
            setError(e.message as string);
        }
    };

    return (
        <form onSubmit={onSubmit}
            ref={ref}
        >
            <div className={cn(styles["review-form"], className)}
                {...props}>
                <Input required name="name" placeholder="Имя" />
                <Input required name="title" placeholder="Заголовок отзыва" className={styles["title"]} />
                <div className={styles["rating"]}>
                    <span>Оценка:</span>
                    <Rating rating={rating} setRating={setRating} isEditable />
                </div>
                <Textarea required name="description" placeholder="Текст отзыва" className={styles["description"]} />
                <div className={styles["submit"]}>
                    <Button appearance="primary">Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {success &&
                <div className={cn(styles["success"], styles["panel"])}>
                    <div className={styles["success-title"]}>Ваш отзыв отправлен</div>
                    <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
                    <CloseIcon
                        onClick={() => setSuccess(false)}
                        className={styles["close"]} />
                </div>
            }
            {error &&
                <div className={cn(styles["error"], styles["panel"])}>
                    <div className={styles["success-title"]}>Произошла ошибка</div>
                    <div>{error}.</div>
                    <CloseIcon
                        onClick={() => setError("")}
                        className={styles["close"]} />
                </div>
            }
        </form>
    );
};