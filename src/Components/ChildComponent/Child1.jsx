import React from 'react'
import GChild1 from './GrandChildComponents/GChild1';

function Child1() {
  return (
    <div className='child1'>Child1
        <GChild1/>
        <select>
            <option value="dark">DARK</option>
            <option value="white">White</option>
        </select>
    </div>
  )
}

export default Child1;