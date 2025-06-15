"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Beer N Bots Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function BeerNBots() {
    return (
        // inner postcard background
        <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">
            
                <Image
                    className="mx-auto block h-auto"
                    src="/Sprites/Beer_N_Bots_Logo_Sticker.webp"
                    width={600}
                    height={300}
                    alt="Beer N Bots Logo Header"
                />

                {/* Section Title - Beer N Bots */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-4xl font-semibold">Beer N Bots</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-full mb-5">
                        <p className="bg-orange-50 text-stone-700/90 ml-5 mr-5 p-4 rounded-2xl text-lg font-regular">
                            Beer N Bots is an anual event hosted by the Baltimore Robotics Center. The 
                            event allows for representatives from local tech companies to compete in a
                            cutthroat battle with robots!
                            I worked with the Robotics Center Team to provide a modern, eye-catching 
                            and fresh logo for the event, along with a new branding direction for the 
                            Center's official social media pages that are used to announce competitors. 
                            I created the designs using <b>Proceate.</b>              
                        </p>
                    </div>
                

                    {/* Stamps with logos of software products used */}
                    <div className= "flex flex-col lg:flex-row ml-5 mb-5">
                        <a className="text-center">
                            <Image
                                className="rotate-5"       
                                src="/Sprites/Procreate_Stamp.webp"
                                width={250}
                                height={250}
                                alt="Procreate Logo Stamp"
                            />
                            <p className="text-lg font-semibold">Procreate</p>
                        </a>
                    </div>
                </div>
                
                {/* Section Title - Promotional Materials Gallery */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Promotional Materials</p>
                </div>

                {/* Promotional Images - horizontal scrollable gallery */}
                <div className="bg-stone-50/90 mt-4 mb-4 mx-5 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                    <div className="flex space-x-6 items-center justify-start min-w-fit w-max">

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/BNB_Christina_Krueger_SOCIAL.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/BNB_Christina_Krueger_SOCIAL.png"
                                width={300}
                                height={300}
                                alt="Beer N Bots Social Media Post 1"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/BNB_Margaret_Hart_SOCIAL.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/BNB_Margaret_Hart_SOCIAL.png"
                                width={300}
                                height={300}
                                alt="Beer N Bots Social Media Post 2"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Beer_N_Bots_Color_Palette.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Beer_N_Bots_Color_Palette.png"
                                width={300}
                                height={300}
                                alt="Official Color Palette for Logo"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Beer_N_Bots_Mascot.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Beer_N_Bots_Mascot.png"
                                width={300}
                                height={300}
                                alt="Beer N Bots Mascot Image"
                            />
                        </a>
                    </div>
                </div>

                {/* Section Title - Slogan Footer */}
                <div className="text-stone-700 border-t-2 border-stone-700/10 py-2 ml-7 mr-7 mt-4 mb-2">
                    <p className="text-2xl font-semibold">Brewing Innovation, Building Futures</p>
                </div>

            </div>
            
        </div>
    );
}