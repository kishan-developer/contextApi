import React, { useContext } from 'react'
import { ThemeContext } from '../../../App';

function GChild1() {
     // access data here 
    const state = useContext(ThemeContext);
    console.log(state);
    return (
        <div className='gchild1'>GChild1

            <h2>{state.theme}</h2>
        </div>
    )
}

export default GChild1;