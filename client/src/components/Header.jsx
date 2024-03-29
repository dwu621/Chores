import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext';

const Header = () => {
    const { isLoggedIn, currentUser  } = useContext(DataContext)
    
    return (
        <header>
           <nav>
            {isLoggedIn && <Link to='/'>{currentUser.userName}</Link>}
           <Link to='/'>Home</Link>
           <Link to='about'>About</Link>
           {(!isLoggedIn) ? (<Link to='login'>Login</Link>) : (<Link to='logout'>Logout</Link>) }
            
            
           </nav>
        </header>
    )
}

export default Header