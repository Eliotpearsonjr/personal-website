"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Plip Pets Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-1"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255, 182, 193, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 218, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
        }}
      >
        {/* Your original white panel stays intact inside here */}
        <div className="rounded-xl">
          {children}
        </div>
      </div>
    );
  }

export default function Characters() {

    return (
        // inner postcard background
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 ml-10 mr-10 my-10 p-10 rounded-2xl border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">
            
                
                {/* Section Title - Characters */}
                <div className="text-stone-700 dark:text-white border-b-2 border-pink-900/10 dark:border-stone-600/50 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-4xl font-semibold">Original Characters</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
                        <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-pink-900/30 dark:border-stone-600 transition-opacity duration-300 text-lg font-regular">
                        Take a stroll through the page to meet my original characters — 
                        little cuties I’ve designed for companies, branding projects, and 
                        video games! Each one is full of personality, color, and charm, 
                        waiting to say hello~
                        </p>
                    </div>
                

                    {/* Stamps with logos of software products used */}
                    <div className= "flex flex-col md:flex-row lg:flex-row ml-5 mb-5">
                        <a className="text-center">
                            <Image
                                className="rotate-4"
                                src="/Sprites/Unity_Stamp.png"
                                width={250}
                                height={250}
                                alt="Unity Logo Stamp"
                            />
                            <p className="text-lg font-semibold">Unity 2D</p>
                        </a>

                        <a className="text-center">
                            <Image
                                className="rotate-357"       
                                src="/Sprites/Procreate_Stamp.webp"
                                width={250}
                                height={250}
                                alt="Procreate Logo Stamp"
                            />
                            <p className="text-lg font-semibold">Procreate</p>
                        </a>
                    </div>
                </div>
                
                <CandyFrame>
                    <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 px-10 rounded-xl overflow-x-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:p-4 justify-items-center rounded-sm font-[family-name:var(--font-geist-sans)]">
        
                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-rose-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Capymel_Icon.png"
                                width={300}
                                height={300}
                                alt="Capymel Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-green-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Clover_Icon.png"
                                width={300}
                                height={300}
                                alt="Clover Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-amber-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Flawnbe_Icon.png"
                                width={300}
                                height={300}
                                alt="Flawnbé Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-emerald-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Kitsune_Icon.png"
                                width={300}
                                height={300}
                                alt="Kistune Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-blue-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Otter_Icon.png"
                                width={300}
                                height={300}
                                alt="Otter Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-orange-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Robot_Icon.png"
                                width={300}
                                height={300}
                                alt="Robot Icon Image"
                            />
        
                        </a>

                        <a
                            className="flex flex-col items-center font-semibold text-4xl text-center 
                            cursor-pointer transition-transform ease-in-out hover:scale-110 text-center 
                            bg-purple-50 dark:bg-stone-800 rounded-3xl"
                            href="/work"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                className="rotate-355 drop-shadow-lg"
                                src="/Sprites/Squark_Icon.png"
                                width={300}
                                height={300}
                                alt="Squark Icon Image"
                            />
        
                        </a>
        
                        
        
                        
                        </div>
                    </div>
                </CandyFrame>

                

            </div>
            
        </div>
    );
}