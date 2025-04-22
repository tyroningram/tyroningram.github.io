import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className=" h-screen flex flex-col items-center justify-center bg-gray-600">
        <h1 className=" text-3xl font-bold text-white">Hello World</h1>
        <p className=" text-white text-sm">
          This is a cover - this website is in progess. Please check back later.
        </p>
      </main>
    </>
  );
}

export default App;
