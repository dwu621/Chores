import { useContext, useEffect, useState } from "react"
import { DataContext } from "../components/DataContext"
import { useParams } from "react-router-dom"


const ChildDetails = () => {
    const { children ,thisChild, setThisChild } =  useContext(DataContext)
   
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
        
    }

    useEffect(() => {
        getChild()
    }, [])
    
    return (
        <div>
            <div className="card child-detail-card">
                <div className="info-wrapper flex-col">
                    <h3>{thisChild.userName}</h3>
                    <p>points: {thisChild.pointsEarned}</p>
                    <h4>Chore List</h4>
                    <ul>
                        {thisChild.choresList.map((chore, index) => (
                            <li key={index}>
                                {chore} 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ChildDetails