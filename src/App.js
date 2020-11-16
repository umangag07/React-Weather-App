import React from 'react'
import './App.css';
const api = {
  key:'7143fa965bedea1a40a989db39ba01cc',
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

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
            />
        </div>
        <div className="location-box">
          <div className="location">Pune, India</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
              15°C
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>

    </div>
  );
}

export default App;
