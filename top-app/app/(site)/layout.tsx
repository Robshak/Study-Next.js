import type { Metadata } from "next";
import Footer from "./Layout/Footer/Footer";
import Sidebar from "./Layout/Sidebar/Sidebar";
import styles from "./page.module.css";
import { Up } from "@/Components";
import Header from "./Layout/Header/Header";
import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { firstLevelMenu } from "@/helpers/helpers";

export const metadata: Metadata = {
    title: "Site content",
    description: "My description"
};

const allTopLevelCategory: TopLevelCategory[] = firstLevelMenu.map(flm => flm.id);

export default async function SiteLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const menuList = await Promise.all(allTopLevelCategory.map(category => getMenu(category)));

    return (
        <div className={styles["wrapper"]}>
            <Header menuList={menuList} className={styles["header"]} />
            <Sidebar menuList={menuList} className={styles["sidebar"]} />
            <div className={styles["body"]}>
                {children}
            </div>
            <Footer className={styles["footer"]} />
            <Up></Up>
        </div>
    );
}
