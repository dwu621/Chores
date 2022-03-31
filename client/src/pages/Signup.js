import React, { useState, useContext, useEffect } from "react"
import { DataContext } from "../components/DataContext"
import axios from "axios"




const Signup = () => {
    const {
        BASE_URL,
        allUsers,
        setAllUsers,

    } = useContext( DataContext )
    
    const [newUser, setNewUser] = useState({
        userName: '',
        password: '',
        isParent: false,
        isChild: false
    })

    // const getAllUsers = async () => {
    //     const res = await axios.get(`${BASE_URL}/user`)
    //     setAllUsers(res.data.users)
    //     console.log('getAllUsers', res.data.users)
    // }

    useEffect(() => {
        // getAllUsers()
        console.log(newUser)
    })

    const handleChange = (e, name) => name === 'userInput' ? 
    setNewUser({...newUser, userName: e.target.value}) : 
    name === 'passwordInput' ? 
    setNewUser({...newUser, password: e.target.value}) : 
    name === 'userType' && e.target.value === 'isParent' ?
    setNewUser({...newUser, isParent: true, isChild: false}) :
    setNewUser({...newUser, isParent: false, isChild: true})
    
    const createNewUser = async () => {
        await axios.post(`${BASE_URL}/user`, newUser)
        console.log('created newUser')
    }
    
    return (
        <div >
            <h1>Create New User</h1>
            <label>Username:</label>
                <input type='text' name='userInput' value={newUser.userName} onChange={(e) => handleChange(e, e.target.name)} />
                <br />
                <label>Password:</label>
                <input type='password' name='passwordInput' value={newUser.password} onChange={(e) => handleChange(e, e.target.name)} />
                <br/>
            <label>Type of User: </label>
            <input type="radio" value='isParent' name="userType" onChange={(e) => handleChange(e, e.target.name)} /> Parent
            <input type="radio" value='isChild' name="userType" onChange={(e) => handleChange(e, e.target.name)} /> Child
            <br/>
            <button onClick={createNewUser}>Create New User</button>
        </div>
       
    )

}

export default Signup