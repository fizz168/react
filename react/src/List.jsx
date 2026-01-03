
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
    fruit.sort((a,b) => b.calories - a.calories)

    const listItem = fruit.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;{fruit.calories}; <b>{fruit.weight}</b></li>)
   
    return(
    <ol>{listItem}</ol>
    );

}
export default List 