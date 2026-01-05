
function HandleB(){
    let count = 0;
    
        // const handleClick = () => console.log("stop touching me you pdf"); //testing
        const handleClick2 = (name) => console.log(`${name} please let me go`);
        const handleTouch = (name) => {
            if(count< 3){   
                count++;
                console.log(`${name} touch me ${count} time/s`);
            }
            else{
                console.log(`${name} stop touching me `)
            }
            
        };
    const ouch = (e) => e.target.textContent = "Ouch";
    return(
        <>
      
        <button className="nigga"  onClick={() => handleClick2("nigga")}>Please click me </button>
     
        <button onClick={() => handleTouch("Nigga")}> Pas tik mer </button>
        <button onClick={(e) => ouch(e)}>Pas dai</button>
      
        </>
    );
}
export default HandleB