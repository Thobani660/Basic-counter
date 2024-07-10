function Decrement(props){

    // this decreases the value
    const decrement = () => {
        // alert(" Nokushona PHANSI")
    
        props.setCounter(props.counter -1)
    
       };
    
        return (
            <button 
             style={{
                background:"Red",
                color:"white", 
                font:"bold", 
                marginLeft:"0.5cm",
                borderRadius:"5px",
                padding:"10px 16px"
            }}
            onClick={decrement}>Decrement</button>
        )
    } export default Decrement;