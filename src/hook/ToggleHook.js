import { useState } from "react";

export function useToggle(){
    const [value, setvalue] = useState("white")

    const change = function(){
        if(value == "white"){
            setvalue("black")
          }

          if(value == "black"){
              setvalue("white")
          }
    }

    return{
        value,
        change
    }
}