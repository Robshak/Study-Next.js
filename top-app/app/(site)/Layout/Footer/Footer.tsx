import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer {...props} className={cn(styles["wrapper"], className)}>
            <div className={styles["rights-reserved"]}>
                OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
            </div>
            <a href="#" target="_blank">Пользовательское соглашение</a>
            <a href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
}
