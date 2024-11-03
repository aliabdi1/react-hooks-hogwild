import React from 'react'
import Hogcard from './Hogcard'


function HogList( {hogs} ) {
  return (
    <div className="ui grid container">
        {hogs.map((hog) => (
            <Hogcard key={hog.name} hog={hog}/>
        
        ))}
        
    </div>
  )
}

export default HogList