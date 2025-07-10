import React from "react";
import logo from "../assets/bb4.png"


const Footer = () => {
    return (
        <div className="bg-black h-24 mt-14">
            <div className="flex justify-center items-center flex-col">
            <img className="h-50px w-11" src={logo}  alt="" />
                        <span className="text-xl tracking-tight">Brand<span className="text-my-logo-color">boy</span></span>
            <div><p className="text-l">&copy; 2024 </p></div>           
            </div>
            
        </div>
    )
}

export default Footer