import { useSwitch } from "./context"
import './App.css';


function Toggle(){
  const {value,change} = useSwitch()

    return(
        <div className={value=="white"?"App":"App2"}>
        <button onClick={change} className={value=="white"?"btn1":"btn2"}> Change Theme</button>
        </div>
    )}


    export {Toggle }