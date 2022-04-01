import React, { useContext, useEffect } from 'react';
import { DataContext } from '../components/DataContext';

const Logout = () => {
    const { 
        setIsLoggedIn,
        setIsParent,
        setIsChild
     } = useContext( DataContext )
    
    useEffect(() => {
        setIsLoggedIn(false)
        setIsChild(false)
        setIsParent(false)
    }, [])
    
    return (
        
        <h1>You've been logged out</h1>
    )
}

export default Logout