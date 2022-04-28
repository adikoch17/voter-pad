import React,{useState,useEffect} from 'react'
// import Voteoption from './components/voteoption/Voteoption';
import VotePage from './components/voteoption/Voteoption'
import './App.css';

function App() {
  const [parties,setParties] = useState([]);
  const [voter,setVoter] = useState("");

useEffect(()=>{
  let url_party = "http://localhost:8080/getparties"
  fetch(url_party,{
    method:"GET"
  })
  .then(response=>response.json())
  .then(data =>{
    console.log(data)
    setParties(data);
  })

},[])



  return (
    <div className="App">
      <VotePage parties={parties}/>
    </div>
  );
}

export default App;
