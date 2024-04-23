import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/Courses.svg";
import ServicesIcon from "./icons/Services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {
        route: "courses",
        name: "Cources",
        icon: <CoursesIcon />,
        id: TopLevelCategory.Courses
    },
    {
        route: "services",
        name: "Services",
        icon: <ServicesIcon />,
        id: TopLevelCategory.Services
    },
    {
        route: "books",
        name: "Books",
        icon: <BooksIcon />,
        id: TopLevelCategory.Books
    },
    {
        route: "products",
        name: "Products",
        icon: <ProductsIcon />,
        id: TopLevelCategory.Products
    }
];