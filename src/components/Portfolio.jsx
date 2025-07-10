import React, { useState } from "react";
import port2 from "../assets/hangout1.jpg"
import port3 from "../assets/mustaqeemext2.jpg"
import port4 from "../assets/meeday2.jpg"
import port5 from "../assets/photosbysb.jpg"
import port6 from "../assets/rayynet.jpg"
import port7 from "../assets/maid.jpg"
import port8 from "../assets/ACOSA2.jpg"
import port9 from "../assets/memys.jpg"
import port10 from "../assets/natcon.jpg"
import port11 from "../assets/BULC1.jpg"
import port12 from "../assets/bonfire.png"
import port13 from "../assets/publicspeakingFINAL.png"
import port14 from "../assets/WORKOUT.png"
import port15 from "../assets/lspate1.png"
import port16 from "../assets/ramadan.png"
import port17 from "../assets/freereg.png"
import port18 from "../assets/fossutrip111.png"
import port19 from "../assets/buk.png"
import port20 from "../assets/FITNESS.png"
import port21 from "../assets/alaafin1.png"

const brands = [
  {
    name: "JCI Nigeria",
    designs: [port2, port10, port12, port13, port14, port15],
  },
  {
    name: "FOSSU",
    designs: [port16, port17, port18, port19, port20, port21],
  },
  {
    name: "Al-Mustaqeem Groceries",
    designs: [port3],
  },
  {
    name: "Meeday’s Apparel",
    designs: [port4],
  },
  {
    name: "PhotosbySB",
    designs: [port5],
  },
  {
    name: "Rayynet",
    designs: [port6],
  },
  {
    name: "Maiduguri Physiotherapy",
    designs: [port7],
  },
  {
    name: "ACOSA",
    designs: [port8],
  },
  {
    name: "Memys",
    designs: [port9],
  },
  {
    name: "BULC",
    designs: [port11],
  },
];

const Portfolio = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <div className="px-4">
      <h4 className="flex justify-center items-center sm:text-6xl text-neutral-700 mt-11 tracking-wide text-5xl">Portfolio</h4>

      {/* Brand List */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {brands.map((brand, index) => (
          <button
  key={index}
  onClick={() => setSelectedBrand(brand)}
  className="px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 via-green-700 to-green-800 
             text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform 
             transition-all duration-300 ease-in-out tracking-wide"
>
  {brand.name}
</button>

        ))}
      </div>

      {/* Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 max-w-4xl w-full rounded-lg p-4 shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold"
              onClick={() => setSelectedBrand(null)}
            >
              &times;
            </button>
            <h5 className="text-center text-2xl font-semibold mb-6">
              Designs for {selectedBrand.name}
            </h5>
            <div className="flex flex-wrap justify-center gap-4 overflow-y-auto max-h-[70vh]">
              {selectedBrand.designs.map((design, idx) => (
                <img
                  key={idx}
                  src={design}
                  alt={`Design ${idx}`}
                  className="w-56 h-56 object-cover border shadow rounded-md"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
