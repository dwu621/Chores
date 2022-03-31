import { useContext, useEffect, useState } from "react"
import { DataContext } from "../components/DataContext"
import { useParams } from "react-router-dom"
import ChildCard from "../components/ChildCard"


const ChildDetails = () => {
    const { 
        children, 
        thisChild, 
        setThisChild, 
        loading, 
        setLoading 
    } =  useContext(DataContext)
    
     //use children array to retrieve with params? and make child card
     //iterate to show all chores and make chores card
     //add  click to add chore using chore name to child list
  
    const { id } = useParams()
    
    const getChild = async () => {
       let child = await children.find((child) => {
            return child._id === id
        })
        console.log(child)
        if (child) {
            setThisChild(child)
            console.log('we got it')
        } else {
            console.log('no child')
        }
       setLoading(false) 
    }
    
    useEffect(() => {
        getChild()
    }, [])
    
    console.log(thisChild)
   
    return (
        <div>
            {(!loading) && (
           <div className="container-grid">
                <ChildCard
                key={thisChild._id}
                userName={thisChild.userName}
                pointsEarned={thisChild.pointsEarned}
                choresList={thisChild.choresList}
                />
           </div>
            )}
            <div className="container-grid">
                
            </div>
        </div>
    )
}

export default ChildDetails