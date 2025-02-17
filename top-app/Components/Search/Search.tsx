"use client";

import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { KeyboardEvent, useState } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/navigation";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();

    const goToSearch = () => {
        router.push(`/search?q=${search}`);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Enter") {
            goToSearch();
        }
    };

    return (
        <div
            className={cn(styles["search"], className)}
            {...props}
        >
            <Input
                className={styles["input"]}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown} />
            <Button
                appearance="primary"
                className={styles["button"]}
                onClick={goToSearch}
            >
                <SearchIcon />
            </Button>
        </div>
    );
};