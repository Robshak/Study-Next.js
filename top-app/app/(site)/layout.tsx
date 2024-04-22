import type { Metadata } from "next";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Sidebar from "./Layout/Sidebar/Sidebar";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Site content",
    description: "My description"
};

export default function SiteLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles["wrapper"]}>
            <Header className={styles["header"]} />
            <Sidebar className={styles["sidebar"]} />
            <div className={styles["body"]}>
                {children}
            </div>
            <Footer className={styles["footer"]} />
        </div>
    );
}
