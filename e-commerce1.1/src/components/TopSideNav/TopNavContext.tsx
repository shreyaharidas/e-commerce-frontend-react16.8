import React, { ReactNode, createContext, useState } from "react";
import { ToggleContextProps } from "./types";

const ToggleSideBar=createContext({
   toggle:true,
   toggleFunction:()=>{}
})


const ToggleContext = ({children}:ToggleContextProps) => {

    const [toggle, setToggle] = useState(true);

    // const toggleFunction = {
    //     toggle: toggle,
    //     setToggle: () => setToggle(!toggle), // Toggles the value on button click
    //   };

    const toggleFunction=()=>{
        setToggle((prev)=>!prev);
    }

    return(
        <ToggleSideBar.Provider value={{toggleFunction, toggle}}>{children}</ToggleSideBar.Provider>
    )
}

export default ToggleContext
export {ToggleSideBar};


