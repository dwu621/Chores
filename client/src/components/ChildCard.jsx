import React, { useContext } from "react"
import { DataContext } from "./DataContext"

const ChildCard = (props) => {
    
    return (
        <div className="card child-card" onClick={props.onClick}>
            <div className="info-wrapper flex-col">
                <h3>{props.userName}</h3>
                <p>points: {props.pointsEarned}</p>
                <h4>Chore List</h4>
                <ul>
                    {props.choresList.map((chore, index) => (
                        <li key={index}>
                            {chore} 
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )

}

export default ChildCard