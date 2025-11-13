"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Beer N Bots Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-1"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(254, 197, 144, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 300, 220, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
        }}
      >
        {/* Your original white panel stays intact inside here */}
        <div className="rounded-xl">
          {children}
        </div>
      </div>
    );
}

export default function BeerNBots() {
    return (
        // inner postcard background
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

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
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-4xl font-semibold">Beer N Bots</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-full mb-5">
                        <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-xl font-regular">
                            Beer N Bots is an anual event hosted by the Baltimore Robotics Center. The 
                            event allows for representatives from local tech companies to compete in a
                            cutthroat, King of the Hill-style battle with robots!
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
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-2xl font-semibold">Promotional Materials</p>
                </div>

                {/* Promotional Images - horizontal scrollable gallery */}
                <CandyFrame>
                <div className="bg-stone-50/90 dark:bg-stone-700 mt-4 mb-4 mx-5 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
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
                </CandyFrame>

                {/* Section Title - Slogan Footer */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-2xl font-semibold">Brewing Innovation, Building Futures</p>
                </div>

            </div>
            
        </div>
    );
}