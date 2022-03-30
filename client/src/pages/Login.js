import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../components/DataContext'
import { useNavigate } from 'react-router-dom'


// input form to collect data
// map through users to match username
// set loggedin to true
// set current user to username
// set isParent to user.isParent
// navigate back home



const Login = () => {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, isParent, setIsParent, allUsers } = useContext( DataContext )
    const [checkUser, setCheckUser] = useState({
        userName: '',
        password: ''
    })
    
    
    useEffect(() => {
        console.log('Login page', allUsers)
        console.log(checkUser)
        console.log(currentUser)
    })

    const handleChange = (e, name) => name === 'userInput' ? setCheckUser({...checkUser, userName: e.target.value}) : setCheckUser({...checkUser, password: e.target.value})

    const auth = () => {
        let authUser = allUsers.find((user) => {
            return user.userName === checkUser.userName && user.password === checkUser.password  
        })
        if(authUser) {
            setCurrentUser(authUser)
            setIsParent(authUser.isParent)
            setIsLoggedIn(true)
            navigate('/')
        } else {console.log('Invalid username or password')}
       
    }
    
    
    return (
        <div>
            
                <label>Username:</label>
                <input type='text' name='userInput' value={checkUser.userName} onChange={(e) => handleChange(e, e.target.name)} />
                <br />
                <label>Password:</label>
                <input type='password' name='passwordInput' value={checkUser.password} onChange={(e) => handleChange(e, e.target.name)} />
                <br/>
                <button onClick={auth}>Login</button>
            
            {isLoggedIn && <h1>You've successfully logged in</h1>}
           
        </div>
    )
}

export default Login

