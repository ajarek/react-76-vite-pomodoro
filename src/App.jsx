import { createContext, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Setting from './components/Setting'
import SettingModal from './components/SettingModal'
import FullPageLayout from './components/FullPageLayout'
export const AppContext = createContext()
function App() {
  const [initialValue, setInitialValue] = useState(0)
  const [value, setValue] = useState(initialValue)
  const [pomodoro, setPomodoro] = useState(60 * 25)
  const [short, setShort] = useState(60 * 5)
  const [long, setLong] = useState(60 * 15)
  const [toggle, setToggle] = useState(false)

  const toggleSetting = (e) => {
    e.target.className === 'full-page-layout' ||
    e.target.className === 'setting-btn' ||
    e.target.className === 'modal-btn'
      ? setToggle(!toggle)
      : null
  }
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
        {toggle ? (
          <FullPageLayout onClick={toggleSetting}>
            <SettingModal onClick={toggleSetting} />
          </FullPageLayout>
        ) : null}
        <Header />
        <Content />
        <Setting onClick={toggleSetting} />
      </AppContext.Provider>
    </div>
  )
}

export default App
