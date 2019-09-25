import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import fetchImg from "./components/Fetch.js"
import Header from "./components/Header.js"

function App() {
  const [apod, setApodPic] = useState({});
    useEffect(() =>{
      axios.get("https://api.nasa.gov/planetary/apod?api_key=g31FIHk5hi5C9bCObt50BktMgP6k7I1tetWnHFtv")
      .then(response =>{
        setApodPic(response.data);
      })
      .catch(error=>{
        console.log("error", error);
      });
    }, []);


  return (
    <>
    <Header />
   
    <fetchImg
      title = {apod.title}
      date = {apod.date}
      url = {apod.url}
      explanation = {apod.explanation}
      copyright = {apod.copyright} />
      
      </>

  );
  
}

export default App;
