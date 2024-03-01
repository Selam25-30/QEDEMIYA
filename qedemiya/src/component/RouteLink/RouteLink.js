import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import './RouteLinks.css'
import { Tilt } from 'react-tilt';
import logo from './logo.PNG'
// import Logo from '../Logo/logo.png'
const RouteLink = () => {
    return (
        <div> 
            <nav className='ba hed' >
                <div className='' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                     <div className=''>
                        <Tilt className="w-40 br Tilt shadow-5">
                            <div className='Tilt-inner'><img src={logo} alt='smile'></img> </div>
                        </Tilt>
                    </div>
                    <h3 className='b center f2 ma3 gold hover-white'>QEDEMIYA WEB APP</h3>
                    <h4 className='b center f5 grow pa2 ma1 gold hover-white '>REGISTER</h4>
                    {/* <h4 className='b center f5 grow pa2 ma1 gold hover-white '>SIGN IN</h4> */}
                    <Link to='SignIn'><p className='f4 pa2 link no-underline hover-white b gold pointer grow'>Sign In</p> </Link>
                </div>
                 <div className='shadow-2'>
                    {/* <img src={Logo} alt='logo' style={{width: '150px', height: '100px'}}></img> */}
                    <h4 className='pa1 b f5 gold hover-white '>Manage Your Time with Qedemiya</h4>
                <div className='' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Link to='/'><p className='f4 link no-underline hover-white b gold pointer grow'>Home</p> </Link>
                    <Link to='/Product'><p className='f4 link hover-white gold b pointer grow'>Service</p></Link>
                    <Link to='/About'> <p className='f4 link hover-white gold b pointer grow'>About</p> </Link>
                    <Link to='/Contact'><p className='f4 link hover-white gold b pointer grow'>Contact</p></Link>
                </div>    
                </div> 
            </nav>
            <Outlet />
        </div> 
    )
}

export default RouteLink;