import React from "react";
import { features } from "../constant";

const Services = () => {
    return(
        <div>
            <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl"> Services</h4>

            <div className="flex flex-wrap mt-10 lg:mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 ">
                        <div className="flex p-6">
                            <div className="flex mx-10 text-my-logo-color justify-center items-center">{feature.icon}</div>
                            <div className="text-2xl">{feature.text}</div>
                        </div>
                    </div>
                )
                )}
                    

                

            </div>
        </div>
    )
}

export default Services