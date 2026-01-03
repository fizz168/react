
function List(props){
    const fruit = [
          {id: 1, name : "banana", calories: 40, weight: "90kg"},
          {id: 2, name :"apple", calories: 50, weight: "60kg"},
          {id: 3, name :"orange", calories: 150, weight: "20kg"},
          {id: 4, name : "zanana", calories: 40, weight: "90kg"},
          {id: 5, name :"apple", calories: 50, weight: "60kg"},
          {id: 6, name :"orange", calories: 150, weight: "20kg"}
          
        ];
    // fruit.sort((a,b) => a.name.localeCompare(b.name)) //sorting alphabet 
    // fruit.sort((a,b) => b.name.localeCompare(a.name)) //reverse
    // fruit.sort((a,b) => a.calories - b.calories) //sorting number
    // fruit.sort((a,b) => b.calories - a.calories) // Reverse

    const lowCalFruit = fruit.filter(fruit => fruit.calories < 100); //finding low or high index by condi
    // const listItem = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;{lowCalFruit.calories}; <b>{lowCalFruit.weight}</b></li>)
   

    const listItem = fruit.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;{fruit.calories}; <b>{fruit.weight}</b></li>)
   
    return(
    <ol>{listItem}</ol>
    );

}
export default List 