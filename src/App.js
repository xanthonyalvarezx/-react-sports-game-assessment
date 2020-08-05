import React from 'react';
import './App.css';
import Game from './components/game/Game'
import bulldog from './images/bulldog.jpeg';
import lion from './images/Lions.jpeg'
import polarbears from './images/polar-bears.png'
import theThunder from './images/download.jpeg'



function App (props) {
    const thunder = {
        name:"The Thunder",
        logoSrc:theThunder
    }
    const bulldogs = {
        name:"The Bulldogs",
        logoSrc:bulldog
    }
    const lions = {
        name:"The Lions",
        logoSrc:lion
    }
    const polarBears = {
        name:"The Polar Bears",
        logoSrc:polarbears
    }
      
        
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
