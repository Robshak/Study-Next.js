import { Metadata } from "next";
import { getPage } from "@/api/page";
import { notFound } from "next/navigation";
import { getMenu } from "@/api/menu";
import { getProducts } from "@/api/products";

export const metadata: Metadata = {
    title: "course"
};

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap(m => m.pages.map(p => "/courses/" + p.alias));
}

export default async function Course({ params }: { params: { alias: string } }): Promise<JSX.Element> {
    const page = await getPage(params.alias);
    if (!page) {
        notFound();
    }
    const product = await getProducts(page);

    return (
        <>
            {product?.length}
        </>
    );
}
