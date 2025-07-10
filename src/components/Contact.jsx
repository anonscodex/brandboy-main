import React from "react";
import whatsapp from "../assets/whatsappp.png"
import x from "../assets/xx.png"
import gmail from "../assets/gmail.png"
import insta from "../assets/insta.png"





const Contact = () => {

    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    return(
        <div>
            <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl"> Contact Us</h4>

        <div>
            

            <div className="flex flex-wrap w-full lg:h-1/3  px-6 mt-10 gap-4 sm:gap-4 justify-center items-center">
                {/* WhatsApp */}
                <img src= {whatsapp} alt="whatsapp" className="h-12 cursor-pointer" onClick={() => handleClick("https://wa.me/yourphonenumber")} />

                {/* Email */}
                <img src= {gmail}   className="text-red-600 text-4xl cursor-pointer" onClick={() => handleClick("mailto:youremail@example.com")} />

                {/* Twitter */}
                <img src= {x}  className=" text-blue-600 text-4xl cursor-pointer" onClick={() => handleClick("https://twitter.com/yourusername")} /> 

                {/* Instagram */}
                <img src= {insta}  className="text-purple-600 text-4xl cursor-pointer" onClick={() => handleClick("https://www.instagram.com/yourusername")} />
            </div>
        </div>

        </div>
    
    )
}

export default Contact