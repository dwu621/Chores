import React, { useContext } from 'react'
import { DataContext } from '../components/DataContext'
import ChildCard from '../components/ChildCard'

const Home = () => {
    const { 
        isLoggedIn, 
        currentUser, 
        children, 
        isParent, 
        showChild 
    } = useContext(DataContext)
    
    // create child card
    // iterate through users to show all child
    // click childcard to go to childpage
    
    console.log('children',children)

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
                        pointsEarned={child.pointsEarned}
                        choresList={child.choresList}
                        onClick={() => showChild(child._id)}
                        />
                    ))
                    }  
                    </section>
                </div>
            </div>
            )}
            {!isParent && (
                <div className='isChild'>
                    
                    
                </div>
            )}
        </div>
 
        
    )
}

export default Home