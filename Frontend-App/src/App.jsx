import Home from "./pages/Home"
import NavBar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'
import DashBoard from "./pages/DashBoard"
import { Routes , Route } from 'react-router-dom'
import TaskPages from "./pages/TaskPages"
import Accounts from "./pages/Accounts"

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/TaskPage" element={<TaskPages />} />
        <Route path="/account" element={<Accounts />} />
      </Routes>
    </>
  )
}

export default App