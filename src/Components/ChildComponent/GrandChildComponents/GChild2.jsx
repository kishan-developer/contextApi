import React, { useContext } from 'react'
import { ThemeContext } from '../../../App';

function GChild2() {

    const state = useContext(ThemeContext);
    console.log(state);

   const inputChange = (event) => {
         state.toggleTheme(event.target.value)
   }


    return (
        <div className='gchild2'>
            <h2>GChild2</h2>

            <input type="text" placeholder='write a theme'onChange={inputChange} />
        </div>
    )
}

export default GChild2;