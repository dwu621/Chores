const ChoreCard = (props) => {
    
    return (
        <div className="card chore-card" onClick={props.onClick}>
            <div className="info-wrapper flex-col">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                {/* <p>{props.pointsWorth} points</p> */}
                {props.isComplete ? <p>Completed</p> : <p>Incomplete</p>}
            </div>
          
        </div>
        
    )
}

export default ChoreCard