import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import fetchImg from "./components/fetchImg"
import Header from "./components/Header"

function App() {
  const [apodPic, setApodPic] = useState({});
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
      title={apodPic.title}
      date={apodPic.date}
      url={apodPic.url}
      explanation={apodPic.explanation}
      copyright={apodPic.copyright}
      />
      </>

  );
  
}

export default App;
