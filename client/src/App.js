import './App.css'
import React, { useContext, useState } from 'react'
import { DataContext } from './components/DataContext'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login' 
import Logout from './pages/Logout'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [isParent, setIsParent] = useState(null)
  
  
  const [userInfo, setUserInfo] = useState(
    {
        name: 'David',
        favColor: 'red',
        favBook: 'Game of Thrones',
        favFood: 'Xiao Long Bao',
        choresList: []
    }
    )
  const [chore, setChore] = useState(
    {
        name: 'Shovel Snow',
        description: 'Shovel the snow',
        pointsEarned: '50',
        isComeplete: false
    }
  )  

            // <ComponentA />
            // <ComponentB />
            // <ComponentC />          
  return (
    <div className="App">
       <DataContext.Provider value={{ userInfo, setUserInfo, chore, setChore, isLoggedIn, setIsLoggedIn}}> 
          <Header/>
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='about' element={ <About />} />
              <Route path='login' element={ <Login />} />
              <Route path='logout' element={ <Logout />} />

              
            </Routes>
       </DataContext.Provider>     
    </div>   
  );
}

export default App;
