
import React, {Component} from 'react'
import ScoreBoard from '../scoreboard/ScoreBoard'
import Team from '../team/Team'
import bulldog from '../../images/bulldog.jpeg';
import lion from '../../images/Lions.jpeg'
import polarbears from '../../images/polar-bears.png'
import theThunder from '../../images/download.jpeg'





class Game extends Component{
    constructor(props){
        super(props)
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

        this.state={
            resetCount: 0,
            homeTeamStats:{
                shotsTaken:0,
                score:0
            },
            visitingTeamStats:{
                shotsTaken:0,
                score:0


            }
            
            
        }
        
        this.shotSound = new Audio('Back+Board.mp3')
        this.scoreSound = new Audio('Swish+2.mp3')
            }
    handleShoot = (team) => {  
        const teamStatsKey = `${team}TeamStats`

        let score = this.state[teamStatsKey].score

        setTimeout(()=> {
        this.shotSound.play()
        }, 25 )
    
        if( Math.random() > 0.5){
            score += 1
            setTimeout(()=> {
                this.scoreSound.play()
            }, 100 )
        }
            this.setState((currentState, props)=>({
                [teamStatsKey]:{   
                           
                
                shotsTaken:currentState[teamStatsKey].shotsTaken + 1,
                score,
            }
        }))
         
    }

    resetGame = (event) => {
     
    
        this.setState((currentState, props)=> ({
            
            resetCount:currentState.resetCount + 1,
            homeTeamStats:{
                shotsTaken:0,
                score:0
            },
            visitingTeamStats:{
                shotsTaken:0,
                score:0


            }
            
        }
        ))
        
        
    }
    render(){
return(
        <div className='Game'>
            <ScoreBoard
            homeTeamStats={this.state.homeTeamStats}
            visitingTeamStats={this.state.visitingTeamStats}
            />
        <h1 className='venue'>Welcome to{this.props.venue}!</h1>

        <div className='stats'>
        
        <Team
        team={thunder}
        
       stats={this.state.homeTeamStats}
       shotHandler={() => this.handleShoot('home')}
       />
        <div className='resetButton'>
           <strong>Resets:</strong> {this.state.resetCount} <br/>
            <button onClick ={this.resetGame}>Reset Game</button>
       </div>
        <div className='versus'><h1>VS</h1></div>
        <div className='ball1'>🏀</div>
        <div className='ball2'>🏀</div>
       
       <Team
        name={this.props.visitingTeam.name}
        logo={this.props.visitingTeam.logoSrc}
        stats={this.state.visitingTeamStats}
        shotHandler={() => this.handleShoot('visiting')}
        />

        </div>
    </div>



        )
    }

}

export default Game