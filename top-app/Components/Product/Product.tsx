"use client";

import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";
import { declOfNum, numberToRub } from "@/helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewFrom } from "../ReviewFrom/ReviewFrom";
import { motion } from "framer-motion";

export const Product = motion(forwardRef((
    { product, className }: ProductProps,
    ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
    const [reviewOpened, setReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {
            opacity: 1,
            height: "auto"
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const scrollToReview = () => {
        setReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <div ref={ref}>
            <Card className={cn(className, styles["product"])}>
                <div className={styles["logo"]}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles["title"]}>{product.title}</div>
                <div className={styles["price"]}>
                    {numberToRub(product.price)}
                    {product.oldPrice && <Tag
                        className={styles["old-price"]}
                        color={"green"}>
                        {numberToRub(product.price - product.oldPrice)}
                    </Tag>}
                </div>
                <div className={styles["credit"]}>
                    {numberToRub(product.credit)}/<span className={styles["month"]}>мес</span>
                </div>
                <div className={styles["rating"]}><Rating rating={product.reviewAvg ?? product.initialRating}></Rating></div>
                <div className={styles["tags"]}>
                    {product.categories.map(c => {
                        return <Tag key={c} color="ghost" className={styles["category"]}>{c}</Tag>;
                    })}
                </div>
                <div className={styles["price-title"]}>Цена</div>
                <div className={styles["credit-title"]}>Кредит</div>
                <div className={styles["rate-title"]}>
                    <a
                        href="#ref"
                        onClick={scrollToReview}
                    >{product.reviewCount} {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}</a>
                </div>
                <Divider className={styles["hr"]} />
                <div className={styles["description"]}>{product.description}</div>
                <div className={styles["feature"]}>
                    {product.characteristics.map(c => (
                        <div className={styles["characteristics"]} key={c.name}>
                            <span className={styles["characteristics-name"]}>{c.name}</span>
                            <span className={styles["characteristics-dots"]}></span>
                            <span className={styles["characteristics-value"]}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles["advBlock"]}>
                    {product.advantages &&
                        <div className={styles["advantages"]}>
                            <div className={styles["advTitle"]}>Преимущества</div>
                            <div>{product.advantages}</div>
                        </div>
                    }
                    {product.disadvantages &&
                        <div className={styles["disadvantages"]}>
                            <div className={styles["advTitle"]}>Недостатки</div>
                            <div>{product.disadvantages}</div>
                        </div>
                    }
                </div>
                <Divider className={styles["hr"]} />
                <div className={styles["actions"]}>
                    <Button appearance="primary">Узнать подробнее</Button>
                    <Button
                        appearance="ghost"
                        arrow={reviewOpened ? "down" : "right"}
                        className={styles["review-button"]}
                        onClick={() => setReviewOpened(s => !s)}
                    >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div
                className={styles["reviews-wrapper"]}
                variants={variants}
                initial={"hidden"}
                animate={reviewOpened ? "visible" : "hidden"}
            >
                <Card color="blue" className={cn(styles["reviews"])}
                    ref={reviewRef}>
                    <div className={styles["reviews-content"]}>
                        {product.reviews.map(r => (
                            <Review
                                review={r}
                                key={r._id}
                                className={styles["review"]} />
                        ))}
                    </div>
                    <Divider></Divider>
                    <ReviewFrom productId={product._id}></ReviewFrom>
                </Card>
            </motion.div>
        </div>
    );
}));