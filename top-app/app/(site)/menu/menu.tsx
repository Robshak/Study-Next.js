"use client";

import { usePathname } from "next/navigation";
import { MenuProps } from "./menu.props";
import { firstLevelMenu } from "@/helpers/helpers";
import Link from "next/link";
import styles from "./menu.module.css";
import cn from "classnames";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { useContext } from "react";
import { AppContext } from "../Context/app.context";
import { motion } from "framer-motion";

export default function Menu({ menuList }: MenuProps): JSX.Element {
    const pathName = usePathname();
    const pathNameSplit = pathName.split("/");
    const firstCategory = firstLevelMenu.find(m => m.route == pathNameSplit[1])?.id ?? TopLevelCategory.Courses;
    const { menu, setMenu } = useContext(AppContext);

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05
            }
        },
        hidden: { marginBottom: 0 }
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 31
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const openMenu = (secondCategory: string) => {
        if (!setMenu) {
            return;
        }
        setMenu(menu.map(m => {
            m = m.map(m => {
                if (m._id.secondCategory == secondCategory) {
                    return { ...m, isOpened: !m.isOpened };
                }
                return m;
            });
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.id}>
                        <Link href={`/${menu.route}`}>
                            <div className={cn(styles["first-level"], {
                                [styles["first-level-active"]]: menu.id == firstCategory
                            })}>
                                {menu.icon}
                                <div>{menu.name}</div>
                            </div>
                        </Link>
                        {menu.id == firstCategory && buildSecontLevel(menu)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecontLevel = (localMenu: FirstLevelMenuItem) => {
        return (
            <div className={styles["second-level-wrapper"]}>
                {menu[localMenu.id].map((m, index) => {
                    if (m.pages.map(p => p.alias).includes(pathNameSplit[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles["second-level"]}
                                onClick={() => openMenu(m._id.secondCategory)}
                            >{m._id.secondCategory}</div>
                            <motion.div
                                className={cn(styles["second-level-block"], {
                                    [styles["second-level-last"]]: index == menuList[localMenu.id].length - 1
                                })}
                                layout
                                variants={variants}
                                initial={m.isOpened ? "visible" : "hidden"}
                                animate={m.isOpened ? "visible" : "hidden"}
                            >
                                {buildThirdLevel(m.pages, localMenu.route)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <motion.div
                    key={p._id}
                    variants={variantsChildren}
                >
                    <Link
                        href={`/${route}/${p.alias}`} className={cn(styles["third-level"], {
                            [styles["third-level-active"]]: `/${route}/${p.alias}` == pathName
                        })}>
                        {p.category}
                    </Link>
                </motion.div>
            ))
        );
    };

    return (
        <nav className={styles["menu"]}>
            {buildFirstLevel()}
        </nav>
    );
}
