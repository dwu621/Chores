import React, { useContext } from 'react'
import { DataContext } from '../components/DataContext'

const Home = () => {
    const { isLoggedIn, setIsLoggedIn  } = useContext(DataContext)
    
    return (
       
           <div>
            {isLoggedIn ? <h1>Welcome back</h1> : <h1>please log in</h1>}
           </div>
 
        
    )
}

export default Home