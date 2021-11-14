import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {INCREMENT, DECREMENT} from './action'


function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector (state => state.islogged);
  const dispatch = useDispatch()

  const styles = {
    
    wrapper: {
      textAlign: "center",
      background: "blue",
      maxWidth: "500px",
      margin: "0 auto",
      border: "1px solid #e6e6e6",
      padding: "40px 25px",
      borderRadius:"5%",
      marginTop: "50px"
    },
    btn: {
      textAlign: "center",
      justifycontent: "center",
      borderRadius:"20%",
      padding: "20px 25px",
      margin: "20px"
      },
      button:{
        padding:"20px"
      },
      
    
  }
  


  return (
    
    <div className="App">
      
   <h1 style={styles.wrapper}>Counter {counter} </h1>
   <div style={styles.btn} >
   <button style={styles.button1} onClick={() => dispatch (INCREMENT())}>+</button>
    <button style={styles.button2}  onClick={() => dispatch (DECREMENT())}>-</button>
   </div>
    
    

    {islogged? <h3>info i shoud not see </h3> : ''}  
   
    </div>
  );
}

export default App;
