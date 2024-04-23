// import styles from "./Sidebar.module.css";
import { getMenu } from "@/api/menu";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SidebarProps } from "./Sidebar.props";
import { ClientMenu } from "../../ClientMenu/clientMenu";

const allTopLevelCategory: TopLevelCategory[] = [
    TopLevelCategory.Courses,
    TopLevelCategory.Services,
    TopLevelCategory.Books,
    TopLevelCategory.Products
];

export default async function Sidebar({ branchOpen, ...props }: SidebarProps): Promise<JSX.Element> {
    const menuList = await Promise.all(allTopLevelCategory.map(category => getMenu(category)));

    return (
        <div {...props}>
            <ClientMenu branchOpen={branchOpen} menuList={menuList}></ClientMenu>
        </div>
    );
}
