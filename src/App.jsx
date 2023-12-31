"use client";
import { TextInput } from "keep-react";
import { useState } from "react";
import "./App.css";
import NavbarComponent from "./Navbar";
import TimelineComponent from "./TimeLine";
import CardComponent from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent />
      <TextInput id="input" placeholder="Default Input Field" color="gray" />
      <TimelineComponent />
      <CardComponent />
    </>
  );
}

export default App;
