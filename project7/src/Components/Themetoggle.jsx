import React from "react";

const ThemeToggle =({ darkMode, setDarkMode}) =>{
    return(
        <button onClick={()=> setDarkMode (!darkMode)} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700" >{darkMode?"🌙":"☀️"}</button>
    );
};

export default ThemeToggle