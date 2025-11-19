"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// LET'S GO Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-1"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255, 221, 182, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 218, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
        }}
      >
        {/* white inner panel */}
        <div className="rounded-xl">
          {children}
        </div>
      </div>
    );
}

export default function Letsgo() {

    // varibles for selecting plip type descriptions
    const [selectedPlip, setSelectedPlip] = useState<string | null>(null);

    // descriptions for each plip type
    const plipInfo: { [key: string]: string } = {
        Cozy: "This Otter Engineer is always thinking about what to fix next. He carries his trusty wrench where ever he goes to lend a helping hand!",
        Fluffy: "RockBot is an experienced archeaologist who loves to unearth new, interactive ways to teach everyone about STEM.",
        Winter: "This bubbling bottle is a potion chockful of STEM topics, sure to help any student empower their own future!",
        Woodsy: "RockBot searches far and wide for his next geologic excursion, as he seeks to understand the science of our great planet.",
      };

    return (
        // inner postcard background
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">
            
                <Image
                    className="mx-auto block h-auto"
                    src="/Sprites/Lets_Go_Logo_Sticker.webp"
                    width={400}
                    height={400}
                    alt="LET'S GO Logo Header"
                />

                {/* Section Title - Plip Pets */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-4xl font-semibold">LET'S GO - Empowering Futures with STEM</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                    {/* Section Body - Summary */}

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
                        <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
                        I have designed promotional graphics, original characters, and student-facing materials for LET'S GO,
                        helping the non-profit to boost its brand recognition and community engagement. I used <b>Canva </b>
                        and <b>Procreate </b> to create refreshing designs for the organization's digital presence.
                        </p>
                    </div>
                

                    {/* Stamps with logos of software products used */}
                    <div className= "flex flex-row ml-5 mb-5">
                        <a className="text-center">
                            <Image
                                className="rotate-4"
                                src="/Sprites/Canva_Stamp.png"
                                width={250}
                                height={250}
                                alt="Canva Logo Stamp"
                            />
                            <p className="text-lg font-semibold">Canva</p>
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
                
                {/* Section Title - Photo Gallery */}
                <div className="text-stone-700 dark:text-white border-b-2 border-rose-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Promotional Materials</p>
                </div>

                {/* horizontal scrollable gallery */}
                {/* Centers Gallery in middle of screen */}
                
                <CandyFrame>
                    <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                        <div className="flex space-x-6 items-center justify-start min-w-fit w-max">

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/LETS_GO_Rack_Card_Page1.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/LETS_GO_Rack_Card_Page1.png"
                                    width={200}
                                    height={200}
                                    alt="LET'S GO STEM Rack Card"
                                />
                            </a>

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/LETS_GO_Rack_Card_Page2.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/LETS_GO_Rack_Card_Page2.png"
                                    width={200}
                                    height={200}
                                    alt="LET'S GO STEM Rack Card"
                                />
                            </a>

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/Sticker_Choice_Sheet.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/Sticker_Choice_Sheet.png"
                                    width={210}
                                    height={210}
                                    alt="LET'S GO STEM Connect Event Poster"
                                />
                            </a>


                        </div>
                    </div>
                </CandyFrame>




                {/* Section Title - Original Characters */}
                <div className="text-stone-700 dark:text-white border-b-2 border-rose-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 my-4">
                    <p className="text-2xl font-semibold">Event Graphics</p>
                </div>

                {/* Gameplay Images - horizontal scrollable gallery, scales with screen */}
                <CandyFrame>
                    <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                        <div className="flex space-x-10 items-center justify-start min-w-fit w-max">

                        <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/RoboCEO_Sandwich_Poster.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/RoboCEO_Sandwich_Poster.png"
                                    width={350}
                                    height={350}
                                    alt="LET'S GO RoboCEO Event Poster"
                                />
                            </a>

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/All_Drivers_Robo_CEO_Card.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/All_Drivers_Robo_CEO_Card.png"
                                    width={450}
                                    height={450}
                                    alt="LET'S GO RoboCEO Promotional Poster"
                                />
                            </a>

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/Driver_Tag.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/Driver_Tag.png"
                                    width={450}
                                    height={450}
                                    alt="LET'S GO RoboCEO Driver Announcement and Nametag template"
                                />
                            </a>

                            <a
                                className="transition-transform ease-in-out hover:scale-110"
                                href="/Sprites/STEM_Connect_Poster.png"
                                target="_self"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    className="rounded-xl drop-shadow-lg"
                                    src="/Sprites/STEM_Connect_Poster.png"
                                    width={300}
                                    height={300}
                                    alt="LET'S GO STEM Connect Event Poster"
                                />
                            </a>

                            
                            

                        </div>
                    </div>
                </CandyFrame>


                {/* Section Body - Core Gameplay */}
                <div className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 my-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 font-regular">
                    <p className="text-2xl font-regular">
                        LET’S GO is a non-profit with to mission create economic success for underserved and marginalized communities through STEM education
                        and workforce development. These events were hosted to enagage the local community
                        and drive donations to fund their educational programming.
                    </p>
                    
                </div>

                {/* Section Title - Plip Types */}
                <div className="text-stone-700 dark:text-white border-b-2 border-rose-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-2xl font-semibold">Sticker Designs</p>
                </div>

                {/* Section Body - Stickers Introduction */}
                <div className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-30 font-regular">
                    <p className="text-2xl font-regular">
                        These sticker designs have been printed and given out during events, pop-ups, and to students during school-year programming. 
                        <b> Click each design to learn more!</b>
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-items-center gap-1 font-[family-name:var(--font-geist-sans)]">

                    {/* Sticker Icons */}
                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Cozy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Otter_Mascot_Sticker_Concept.png"
                            width={300}
                            height={300}
                            alt="Otter Sticker"
                        />
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Fluffy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/STEM_Robot.png"
                            width={300}
                            height={300}
                            alt="RockBot STEM Sticker"
                        />
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Winter")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Stem_Potion_Sticker_Concept.png"
                            width={300}
                            height={300}
                            alt="STEM Potion Sticker"
                        />
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Woodsy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Robot_Venture_Sticker3.png"
                            width={300}
                            height={300}
                            alt="RockBot Sticker"
                        />
                    </div>
                    
                </div>

                {/* pop-up div that displays plip type info when clicked */}
                {selectedPlip == "Fluffy" && (
                    <div className="bg-blue-50 dark:bg-stone-800 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-blue-900/30 dark:border-blue-300/30 shadow-lg transition-opacity duration-300 font-regular">

                        {/* 'close' button for information pop-up */}
                        <button
                            onClick={() => setSelectedPlip(null)}
                            className="text-xl text-right block ml-auto text-pink-700 hover:underline"
                        >
                            Close
                        </button>

                        <p className="text-2xl font-medium">{plipInfo[selectedPlip]}</p>
                    </div>
                )}
                {selectedPlip == "Cozy" && (
                    <div className="bg-blue-50 dark:bg-stone-800 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-blue-900/30 dark:border-blue-300/30 shadow-lg transition-opacity duration-300 font-regular">

                        {/* 'close' button for information pop-up */}
                        <button
                            onClick={() => setSelectedPlip(null)}
                            className="text-xl text-right block ml-auto text-pink-700 hover:underline"
                        >
                            Close
                        </button>

                        <p className="text-2xl font-medium">{plipInfo[selectedPlip]}</p>
                    </div>
                )}
                {selectedPlip == "Winter" && (
                    <div className="bg-blue-50 dark:bg-stone-800 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-blue-900/30 dark:border-blue-300/30 shadow-lg transition-opacity duration-300 font-regular">

                        {/* 'close' button for information pop-up */}
                        <button
                            onClick={() => setSelectedPlip(null)}
                            className="text-xl text-right block ml-auto text-pink-700 hover:underline"
                        >
                            Close
                        </button>

                        <p className="text-2xl font-medium">{plipInfo[selectedPlip]}</p>
                    </div>
                )}
                {selectedPlip == "Woodsy" && (
                    <div className="bg-blue-50 dark:bg-stone-800 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-blue-900/30 dark:border-blue-300/30 shadow-lg transition-opacity duration-300 font-regular">

                        {/* 'close' button for information pop-up */}
                        <button
                            onClick={() => setSelectedPlip(null)}
                            className="text-xl text-right block ml-auto text-pink-700 hover:underline"
                        >
                            Close
                        </button>

                        <p className="text-2xl font-medium">{plipInfo[selectedPlip]}</p>
                    </div>
                )}

            </div>
            
        </div>
    );
}