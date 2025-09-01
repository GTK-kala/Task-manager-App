import {Images} from '../../assets/data'

const NavBar = () => {
  return (
    <div className="container">
        <div className="left-container">
            <img src={Images.option_icon} alt="" />
            <p>ProTasks</p>
        </div>
        <div className="center-container">
           <h1>Tasks</h1>
        </div>
        <div className="right-container">
           <div className='inner-container'>
             <img src={Images.add_icon} alt="" />
             <button>Create Tasks</button>
           </div>
        </div>
    </div>
  )
}

export default NavBar