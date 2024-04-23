import Link from "next/link";
import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer {...props} className={cn(styles["wrapper"], className)}>
            <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
            <Link href="#" target="_blank">Пользовательское соглашение</Link>
            <Link href="#" target="_blank">Политика конфиденциальности</Link>
        </footer>
    );
}
