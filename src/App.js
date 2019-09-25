import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import fetchImg from "./components/fetchImg.js"
import Header from "./components/Header.js"

function App() {
  const [apod, setApodPic] = useState({});
    useEffect(() =>{
      axios
      .get("https://api.nasa.gov/planetary/apod")
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
      title={apod.title}
      date={apod.date}
      url={apod.url}
      explanation={apod.explanation}
      copyright={apod.copyright}
      />
      </>

  );
  
}

export default App;
