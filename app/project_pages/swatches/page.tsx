"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Swatches Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-1"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255, 196, 206, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(300, 280, 190, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
        }}
      >
        {/* Your original white panel stays intact inside here */}
        <div className="rounded-xl">
          {children}
        </div>
      </div>
    );
}

export default function Swatches() {
    return (
        // inner postcard background
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">
            
                <Image
                    className="mx-auto block h-auto"
                    src="/Sprites/Swatches_Logo_Big.webp"
                    width={400}
                    height={400}
                    alt="Swatches Logo Header"
                />

                {/* Section Title - Beer N Bots */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-4xl font-semibold">Swatches - Color Palette Generator</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-full mb-5">
                        <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
                            Swatches is a color palette app that I made to have a simple and clean place to keep track
                            of my color palettes for graphic design work. This one is minialist and free of ads cluttering
                            the swatches of color.
                            I created this app with <b> Next .Js,</b> and mockups using <b>Proceate.</b>              
                        </p>
                    </div>
                

                    {/* Stamps with logos of software products used */}
                    <div className= "flex flex-row ml-5 mb-5">
                        <a
                            className="transition-transform ease-in-out hover:scale-120"
                            href="https://rainbow-swatches.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rotate-345 drop-shadow-lg"
                                src="/Sprites/Swatches_Stamp.png"
                                width={250}
                                height={250}
                                alt="Swatches Stamp Button"
                            />
                            <p className="text-lg font-semibold">Try Swatches out here!</p>
                        </a>

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

                        <a className="text-center">
                            <Image
                                className="rotate-350"       
                                src="/Sprites/Next_Js_Stamp.png"
                                width={250}
                                height={250}
                                alt="Next Js Logo Stamp"
                            />
                            <p className="text-lg font-semibold">Next .Js</p>
                        </a>
                    </div>
                </div>
                
                {/* Section Title - Promotional Materials Gallery */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-2xl font-semibold">Screenshots and Concept</p>
                </div>

                {/* Promotional Images - horizontal scrollable gallery */}
                <CandyFrame>
                <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                    <div className="flex space-x-6 items-center justify-start min-w-fit w-max">

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/swatches_sc.webp"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/swatches_sc.webp"
                                width={300}
                                height={300}
                                alt="swatches app screenshot"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/swatches_text.webp"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/swatches_text.webp"
                                width={300}
                                height={300}
                                alt="swatches app screenshot with text"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/swatches_app_concept.png"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/swatches_app_concept.png"
                                width={300}
                                height={300}
                                alt="swatches app concept 1"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/swatches_app_concept_text.png"
                            target="_self"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/swatches_app_concept_text.png"
                                width={300}
                                height={300}
                                alt="swatches app concept 2"
                            />
                        </a>  
                    </div>
                    
                </div>
                </CandyFrame>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-full mb-5">
                        <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 my-10 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
                            This app allows for multiple colors to be chosen via hexcode, and these codes may be
                            copy and pasted to another source. The plus button will generate another color that
                            is similar to the last swatch in the grid. 

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="https://rainbow-swatches.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <b> Try Swatches Out Here!</b>
                        </a>

                        </p>

                        
                    </div>
            </div>
            
        </div>
    );
}