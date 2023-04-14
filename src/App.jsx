import { createContext, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
export const AppContext = createContext()
function App() {
  const[pomodoro,setPomodoro] = useState(60)
  const[shortBreak,setShortBreak] = useState(30)
  const[longBreak,setLongBreak] = useState(45)
  

  const changeType=()=>{
    if(pomodoro!==null){return pomodoro}
    if(shortBreak!==null){return shortBreak}
    if(longBreak!==null){return longBreak}
  }
  const [value, setValue] = useState(changeType());
  return (
    <div className="App">
      <AppContext.Provider value={{value, setValue, pomodoro,setPomodoro, shortBreak,setShortBreak, longBreak,setLongBreak,changeType}}>
    <Header/>
    <Content/>
    </AppContext.Provider>
    </div>
  )
}

export default App
