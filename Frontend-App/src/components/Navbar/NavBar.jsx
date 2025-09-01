import {Images} from '../../assets/data'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="container">
        <div className="left-container">
            <img src={Images.option_icon} alt="" />
            <h2>ProTasks</h2>
        </div>
        <div className="center-container">
           <h1>Tasks</h1>
        </div>
        <div className="right-container">
           <div className='inner-container'>
             <button> 
                <img src={Images.add_icon} alt="" />
                <p>Create Tasks</p>
             </button>
           </div>
        </div>
    </div>
  )
}

export default NavBar