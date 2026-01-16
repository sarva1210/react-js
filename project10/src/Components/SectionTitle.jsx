import React from "react";

const SectionTitle = ({ title, subtitle}) =>{
    return(
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b2f44]">{title}</h2>
            {subtitle && (
                <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">{subtitle}</p>
            )}
        </div>
    )
}

export default SectionTitle