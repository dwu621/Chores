import React, { useContext } from "react";
import { DataContext } from "./DataContext";

const ComponentC = () => {
    const { userInfo, setUserInfo, chore, setChore } = useContext(DataContext)
    return (
        <div>
        <h2>This is Component C</h2>
        <p>
          <span>{userInfo.name}'s chores are </span>
          <span style={{ color: userInfo.favColor }}>
            {userInfo.choresList}
          </span>.
        </p>
        <button onClick = {() => {
            setUserInfo({...userInfo, choresList: [...userInfo.choresList,  chore.name]})
            console.log(userInfo.choresList)
            }}>add chore
            </button>
        <button onClick = {() => 
              setUserInfo({...userInfo, favColor: 'red'})}>Change to Red
              </button>  
            
      </div>

    )
}

export default ComponentC