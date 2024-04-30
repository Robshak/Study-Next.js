import { FirstLevelMenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/cources.svg";
import ServicesIcon from "./icons/services.svg";
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

export function numberToRub(num: number) {
    return new Intl.NumberFormat('ru-Ru', { currency: 'RUB' }).format(
        num
    ) + " ₽";
}

export function declOfNum(num: number, titles: [string, string, string]): string {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(num % 100 > 4 && num % 100 < 20) ? 2 :
        cases[(num % 10 < 5) ? num % 10 : 5]
    ];
}