import logo from './logo.svg';
import './App.css';
import {Toggle} from ".//toggle"
import { ToggleProvider } from "./context"
import {useSwitch} from ".//context"

function App() {
  const{value,change} = useSwitch()
  console.log(value)
  return (
   <ToggleProvider>
    
      <Toggle></Toggle>
    
    </ToggleProvider>
  );
}

export default App;
