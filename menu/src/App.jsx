import Items from "./components/menuList";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItem] = useState(0);

  return (
    <>
      <h1>Menu</h1>
      <Items />
    </>
  );
}

export default App;
