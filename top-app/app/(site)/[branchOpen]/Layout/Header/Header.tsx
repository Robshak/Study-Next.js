// import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

export default function Header({ ...props }: HeaderProps): JSX.Element {
    return (
        <div {...props}>
            Header
        </div>
    );
}
