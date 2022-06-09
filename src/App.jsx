import logo from './logo.svg';
// import './App.css';
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import Home from './component/Home';
function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => 
    state.counter.count
  );

  

  //event handle
  const handleIncrease = () => {
    dispatch(increaseCounter());
  }
  
  // console.log(dispatch);
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React and Hoi Dan IT!</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home/>
  );
}
//hook



// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
