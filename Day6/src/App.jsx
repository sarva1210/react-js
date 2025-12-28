import React, {useState}from "react"

const App = () => {
  const [a, setA] = useState(0);

  return (
    <div className="h-screen text-2xl flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-900 " >
      <h1 className="text-8xl font-bold text-white mb-8 " >{a}</h1>

      <div className="flex gap-6" >
        <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-400 active:scale-90 transition" onClick={() => setA(a - 1)}>
          DECREASE
        </button>

        <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-800 active:scale-90 transition" onClick={() => setA(a + 1)}>
          INCREASE
        </button>
      </div>

    </div>
  );
};

export default App