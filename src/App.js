import React from 'react';
import './App.css';
import Game from './components/game/Game'



function App (props) {
  
      
        
  return (
      <div className='App'>
          <Game venue='Madison Square Garden'
          homeTeam={thunder}
          visitingTeam={bulldogs}
          />
          <Game venue=' The MGM Grand'
           homeTeam={lions}
           visitingTeam={polarBears}
          />
      </div>
         
  )
      
      
  }
  

export default App;
