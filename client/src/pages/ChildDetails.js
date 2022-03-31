import { useContext, useEffect, } from "react"
import { DataContext } from "../components/DataContext"
import { useParams } from "react-router-dom"
import ChildCard from "../components/ChildCard"
import ChoreCard from "../components/ChoreCard"


const ChildDetails = () => {
    const { 
        children, 
        thisChild, 
        setThisChild, 
        loading, 
        setLoading,
        chores 
    } =  useContext(DataContext)
    
     //use children array to retrieve with params? and make child card
     //iterate to show all chores and make chores card
     //add  click to add chore using chore name to child list
  
    const { id } = useParams()
    
    const getChild = async () => {
        setLoading(true)
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
    const addChore = (choreName) => {
        console.log(choreName)
    }
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
                {
                    chores.map((chore) => (
                        <ChoreCard
                        key={chore._id}
                        name={chore.name}
                        description={chore.description}
                        pointsWorth={chore.pointsWorth}
                        isComplete={chore.isComplete}
                        onClick={() => addChore(chore.name)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ChildDetails