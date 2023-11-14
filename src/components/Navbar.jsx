import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Navbar() {


    return (
        <div>
            <div className="navbar bg-base-100 flex flex-row">
                <div className="navbar w-1/5">

                    {/* mobile menu */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='px-5  btn btn-ghost text-xl font-normal'>Home</Link></li>
                            <li><Link to='/education' className='px-5 btn btn-ghost text-xl font-normal'>Education</Link></li>
                            <li><Link to='/projects' className='px-5 btn btn-ghost text-xl font-normal'>Projects</Link></li>
                            <li><Link to='/contact' className='px-5 btn btn-ghost text-xl font-normal'>Contact</Link></li>

                        </ul>
                    </div>
                    {/* logo */}
                    <img src={Logo} className='w-20 ml-8' alt="Adam Brannon Logo" />
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className=" menu menu-horizontal mr-3">
                        <li className='px-4 text-lg font-semibold normal-case '><Link to='/'>Home</Link></li>
                        <li className='px-4 text-lg font-semibold normal-case'><Link to='/education' >Education</Link></li>
                        <li className='px-4 text-lg font-semibold normal-case'><Link to='/projects'>Projects</Link></li>
                        <li className='px-4 text-lg font-semibold normal-case'><Link to='/contact'>Contact and Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Navbar