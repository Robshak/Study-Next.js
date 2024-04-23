import { API } from "@/app/API";
import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";

export async function getMenu(firstCategory: TopLevelCategory): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: "POST",
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({ "content-type": "application/json" })
    });
    return res.json();
}