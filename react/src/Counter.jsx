import React, {useState} from 'react';
function Counter (){
   const [count, setCount] = useState(0);
const increase = () => {
    setCount(count + 1);
 }
const decrease = () => {
    setCount(count - 1);
}
const reset = () => {
    setCount(0)
}
    return(
<div className='contain'>
    <p className='count'>{count}</p>
    <button className='b' onClick={increase}>increase</button>
    <button className='b' onClick={decrease}>decrease</button>
    <button className='b' onClick={reset}>reset</button>

</div>
    );
    
}
export default Counter