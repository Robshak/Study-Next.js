"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import cn from "classnames";
import { ButtonIcon } from "@/Components/ButtonIcon/ButtonIcon";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Search } from "@/Components/Search/Search";
import Menu from "../../menu/menu";
import { AppContextProvider } from "../../Context/app.context";

export default function Header({ menuList, className, ...props }: HeaderProps): JSX.Element {
    const [opened, setOpened] = useState<boolean>(false);
    const router = usePathname();
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReduceMotion ? 1 : 0,
            x: "100%"
        }
    };

    return (
        <header className={cn(className, styles["header"])} {...props}>
            <Link href={"/"} className={styles["logo"]}>
                <img src="/logo.svg" alt="logo" />
            </Link>
            <ButtonIcon
                icon={"menu"}
                appearance={"white"}
                onClick={() => setOpened(true)} />
            <motion.div
                className={styles["mobile-menu"]}
                variants={variants}
                initial={opened ? "opened" : "closed"}
                animate={opened ? "opened" : "closed"}>
                <div>
                    <AppContextProvider menu={menuList}>
                        <Link href={"/"} className={styles["logo"]}>
                            <img src="/logo.svg" alt="logo" />
                        </Link>
                        <Search className={styles["search"]}></Search>
                        <Menu menuList={menuList}></Menu>
                    </AppContextProvider>
                </div>
                <ButtonIcon
                    icon={"close"}
                    appearance={"white"}
                    className={styles["menu-close"]}
                    onClick={() => setOpened(false)} />
            </motion.div>
        </header>
    );
}
