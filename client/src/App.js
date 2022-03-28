import { useContext, useState } from 'react'
import { DataContext } from './components/DataContext';
import './App.css'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  const [userInfo, setUserInfo] = useState(
    {
        name: 'David',
        favColor: 'red',
        favBook: 'Game of Thrones',
        favFood: 'Xiao Long Bao',
        choresList: []
    }
    )
  const [chore, setChore] = useState(
    {
        name: 'Shovel Snow',
        description: 'Shovel the snow',
        pointsEarned: '50',
        isComeplete: false
    }
  )  

  
  return (
    <div className="App">
        <h2>React Context..using useContext</h2>
          <DataContext.Provider value={{ userInfo, setUserInfo, chore, setChore }}>
            <ComponentA />
            <ComponentB />
            <ComponentC />          
          </DataContext.Provider>
    </div>
  );
}

export default App;
