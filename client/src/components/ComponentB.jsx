import React from 'react';
import { DataContext } from './DataContext';

function ComponentB() {
  return (
    <div>
      <DataContext.Consumer>
        {({ userInfo }) => {
          console.log('this is name', userInfo.name);
          return (
            <div>
              <h2>This is Component B</h2>
              <p> username is: {userInfo.name} </p>
              <p> fav color: {userInfo.favColor} </p>
            </div>
          );
        }}
      </DataContext.Consumer>
    </div>
  );
}

export default ComponentB;