import React, {useState} from 'react';
function MyComponent(){
const [name, setName] = useState("Guest the name my nigga");
const updateName = () => {
    // name = "nigga";
    // console.log(name);  //only update in console 
    setName("nigga"); // this one show on the page 
}
const [age, setAge] = useState(0);
const incrementAge = () => {
    setAge(age + 1);
}

const [number ,setNumber] = useState(10);
const DecrementNumber = () => {
    setNumber(number - 1);
}
const IncrementNumber = () => {
    setNumber(number + 1);
} 
const reset = () => {
    setNumber(0);
}



const [isEmploy, setIsEmploy] = useState(false);
const EmployStatus = () => {
    setIsEmploy(!isEmploy);
}


return(
    <>
    <div>
        <p>Name: {name}</p>
        <button className='nigga' onClick={updateName}>Guess who</button>
       
        <p>Age: {age} </p>
        <button className='nigga' onClick={incrementAge}>Increment Age</button>
          
          <p>Number: {number}</p>
        <button className='nigga' onClick={DecrementNumber} >Decrement Number</button>
        <button className='nigga' onClick={IncrementNumber}>Increment Number</button>
        <button className='nigga' onClick={reset}>Reset</button>

        <p>Are you Employ : {isEmploy ? "yes" : "no"} </p>
        <button className='nigga' onClick={EmployStatus}>Click this to find out</button>
    </div>
   
    </>

);
}
export default MyComponent