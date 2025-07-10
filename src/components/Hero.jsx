import React from "react";
import GlitchText from "./GlitchText";

const Hero = () => {
return (
    <div className="mt-6 flex flex-col items-center lg:mt-20 ">
        <h1 className="text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide ">
        Where Imagination Meets 
        <GlitchText text= "Stunning Design." />
        </h1>
        <p className="text-neutral-600 text-1xl mt-5 px-11 text-center max-w-4xl">
        Experience the perfect fusion of exceptional design and lightning-fast delivery, 
        ensuring your projects come to life with unmatched creativity and efficiency
        </p>
    </div>
)
}

export default Hero