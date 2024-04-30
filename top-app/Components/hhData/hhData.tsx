import { hhDataProps } from "./hhData.props";
import styles from "./hhData.module.css";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg";
import { numberToRub } from "@/helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: hhDataProps): JSX.Element => {
    return (
        <div className={styles["hh"]}>
            <Card className={styles["hh-count"]}>
                <div className={styles["title"]}>Всего вакансий</div>
                <div className={styles["count-value"]}>{count}</div>
            </Card>
            <Card className={styles["salary"]}>
                <div>
                    <div className={styles["title"]}>Junior</div>
                    <div className={styles["salary-value"]}>{numberToRub(juniorSalary)}</div>
                    <div className={styles["rate"]}>
                        <RateIcon className={styles["filled"]} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles["title"]}>Middle</div>
                    <div className={styles["salary-value"]}>{numberToRub(middleSalary)}</div>
                    <div className={styles["rate"]}>
                        <RateIcon className={styles["filled"]} />
                        <RateIcon className={styles["filled"]} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={styles["title"]}>Senior</div>
                    <div className={styles["salary-value"]}>{numberToRub(seniorSalary)}</div>
                    <div className={styles["rate"]}>
                        <RateIcon className={styles["filled"]} />
                        <RateIcon className={styles["filled"]} />
                        <RateIcon className={styles["filled"]} />
                    </div>
                </div>
            </Card>
        </div>
    );
};