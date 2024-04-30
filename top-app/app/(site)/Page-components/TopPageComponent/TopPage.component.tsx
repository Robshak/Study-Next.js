"use client";

import { Advantages, HhData, Htag, Product, Sort, Tag } from "@/Components";
import { TopPageComponentProps } from "./TopPage.component.props";
import styles from "./TopPage.component.module.css";
// import cn from "classnames";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { SortEnum } from "@/Components/Sort/Sort.props";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";
// import { useScrollY } from "@/hooks/useScrollY.hook";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Price });
    // const scrollY = useScrollY();

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort });
    };

    return (
        <>
            <div className={styles["title"]}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="gray" size="m">{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}></Sort>
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (
                    <Product layout key={p._id} product={p}></Product>
                ))}
            </div>
            {firstCategory == TopLevelCategory.Courses &&
                <>
                    <div className={styles["hh-title"]}>
                        <Htag tag="h2">Вакансии - {page.category}</Htag>
                        <Tag color="red" size="m">hh.ru</Tag>
                    </div>
                    {page.hh && <HhData {...page.hh}></HhData>}
                    {page.advantages && page.advantages.length > 0 &&
                        <>
                            <Htag tag="h2">Преимущества</Htag>
                            <Advantages advantages={page.advantages}></Advantages>
                        </>
                    }
                    {page.seoText &&
                        <div
                            className={styles["seo"]}
                            dangerouslySetInnerHTML={{ __html: page.seoText }} />
                    }
                    <Htag tag="h2">Получаемые навыки</Htag>
                    {page.tags.map(t => (
                        <Tag color={"primary"} key={t}>{t}</Tag>
                    ))}
                </>
            }
        </>
    );
};