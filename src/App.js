import "./App.css";
import { useState } from "react";
// import { useFetch } from "./hooks/useFetch.js";
import DailyImage from "./components/DailyImage";
import Iss from "./components/Iss";

function App() {
  const [url, setUrl] = useState("");
  //  const { data, isPending, error } = useFetch(url);
  return (
    <div className="container">
      <h1>Space Fetcher</h1>
      <DailyImage />
      <Iss />

      {/* filter buttons here */}
    </div>
  );
}

export default App;
