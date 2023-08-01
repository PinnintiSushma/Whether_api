import React, { useEffect, useState } from 'react'
import './Main.css'
const Main = () =>{
    const [apiData , setApiData] = useState() 
    const [search,setSearch] = useState("")  
    useEffect(()=>{       
      const fetchData=async()=>{
          const API_KEY='df30389e512540aeee6d6996942267c8'
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
          const data = await res.json()
          console.log(data);
          if(res.ok){
              setApiData(data)
          }
      }
      fetchData()
    },[search])
    
    console.log(apiData)
  return (
    <div className='box'>
      <h1>Whether <span>App</span></h1>
      <input type="text" name="search"placeholder='search city'onChange={(e)=>setSearch(e.target.value)} value={search}/>
      {
        apiData?<div className='element'>
            <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"}/>
            <p><span>Temp: </span>{apiData.main.temp}</p>
            <p><span>Name: </span>{apiData.name}</p>
            <p><span>Country: </span>{apiData.sys.country}</p>
            </div>
            :<h1>No city found</h1>
      }
    </div>
  )
}

export default Main


{/*useEffect(()=>{

        
  const fetchData=async()=>{
      const API_KEY='df30389e512540aeee6d6996942267c8'
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`);
      const data = await res.json()
      console.log(data);
      if(res.ok){
          setApiData(data)
      }
  }
  fetchData()
},[search])*/}