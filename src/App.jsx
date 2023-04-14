import { createContext, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
export const AppContext = createContext()
function App() {
  const [initialValue,setInitialValue]=useState(60)
  const [value, setValue] = useState(initialValue);
  return (
    <div className="App">
      <AppContext.Provider value={{value, setValue, initialValue,setInitialValue}}>
    <Header/>
    <Content/>
    </AppContext.Provider>
    </div>
  )
}

export default App
