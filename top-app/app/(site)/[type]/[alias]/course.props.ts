import { MenuItem } from "@/interfaces/menu.interface";
import { TopPageModel } from "@/interfaces/page.interface";

export interface CourseProps {
    menu: MenuItem[];
    firstCategory: number;
    page: TopPageModel;
}