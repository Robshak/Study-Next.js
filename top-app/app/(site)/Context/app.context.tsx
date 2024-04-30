"use client";

import { MenuItem } from "@/interfaces/menu.interface";
import { ReactNode, createContext, useState } from "react";

export interface IAppContext {
    menu: MenuItem[][];
    setMenu?: (newMenu: MenuItem[][]) => void;
}

export const AppContext = createContext<IAppContext>({
    menu: []
});

export const AppContextProvider = ({ menu, children }: IAppContext & { children: ReactNode }): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[][]>(menu);

    const setMenu = (newMenu: MenuItem[][]) => {
        setMenuState(newMenu);
    };

    return <AppContext.Provider value={{ menu: menuState, setMenu }}>
        {children}
    </AppContext.Provider>;
};