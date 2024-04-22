// import { Ptag } from "@/Components";
import { getMenu } from "@/api/menu";

export async function Menu(): Promise<JSX.Element> {
    // const [rating, setRating] = useState<number>(4);
    const menu = await getMenu(0);

    return (
        <div>
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </div>
    );
}
