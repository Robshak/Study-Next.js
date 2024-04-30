import Menu from "../../menu/menu";
import { SidebarProps } from "./Sidebar.props";
import { AppContextProvider } from "../../Context/app.context";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Search } from "@/Components/Search/Search";


export default async function Sidebar({ menuList, className, ...props }: SidebarProps): Promise<JSX.Element> {

    return (
        <div {...props} className={cn(styles["sidebar"], className)}>
            <AppContextProvider menu={menuList}>
                <Link href={"/"} className={styles["logo"]}>
                    <img src="/logo.svg" alt="logo" />
                </Link>
                <Search className={styles["search"]}></Search>
                <Menu menuList={menuList}></Menu>
            </AppContextProvider>
        </div>
    );
}
