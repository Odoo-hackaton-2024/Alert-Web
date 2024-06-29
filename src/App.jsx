import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { colors } from './theme/theme'
import Auth from './pages/Auth'
import AlertMap from './components/AlertMap'
import MapViewer from './pages/MapViewer'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  setTimeout(() => {
    setLoggedIn(true)
  }, 3000)

  return (
    <>
      {
        loggedIn 
        ? 
        <MapViewer />
        :
        <Auth />
      }
    </>
  )
}

export default App
