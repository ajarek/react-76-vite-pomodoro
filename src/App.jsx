import { createContext, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
export const AppContext = createContext()
function App() {
  const [initialValue, setInitialValue] = useState(0)
  const [value, setValue] = useState(initialValue)
  const [pomodoro, setPomodoro] = useState(60 * 25)
  const [short, setShort] = useState(60 * 1)
  const [long, setLong] = useState(60 * 15)

  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          value,
          setValue,
          initialValue,
          setInitialValue,
          pomodoro,
          setPomodoro,
          short,
          setShort,
          long,
          setLong,
        }}
      >
        <Header />
        <Content />
      </AppContext.Provider>
    </div>
  )
}

export default App
