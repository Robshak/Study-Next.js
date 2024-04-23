"use client";

import { PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { ClientMenuProps } from "./clientMenu.props";
import { usePathname } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";

export function ClientMenu({ menuList }: ClientMenuProps): JSX.Element {
    const pathName = usePathname();
    const pathNameSplit = pathName.split("/");
    const firstCategory = firstLevelMenu.find(m => m.route == pathNameSplit[1])?.id ?? TopLevelCategory.Courses;
    const menu = menuList[firstCategory];
    if (pathNameSplit.length < 3) {
        menu[0].isOpened = true;
    }

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(styles["first-level"], {
                                [styles["first-level-active"]]: m.id == firstCategory
                            })}>
                                {m.icon}
                                <div>{m.name}</div>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecontLevel(m.route)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecontLevel = (route: string) => {
        return (
            <div className={styles["second-level-wrapper"]}>
                {menu.map((m, index) => {
                    if (m.pages.map(p => p.alias).includes(pathNameSplit[2])) {
                        m.isOpened = true;
                    }
                    else {
                        m.isOpened = false;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles["second-level"]}>{m._id.secondCategory}</div>
                            <div className={cn(styles["second-level-block"], {
                                [styles["second-level-last"]]: index == menu.length - 1,
                                [styles["second-level-block-active"]]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} className={cn(styles["third-level"], {
                    [styles["third-level-active"]]: `/${route}/${p.alias}` == pathName
                })}>
                    {p.category}
                </Link>
            ))
        );
    };

    return (
        <div className={styles["menu"]}>
            {buildFirstLevel()}
        </div>
    );
}
