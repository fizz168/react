function Student (props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Number: {props.Number}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}
export default Student

// what is prop : 
// read only property that are shared between components, parents compenent can send data to a child    