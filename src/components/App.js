
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inputVal , setInputVal]=useState({userName:'',password:''});
  const [errorMsg ,setErrorMsg]=useState('');


  function validateFn(e){
    e.preventDefault();
    if(inputVal.userName==='' || inputVal.password===''){
      setErrorMsg('Both username and password are required.');
    }else{
      setErrorMsg('');
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form onSubmit={validateFn}>
          <div>
            <label htmlFor="userName">UserName:</label>
            <input type="text" placeholder="Enter username" onChange={(e)=>setInputVal({...inputVal,userName:e.target.value})} />
          </div>
          <div>
            <label htmlFor="password">UserName:</label>
            <input type="password" placeholder="Enter password" onChange={(e)=>setInputVal({...inputVal,password:e.target.value})} />
          </div>
          <p id="errorMessage">{errorMsg}</p>
          <button>Login</button>
        </form>
    </div>
  )
}

export default App
