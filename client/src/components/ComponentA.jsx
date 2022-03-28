import React, { useContext } from 'react';
import { DataContext } from './DataContext';

function ComponentA() {
  const { userInfo, setUserInfo } = useContext(DataContext);
  return (
    <div>
      <h2>This is Component A</h2>
      <p>
        <span>{userInfo.name}'s favorite color is </span>
        <span style={{ color: userInfo.favColor }}>
          {userInfo.favColor}
        </span>.
      </p>
      <button onClick = {() => 
          setUserInfo({...userInfo, favColor: 'green'})}>Change to Green
          </button>
      <button onClick = {() => 
            setUserInfo({...userInfo, favColor: 'red'})}>Change to Red
            </button>  
          
    </div>
  );
}

export default ComponentA;