function Food(){
    const food1 = "Pizza";
    const food2 = "gomu";
    return(
       <ul>
        <li>apple</li>
          <li>{food2}</li>
            <li>pizza</li>
              <li>{food1.toUpperCase()}</li>
       </ul>
    );
}
export default Food