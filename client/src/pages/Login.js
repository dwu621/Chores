import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../components/DataContext'


// input form to collect data
// map through users to match username
// set loggedin to true
// set current user to username
// set isParent to user.isParent
// navigate back home

const Login = () => {
    const { 
        isLoggedIn,
        setIsLoggedIn, 
        currentUser, 
        setCurrentUser, 
        setIsParent, 
        allUsers, 
        navigate,
        setIsChild 
    } = useContext( DataContext )
    const [checkUser, setCheckUser] = useState({
        userName: '',
        password: ''
    })
    
    
    useEffect(() => {
        console.log('Login page', allUsers)
        console.log(checkUser)
        console.log(currentUser)
    })

    const handleChange = (e, name) => name === 'userInput' ? 
    setCheckUser({...checkUser, userName: e.target.value}) : 
    setCheckUser({...checkUser, password: e.target.value})

    const auth = () => {
        let authUser = allUsers.find((user) => {
            return user.userName === checkUser.userName && user.password === checkUser.password  
        })
        if(authUser) {
            setCurrentUser(authUser)
            setIsParent(authUser.isParent)
            setIsChild(authUser.isChild)
            setIsLoggedIn(true)
            navigate('/')
        } else {alert('Invalid username or password')}
       
    }
    
    const signup = () => {
        navigate('./signup')
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <label>Username:</label>
                <input type='text' name='userInput' value={checkUser.userName} onChange={(e) => handleChange(e, e.target.name)} />
                <br />
                <label>Password:</label>
                <input type='password' name='passwordInput' value={checkUser.password} onChange={(e) => handleChange(e, e.target.name)} />
                <br/>
                <button onClick={auth}>Login</button>
                <button onClick={signup}>Signup</button>
            </form>
            {isLoggedIn && <h1>You've successfully logged in</h1>}
           
        </div>
    )
}

export default Login

