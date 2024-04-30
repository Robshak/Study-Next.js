import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import AdvantagesIcon from "./Advantages.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles["advantage"]}>
                    <AdvantagesIcon />
                    <div className={styles["title"]}>{a.title}</div>
                    <div className={styles["vline"]} />
                    <div className={styles["description"]}>{a.description}</div>
                </div>
            ))}
        </>
    );
};