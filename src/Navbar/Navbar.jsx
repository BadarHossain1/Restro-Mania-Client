import { Link } from 'react-router-dom';
import logo from '../assets/shop/logo.png'

const Navbar = () => {
    const NavList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/order'>Order</Link></li>

    </>
    return (
        <div className='max-w-[1170px] mx-auto '>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 w-[1170px] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavList}
                        </ul>
                    </div>

                    <div className='flex items-center justify-center border btn btn-ghost'>
                        <img src={logo} alt="" className='w-6' />
                        <Link to='/' className=" text-xl font-serif font-extrabold pt-2">Restro-Mania</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;