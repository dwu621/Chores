import React, { useContext, useEffect } from 'react';
import { DataContext } from '../components/DataContext';

const Logout = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext( DataContext )
    
    useEffect(() => {
        setIsLoggedIn(false)
    }, [])
    
    return (
        
        <h1>You've been logged out</h1>
    )
}

export default Logout