"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Beer N Bots Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function BeerNBots() {
    // varibles for selecting plip type descriptions
    const [selectedPlip, setSelectedPlip] = useState<string | null>(null);


    return (
        // inner postcard background
        <div className="bg-orange-100 p-1 mt-15 ml-15 mr-15 mb-15 rounded-lg">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col gap-2 mt-10">
            
                <Image
                    className="mb-4 mx-auto block h-auto"
                    src="/Sprites/Beer_N_Bots_Logo_Sticker.webp"
                    width={650}
                    height={300}
                    alt="Beer N Bots Logo Header"
                />

                {/* Section Title - Plip Pets */}
                <div className="text-stone-700 p-4 rounded-md ml-10 mr-10">
                    <p className="text-lg font-semibold">Beer N Bots</p>
                </div>

                {/* Section Body - Summary */}
                <div className="bg-orange-900/5 text-stone-700/90 p-4 pb-8 rounded-md ml-10 mr-10 mb-2">
                    <p className="text-lg font-regular">
                    Beer N Bots is held twice a year, and hosted by the <b>Baltimore Robotics Center.</b> 
                    I worked with the Robotics Center team to create a new logo, as well as promotional 
                    flyers for the event. The look and feel of the graphics evoke an aesthetic of modern 
                    industry and connection, channeling the Robotics Center's commitment to community 
                    outreach and serving as a cornerstone for innovation.
                    </p>
                </div>


                {/* Section Title - Gallery */}
                <div className="text-stone-700 p-4 rounded-md ml-10 mr-10">
                    <p className="text-lg font-semibold">Social Media Flyers</p>
                </div>

                {/* Concept Art Images */}
                <div className="bg-neutral-50 mt-4 mb-4 mr-8 ml-8 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 sm:p-10 justify-items-center rounded-sm font-[family-name:var(--font-geist-sans)]">
                    
                    <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/BNB_Christina_Krueger_SOCIAL.png"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            
                            src="/Sprites/BNB_Christina_Krueger_SOCIAL.png"
                            width={300}
                            height={300}
                            alt="Beta Home Screen Image"
                        />
                    </a>

                    <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/BNB_Margaret_Hart_SOCIAL.png"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Sprites/BNB_Margaret_Hart_SOCIAL.png"
                            width={300}
                            height={300}
                            alt="Beta Fridge Image"
                        />
                    </a>


                </div>   

                {/* Section Title - Plip Pets */}
                <div className="bg-orange-900/5 text-stone-700/90 p-4 pb-4 rounded-md ml-10 mr-10 mb-5 text-center">
                    <p className="text-lg font-semibold">Building Futures, Brewing Innovation</p>
                </div>

                {/* Section Title - Tools Used */}
                <div className="text-stone-700 p-4 rounded-md ml-10 mr-10">
                    <p className="text-lg font-semibold">Tools Used</p>
                </div>

                {/* Stamps with logos of software products used */}
                <div className= "grid grid-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:p-2 justify-items-left">

                    <a className="text-left">
                        <Image
                                    
                            src="/Sprites/Procreate_Stamp.png"
                            width={250}
                            height={250}
                            alt="Procreate Logo Stamp"
                        />
                        <p className="text-lg font-semibold">Procreate</p>
                    </a>
                </div>
                
            </div>
            
        </div>
    );
}