//import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React , {useEffect, useState} from "react";

function App() {
  const [data, getTopics] = useState([]);

  useEffect(()=>{
    getData();
  })
  
  const getData = () => {
    axios.get('get_topics').then(response => {
      getTopics(response.data); 
    });
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> List Topics to ask a question </h1>
        <h1> Ask your question here: </h1>
        <input></input>
        <br />
        <button>Submit</button>
        <h1>Answer:</h1>
        <ul>
          <li>test</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
