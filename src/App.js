import React,{ useState } from 'react'
import './App.css';
const api = {
  key:'7143fa965bedea1a40a989db39ba01cc',
  base: "https://api.openweathermap.org/data/2.5/"  
}

function App() {
  const [query,setQuery] = useState('');
  const [weather, setWeather] = useState({}); 

  const search = evt =>{
     if (evt.key == "Enter"){
       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then(res => res.json())
       .then(result =>{
        setWeather(result);
        setQuery('');
        console.log(result)
       })
     }
  }
  const dateBuilder =(d)=>{
    let months = ["january","February","March","April","May","June","July","August","September","October","Novemebr","December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
    let day=days[d.getDay()]
    let month = months[d.getMonth()]
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div className="search-box"> 
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e =>setQuery(e.target.value)} 
            value={query}
            onKeyPress={search}
            />
        </div>
        {(typeof weather.main != "undefined") ?(
        <div>
         <div className="location-box">
         <div className="location">{weather.name},{weather.sys.country}</div>
         <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {weather.main.temp}°C
          </div>
       
        <div className="weather">{weather.weather[0].description}</div>
        </div>
        </div>
        ) :('')}
      </main>

    </div>
  );
}

export default App;
