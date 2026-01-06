import React, {useState} from 'react';
function MyComponent(){
const [name, setName] = useState("Guest the name my nigga");
const updateName = () => {
    // name = "nigga";
    // console.log(name);  //only update in console 
    setName("nigga"); // this one show on the page 
}
return(
    <div>
        <p>Name: {name}</p>
        <button className='nigga' onClick={updateName}>Guess who</button>
    </div>
);
}
export default MyComponent