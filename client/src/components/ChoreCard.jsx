import React, { useContext } from "react"
import { DataContext } from "./DataContext"


const ChoreCard = (props) => {
const { isParent } = useContext(DataContext)
    
    return (
        <div className="card chore-card" onClick={props.onClick}>
            <div className="info-wrapper flex-col">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {/* <p>{props.pointsWorth} points</p> */}
                {props.isComplete ? <p>Completed</p> : <p>Incomplete</p>}
                {isParent && (<button onClick={props.addChore}>Assign</button>)}
                {isParent && (<button onClick={props.deleteChore}>Delete</button>)}
            </div>
            
          
        </div>
        
    )
}

export default ChoreCard