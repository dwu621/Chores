import React, { useContext, useEffect } from 'react'
import { DataContext } from '../components/DataContext'
import ChildCard from '../components/ChildCard'
import axios from 'axios'

const Home = () => {
    const { 
        // BASE_URL,
        isLoggedIn, 
        currentUser, 
        children, 
        isParent, 
        showChild,
        allUsers,
        setChildren,
        isChild,
        setChores,
        getAllUsers
    } = useContext(DataContext)
    
    // create child card
    // iterate through users to show all child
    // click childcard to go to childpage
    
    console.log('children',children)

    // const getAllUsers = async () => {
    //     const res = await axios.get(`${BASE_URL}/user`)
    //     setAllUsers(res.data.users)
    //     console.log('getAllUsers', res.data.users)
    // }
    
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
          let res = await axios.get(`/api/chore`)
          console.log('getAllChores',res.data.chores)
          setChores(res.data.chores)
        }

    useEffect(() => {
        getAllUsers()
        getAllChores()
        
      }, [])

    useEffect(() => {
        getChildren()
    },[]) 
    
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back {currentUser.userName}</h1> : <h1>please log in</h1>}
            {isParent && isLoggedIn && (
            <div className='isParent'>
                <div className='children'>
                    <h2>Click on Child to assign Chores</h2>
                    <section className='container-grid'>
                    {
                    children.map((child) => (
                        <ChildCard
                        key={child._id}
                        userName={child.userName}
                        // pointsEarned={child.pointsEarned}
                        choresList={child.choresList}
                        onClick={() => showChild(child._id)}
                        />
                    ))
                    }  
                    </section>
                </div>
            </div>
            )}
            {!isChild && isLoggedIn&& (
                <div className='isChild'>
                    
                    
                    
                </div>
            )}
        </div>
 
        
    )
}

export default Home