function Button(){
    const style = {
       backgroundColor: "hsl(200, 100%, 50%)",
       color:"white",
       padding:"20px 10px",
       boarderRadius: "5px",
       border: "none",
       cursor: "progress",

    }
    return(
        <> 
    <button style={style}>Please click</button>
<hr></hr>
    </>
    );

}
export default Button