import './App.css'
import React, { useState, } from 'react'
import { DataContext } from './components/DataContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login' 
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import ChildDetails from './pages/ChildDetails'
import { BASE_URL } from './globals'

const App = () => {
  // const BASE_URL = 'http://localhost:3001/api' || '/api' 
  const [allUsers, setAllUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [isParent, setIsParent] = useState(false)
  const [children, setChildren] = useState([])
  const [thisChild, setThisChild] = useState({})
  const [loading, setLoading] = useState(true)
  const [chores, setChores] = useState([])
  const [thisChildList, setThisChildList] = useState([])
  const [newList, setNewList] = useState({})
  const [isChild, setIsChild] = useState(false)
  
  const navigate = useNavigate()
  
  const getAllUsers = async () => {
    const res = await axios.get(`${BASE_URL}/user`)
    setAllUsers(res.data.users)
    console.log('getAllUsers', res.data.users)
  }

  const getChildren = async () => {
      let children = await allUsers.filter((child) => {
        return child.isChild
      })
      if (children) {
        setChildren(children)
      } else {
        console.log('no children found')
      }
      console.log(children)
  }
  
  const getAllChores = async () => {
   
    let res = await axios.get(`${BASE_URL}/chore`)
    console.log('getAllChores',res.data.chores)
    setChores(res.data.chores)
    console.log('got chores app.js', chores)
 
  }
  
  const showChild = (childId) => {
    navigate(`/child/${childId}`)
  }
  
  return (
    <div className="App">
       <DataContext.Provider value={{ 
        BASE_URL, 
        isLoggedIn, 
        setIsLoggedIn, 
        allUsers, 
        currentUser, 
        setCurrentUser, 
        isParent, 
        setIsParent,
        navigate, 
        children, 
        showChild, 
        thisChild, 
        setThisChild,
        loading,
        setLoading,
        chores,
        setChores,
        thisChildList,
        setThisChildList,
        newList,
        setNewList,
        setAllUsers,
        setChildren,
        isChild,
        setIsChild,
        getAllUsers,
        getChildren,
        getAllChores

       }}> 
          <Header/>
          <main>
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='about' element={ <About />} />
              <Route path='login' element={ <Login />} />
              <Route path='signup'  element={<Signup />} />
              <Route path='logout' element={ <Logout />} />
              <Route path='/child/:id' element={ <ChildDetails />} />
            </Routes>
          </main>
       </DataContext.Provider>     
    </div>   
  );
}

export default App;
