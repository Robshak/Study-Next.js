"use client";

import { useScrollY } from "@/hooks/useScrollY.hook";
import styles from "./Up.module.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const scrollY = useScrollY();

    useEffect(() => {
        controls.start({ opacity: scrollY / (document.body.scrollHeight - window.innerHeight) });
    }, [scrollY, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.div
            onClick={scrollToTop}
            className={styles["up"]}
            initial={{ opacity: 0 }}
            animate={controls}
        >
            <ButtonIcon
                icon={"up"}
                appearance={"primary"} />
        </motion.div>
    );
};