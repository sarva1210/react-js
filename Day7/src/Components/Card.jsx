import React from "react";

const Card = ({ elem, idx, deleteHandler }) => {
  return (
    <div className="w-[260px] bg-[#BEB5A9] rounded-2xl p-5 text-[#291C0E] shadow-xl">
      
        <img src={elem.userImg} alt="" className="h-16 w-16 rounded-full object-cover mx-auto"/>

        <h2 className="text-xl font-bold text-center mt-2"> {elem.userName} </h2>

        <p className="text-sm text-white text-center mb-2"> {elem.userRole} </p>

        <p className="text-sm text-white text-center mb-2"><b>Email:</b> {elem.userEmail}</p>

        <p className="text-sm text-white text-center mb-2"><b>Phone:</b> {elem.userPhone}</p>

        <p className="text-sm text-white text-center mb-2"><b>Company:</b> {elem.userCompany}</p>

        <button onClick={() => deleteHandler(idx)}
          className="mt-4 w-full py-2 rounded-full bg-[#291C0E] hover:bg-[#6E473B] text-[#E1D4C2] text-sm font-semibold active:scale-95 transition">
          Remove
        </button>
    </div>
  );
};

export default Card;
