import { useContext, useEffect, } from "react"
import { DataContext } from "../components/DataContext"
import { useParams } from "react-router-dom"
import ChildCard from "../components/ChildCard"
import ChoreCard from "../components/ChoreCard"
import axios from "axios"


const ChildDetails = () => {
    const { 
        BASE_URL,
        children, 
        thisChild, 
        setThisChild, 
        loading, 
        setLoading,
        chores,
        thisChildList,
        setThisChildList,
        newList,
        setNewList 
    } =  useContext(DataContext)
    
     //use children array to retrieve with params? and make child card
     //iterate to show all chores and make chores card
     //add  click to add chore using chore name to child list
  
    const { id } = useParams()
    
    const getChild = async () => {
        setLoading(true)
        let res = await axios.get(`${BASE_URL}/user/${id}`)
        console.log(res.data.user)
        setThisChild(res.data.user)
        setThisChildList(res.data.user.choresList)
        setLoading(false) 
    }
    
    useEffect(() => {
        getChild()
        console.log(filterChores)
    }, [newList])

    const filterChores = chores.filter((chore) => {
        return !chore.isComplete
    })
    let isAdded = false   
    
    const checkChore = async (chore) => {
        let choreId = chore._id
        let addedChore = await thisChild.choresList.find((e) => {
           return e._id === choreId
        })
        addedChore ? isAdded = true : isAdded = false
        console.log(isAdded)
    }
    const addChore = async (chore) => {
            await checkChore(chore)
            if (isAdded) {
                alert('aleeadythere')
            } else {
            thisChild.choresList.push(chore)
            await axios.put(`${BASE_URL}/user/${id}`, thisChild)
            getChild()
            }
        
    }
    return (
        <div>
            {(!loading) && (
           <div className="container-grid">
                <ChildCard
                key={thisChild._id}
                userName={thisChild.userName}
                // pointsEarned={thisChild.pointsEarned}
                choresList={thisChild.choresList}
                />
           </div>
            )}
            <div className="container-grid">
                {   
                    filterChores.map((chore) => (
                        <ChoreCard
                        key={chore._id}
                        name={chore.name}
                        description={chore.description}
                        // pointsWorth={chore.pointsWorth}
                        isComplete={chore.isComplete}
                        onClick={() => addChore(chore)}
                        // onClick={handleEvent}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ChildDetails