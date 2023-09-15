import React from 'react'
import HouseDisplay from '../../Components/HouseDisplay'

const Home = ({houses}) => {
  return (
    <div> 
        
        <HouseDisplay houses={houses}/>
        
        
     </div>
  )
}

export default Home