import Home from "./pages/Home"
import NavBar from './components/Navbar/NavBar'
import SideBar from './components/SideBar/SideBar'
import DashBoard from "./pages/DashBoard"
import { Routes , Route } from 'react-router-dom'
import TaskPages from "./pages/TaskPages"
import Accounts from "./pages/Accounts"
import DisplayTask from "./pages/DisplayTask"
import Hero from "./pages/Hero/Hero"


const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/TaskPage" element={<TaskPages />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/Tasks" element={<DisplayTask />} />
        <Route path="/TaskPage/:id" element={<TaskPages />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App