import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Account } from './modules/Account/Account'
import NavBar from './components/NavBar/NavBar'
import Dashboard from './modules/Dashboard/Dashboard'
import Settings from './modules/Settings/Settings'

const App = (): React.ReactElement => {
  return (
    <div className="m-4 p-4">
      <h1>React Typescript Webpack Template</h1>
      <BrowserRouter>
        <div className="flex flex-col gap-4">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
