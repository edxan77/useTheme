import { createContext, useContext } from "react";
import { useToggle } from "./hook/ToggleHook";


const Context = createContext()

function ToggleProvider({children}){
    const {value,change}  = useToggle();
    return <Context.Provider value={{value,change}}>{children}</Context.Provider>
}

function useSwitch(){
    return useContext(Context)
}

export {ToggleProvider}
export {useSwitch}