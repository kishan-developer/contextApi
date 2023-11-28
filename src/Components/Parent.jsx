import React from 'react'
import Child1 from './ChildComponent/Child1';
import Child2 from './ChildComponent/Child2';

function Parent() {
  return (
    <div>Parent
        <Child1/>
        <Child2/>
    </div>
  )
}

export default Parent;