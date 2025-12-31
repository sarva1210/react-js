import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./Components/User";

const App = () => {

  const [allData, setAllData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setAllData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="all-cards">
        {allData.map((elem, idx) => (
          <User key={idx} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;



