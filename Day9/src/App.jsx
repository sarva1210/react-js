import React, { useState } from "react";
import axios from "axios";
import User from "./Components/User";

const App = () => {

  const[allData, setAllData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);

    setAllData(response.data)
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className='all-cards'>
        {allData.map(function(elem,idx){
          console.log(elem);
          return<User/>
        })}

      </div>
    </div>
  );
};

export default App;


