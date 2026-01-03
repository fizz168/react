function UserGretting(props){
    // if(props.isLoggedIn){
    //     return <h1>hello {props.UserName}</h1>      
    // }
    // else{ // dont need else just return(educational purpose)
    //     return<h1>Please log tf in {props.UserName}</h1>
    // }
    return(props.isLoggedIn ? <h1 className="Welcome">Welcome {props.UserName}</h1> : <h1 className="Log"> Log tf in to continue {props.UserName}</h1>) ///another way to write it 

}
export default UserGretting