import React from "react";
import logo from "../assets/bb4.png"
import { navItems } from "../constant";
import { Menu, X ,LampDesk, SunMoon} from "lucide-react";
import { useState } from "react";


const Navibar = () =>  {

    const[mobileOpen, setMobileOpen] = useState(false)

    

    const toggleNavbar = () => {
        setMobileOpen(!mobileOpen)
    }



    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-50px w-11" src={logo}  alt="" />
                        <span className="text-xl tracking-tight">Brand<span className="text-my-logo-color">boy</span></span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        
                            {navItems.map((items, index ) => (
                            <li key={index}>
                                <a href={items.href}>{items.label}</a>
                            </li>
                            )) }
                        
                    </ul>

                   

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileOpen? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                    {mobileOpen && (
                        <div className="fixed w-full lg:hidden bg-neutral-900 flex flex-col p-12 justify-center items-center right-0 z-20 ">
                            <ul>
                                {navItems.map((items, index) => (
                                    <li key={index} className="py-4">
                                        <a href={items.href}>{items.label}</a>
                                    </li>
                                )
                            )}
                                
                            </ul>
                        </div>
                    )

                    }
            </div>
        </nav>
    )
}

export default Navibar