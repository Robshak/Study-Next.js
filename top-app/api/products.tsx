import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";

export async function getProducts(page: TopPageModel): Promise<ProductModel[] | null> {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find", {
        method: "POST",
        body: JSON.stringify({
            category: page.category,
            limit: 10
        }),
        headers: new Headers({ "content-type": "application/json" })
    });
    if (!res.ok) {
        return null;
    }
    return res.json();
}