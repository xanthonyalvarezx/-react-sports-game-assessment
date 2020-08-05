import React from 'react'






function Team (props){
    
    let shotPercentDiv
    
        if(props.stats.shotsTaken){
    const shotPercent = Math.round((props.stats.score / props.stats.shotsTaken)* 100)
             shotPercentDiv =(
                <div><strong>Shot%:{shotPercent}</strong></div>
             )
        }
    return(
        <div className='Team'>
            
            <h3>{props.name}</h3>
            <div className='logo'><img src={props.logo} alt="team logo"/></div>
            
           
    
            <div className='shotDiv'>
            <button id="Shoot" onClick={props.shotHandler}>Shoot</button>
    
            <p>Score: {props.stats.score}</p>
    
            <p>shotsTaken: {props.stats.shotsTaken}</p>
            {shotPercentDiv}
            </div>
    
    
            
            
        </div>
        )
    }
    

    export default Team