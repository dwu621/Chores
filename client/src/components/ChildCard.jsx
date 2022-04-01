import React, { useContext } from "react"
import { DataContext } from "./DataContext"

const ChildCard = (props) => {
    const { isChild } = useContext(DataContext)   
    return (
        <div className="card child-card" onClick={props.onClick}>
            <div className="info-wrapper flex-col">
                <h3>{props.userName}'s Chore List</h3>
                <ul>
                    {props.choresList.map((chore, index) => (
                        <li key={index}>
                            {chore.description}
                            {isChild && (<button onClick={() => props.removeChore(chore._id, index)}>Done</button>)} 
                        </li>
                    ))}
                </ul>
                {/* <p>{props.userName} has {props.pointsEarned} points</p> */}
            </div>
            
        </div>
    )

}

export default ChildCard