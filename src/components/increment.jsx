function Increment(props){

    // this increases the value
  const increment = () => {
      // alert(" khuphuka")
      props.setCounter(props.counter +1)
     }
  // for (let i= 0; i <5; i++  ){
  //   document.getElementsByClassName("counter")[0].innerHTML = i;
  // }
      return (
          <button
           style={{
            background:"green",
              color:"white", 
              font:"bold", 
              marginLeft:"0.5cm",
              borderRadius:"5px",
              padding:"10px 16px",
              // border:"none"
              
          }}
          onClick={increment}
          >Increment</button>
      )
  }export default Increment;