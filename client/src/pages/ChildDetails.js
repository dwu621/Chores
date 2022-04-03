import { useContext, useEffect, } from "react"
import { DataContext } from "../components/DataContext"
import { useParams } from "react-router-dom"
import ChildCard from "../components/ChildCard"
import ChoreCard from "../components/ChoreCard"
import axios from "axios"


const ChildDetails = () => {
    const { 
        BASE_URL,
        thisChild, 
        setThisChild, 
        loading, 
        setLoading,
        chores,
        thisChildList,
        setThisChildList,
        isParent,
        isChild,
        getAllChores
        
    } =  useContext(DataContext)
    
     //use children array to retrieve with params? and make child card
     //iterate to show all chores and make chores card
     //add  click to add chore using chore name to child list
  
    const { id } = useParams()
    
    // const getAllChores = async () => {
    //     let res = await axios.get(`${BASE_URL}/chore`)
    //     console.log('getAllChores',res.data.chores)
    //     setChores(res.data.chores)
    //   }

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
        getAllChores()
    }, [])

    // const filterChores = chores.filter((chore) => {
    //     return !chore.isComplete
    // })
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
                alert(`${chore.name} is already on ${thisChild.userName}'s Chore list!`)
            } else {
            thisChild.choresList.push(chore)
            await axios.put(`${BASE_URL}/user/${id}`, thisChild)
            getChild()
            }
        
    }

    //click done button remove from array
        //update list and axios put
        // delete from chore list by id  

    const removeChore = async (choreId, index) => {
        thisChild.choresList.splice(index, 1 )
        await axios.put(`${BASE_URL}/user/${id}`, thisChild)
        await axios.put(`${BASE_URL}/chore/${choreId}`, {isComplete: true})
        getChild()
    }

    const deleteChore = async (choreId) => {
        await axios.delete(`${BASE_URL}/chore/${choreId}`)
        getChild()
        getAllChores()
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
                removeChore={removeChore}
                
                />
           </div>
            )}
            {(isParent) && (
                <div className="container-grid">
                {   
                    chores.map((chore) => (
                        <ChoreCard
                        key={chore._id}
                        name={chore.name}
                        description={chore.description}
                        // pointsWorth={chore.pointsWorth}
                        isComplete={chore.isComplete}
                        addChore={() => addChore(chore)}
                        deleteChore={()=> deleteChore(chore._id)}
                        // onClick={() => addChore(chore)}
                        // onClick={handleEvent}
                        />
                    ))
                }
                </div>
                
            )}



            {isChild && (
                <div className="container-grid">
                {   
                    thisChildList.map((chore) => (
                        <ChoreCard
                        key={chore._id}
                        name={chore.name}
                        description={chore.description}
                        // pointsWorth={chore.pointsWorth}
                        isComplete={chore.isComplete}
                        // onClick={() => removeChore(chore, index)}
                        // onClick={handleEvent}
                        />
                    ))
                }
            </div>
            )}
          

          
            
        </div>
    )
}

export default ChildDetails