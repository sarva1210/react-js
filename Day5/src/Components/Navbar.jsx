import React from "react";

const Navbar = (props) => {

    return (
        <div style={{backgroundColor:props.color}} className="bg-pink-700 mb-1 flex items-center justify-between text-white px-8 py-3">
            <h2 className="text-2xl font-bold">{props.title}</h2>

            <div className="flex gap-10">
                {props.links.map(function(elem,idx){
                    return <h4 key={idx} >{elem}</h4>
                })}
            </div>

            <div>
                <button onClick={btnClicked} className="active:scale-95 bg-white text-black px-6 py-3 rounded font-bold m-2" >Click to download</button>
            </div>
        </div>
    );

    function btnClicked() {
        console.log("Downloaded!")
    }
};

export default Navbar;
