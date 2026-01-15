import React,{createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [activeFeature, setActiveFeature] = useState(3);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    return(
        <AppContext.Provider value={{
            activeFeature, setActiveFeature, isVideoOpen, setIsVideoOpen, testimonialIndex, setTestimonialIndex,
        }}>
            {children}
        </AppContext.Provider>    
    )
}