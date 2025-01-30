import React,{useState} from "react"
import Axios from "axios"
import './App.css';

const APIkey="6fb774f6ac5f1be17bf6a186a537da1c";
function App() {
  const [city,setCity]= useState("");
  const [data,setData]= useState();
  
  const fetchdata=async()=>{
    try{
    const response =await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=${APIkey}`);
    setData(response.data);
    
  }
 
 catch(err){
  alert("Enter The Correct City Name!!!");
 }
}
  return (
    <div className="body">
    <div className="weather">
      <h1 className="title">Weather App</h1>
      <div className="enter">
        
        <input type="text"  className="input" value={city} onChange={e=>setCity(e.target.value)}  placeholder="Enter City Name ..."/><br></br>
        <button className="button" onClick={fetchdata}>Fetch</button>
      </div>
      <div className="output">
        {data &&(
          <div className="city-info">
            <h2>{data.name} , {data.sys.country}</h2>
            <div className="temp">{Math.round(data.main.temp-275.15)}*C</div>
            <div className="coord">Lon : {data.coord.lon}<br></br>Lat : {data.coord.lat}</div>
           </div>
         
        )}
      </div>
    </div>
    </div>
  );
}

export default App;
