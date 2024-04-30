import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { getProducts } from "@/api/products";
import { firstLevelMenu } from "@/helpers/helpers";
import { TopPageComponent } from "../../Page-components";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { alias: string, type: string } }): Promise<Metadata> {
    const page = await getPage(params.alias);
    return {
        title: page?.metaTitle
    };
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(m => m.pages.map(p => "/courses/" + p.alias));
}

export default async function ContentByCategory({ params }: { params: { alias: string, type: string } }): Promise<JSX.Element> {
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    const page = await getPage(params.alias);
    if (!page || !firstCategoryItem) {
        notFound();
    }
    const products = await getProducts(page);

    if (!products) {
        notFound();
    }

    return <TopPageComponent
        firstCategory={firstCategoryItem.id}
        page={page}
        products={products}
    />;
}
