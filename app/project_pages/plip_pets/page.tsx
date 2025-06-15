"use client";
import Image from "next/image";
import {useState} from "react";
// Personal Portfolio Website
// Plip Pets Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25

export default function PlipPets() {

    // varibles for selecting plip type descriptions
    const [selectedPlip, setSelectedPlip] = useState<string | null>(null);

    // descriptions for each plip type
    const plipInfo: { [key: string]: string } = {
        Cozy: "Cozy Plips enjoy warm treats like soups and tea. They love to nap and relax all day!",
        Fluffy: "Fluffy Plips are soft and affectionate. Be careful as they are extraordinarily high-maintenance!",
        Winter: "Winter Plips love to play in the snow and chilly treats like ice cream.",
        Woodsy: "Woodsy Plips spend lots of time outdoors and aren't afraid to get their hands dirty. They adore fresh fruits. ",
      };

    return (
        // inner postcard background
        <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">
            
                <Image
                    className="rotate-350 mb-4 mx-auto block h-auto"
                    src="/Sprites/Plip_Pets_Logo_Sticker_Transparent_.webp"
                    width={400}
                    height={300}
                    alt="Plip Pets Logo Header"
                />

                {/* Section Title - Plip Pets */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Plip Pets</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
                        <p className="bg-orange-50 text-stone-700/90 ml-5 mr-5 p-4 pb-8 rounded-2xl text-lg font-regular">
                            Plip Pets is an indie game that I started development on in 2024.
                            The game features cute collectible creatures called 'Plips' that you
                            care for and call your own. You can feed them, play with them and much
                            more. I developed this game using <b> Unity, </b> and created all of my assets
                            in <b> Procreate.</b>
                        </p>
                    </div>
                

                    {/* Stamps with logos of software products used */}
                    <div className= "flex flex-col lg:flex-row ml-5 mb-5">
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
                
                {/* Section Title - Art Gallery */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Sprite and Concept Art Gallery</p>
                </div>

                {/* Concept Art Images */}
                {/* Gameplay Images - horizontal scrollable gallery */}
                <div className="bg-stone-50/90 mt-4 mb-4 mx-5 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                    <div className="flex space-x-6 items-center justify-start min-w-fit w-max">

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Sweets_Concept.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Sweets_Concept.webp"
                                width={300}
                                height={300}
                                alt="Sweet Food Concept Image"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Savory_Concept.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Savory_Concept.webp"
                                width={300}
                                height={300}
                                alt="Savory Food Concept Image"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Official_Clover_Concept_Art.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Official_Clover_Concept_Art.png"
                                width={300}
                                height={300}
                                alt="Clover Concept Image"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Kitsune_Postcard.webp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Kitsune_Postcard.webp"
                                width={300}
                                height={300}
                                alt="Kistune Character Postcard Image"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Tabby_Postcard.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Tabby_Postcard.png"
                                width={300}
                                height={300}
                                alt="Tabby Character Postcard Image"
                            />
                        </a>

                        <a
                            className="transition-transform ease-in-out hover:scale-110"
                            href="/Sprites/Nimbus_Postcard.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rounded-xl drop-shadow-lg"
                                src="/Sprites/Nimbus_Postcard.png"
                                width={300}
                                height={300}
                                alt="Nimbus Character Postcard Image"
                            />
                        </a>

                    </div>
                </div>


                {/* Section Title - Core Gameplay */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Core Gameplay</p>
                </div>

                {/* Gameplay Images - horizontal scrollable gallery, scales with screen */}
                <div className="bg-stone-50/90 mt-4 mb-4 mx-5 pt-8 pb-8 px-8 rounded-xl overflow-x-auto">
                    <div className="flex space-x-6 items-center justify-start min-w-fit w-max">

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Plip_Pets_Beta_Home.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Plip_Pets_Beta_Home.webp"
                            width={200}
                            height={200}
                            alt="Beta Home Screen Image"
                        />
                        </a>

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Plip_Pets_Beta_Fridge.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Plip_Pets_Beta_Fridge.webp"
                            width={200}
                            height={200}
                            alt="Beta Fridge Image"
                        />
                        </a>

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Plip_Pets_Beta_Ball_Game.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Plip_Pets_Beta_Ball_Game.webp"
                            width={200}
                            height={200}
                            alt="Beta Ball Minigame Image"
                        />
                        </a>

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Bath_Background-2-copy.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Bath_Background-2-copy.webp"
                            width={200}
                            height={200}
                            alt="Beta Bath Scene Image"
                        />
                        </a>

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Beta_Title_Screen.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Beta_Title_Screen.webp"
                            width={200}
                            height={200}
                            alt="Beta Title Screen Image"
                        />
                        </a>

                        <a
                        className="transition-transform ease-in-out hover:scale-110"
                        href="/Sprites/Clover_Help_Concept_2.webp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            className="rounded-xl drop-shadow-lg"
                            src="/Sprites/Clover_Help_Concept_2.webp"
                            width={200}
                            height={200}
                            alt="Clover Help Concept Image"
                        />
                        </a>

                    </div>
                </div>


                {/* Section Body - Core Gameplay */}
                <div className="bg-orange-50 text-stone-700/90 p-4 pb-8 rounded-2xl ml-5 mr-5">
                    <p className="text-lg font-regular">
                        There are three major gameplay elements featured, being
                        <b> Snack Time, Bath Time,</b> and <b> Play Time. </b>
                        Each of the core features allows for the user to interact with
                        their Plip, complete with a responsive UI.
                    </p>
                    
                </div>

                {/* Section Title - Plip Types */}
                <div className="text-stone-700 border-b-2 border-stone-700/10 pb-2 ml-7 mr-7 mt-4 mb-4">
                    <p className="text-2xl font-semibold">Types of Plips</p>
                </div>

                {/* Section Body - Types Introduction */}
                <div className="bg-orange-50 text-stone-700/90 p-4 pb-8 rounded-2xl ml-5 mr-5">
                    <p className="text-lg font-regular">
                        Plips can be one of four different types: <b>Cozy, Fluffy, Winter, </b> or 
                        <b> Woodsy.</b> Each different type generally prefers certain types of activities 
                        and foods. In game, feeding Plips their favorite foods will increase their affection more!
                        <b> Click the icons to learn more about what each type likes!</b>
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-items-center gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">

                    {/* Icons to learn more about the types */}
                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Cozy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Cozy_Button.webp"
                            width={200}
                            height={200}
                            alt="Cozy Type Button"
                        />
                        <p className="text-xl font-semibold">Cozy</p>
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Fluffy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Fluffy_Button.webp"
                            width={200}
                            height={200}
                            alt="Fluffy Type Button"
                        />
                        <p className="text-xl font-semibold">Fluffy</p>
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Winter")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Winter_Button.webp"
                            width={200}
                            height={200}
                            alt="Winter Type Button"
                        />
                        <p className="text-xl font-semibold">Winter</p>
                    </div>

                    <div
                        className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
                        onClick={() => setSelectedPlip("Woodsy")}
                    >
                        <Image
                            className="rounded-xl drop-shadow-md"
                            src="/Sprites/Woodsy_Button.webp"
                            width={200}
                            height={200}
                            alt="Woodsy Type Button"
                        />
                        <p className="text-xl font-semibold">Woodsy</p>
                    </div>
                    
                </div>

                {/* pop-up div that displays plip type info when clicked */}
                {selectedPlip && (
                    <div className="bg-orange-50 text-stone-800 ml-5 mr-5 mb-5 p-4 rounded-2xl text-center transition-opacity duration-300">

                        {/* 'close' button for information pop-up */}
                        <button
                            onClick={() => setSelectedPlip(null)}
                            className="text-sm text-right block ml-auto text-pink-700 hover:underline"
                        >
                            Close
                        </button>

                        <p className="text-lg font-medium">{plipInfo[selectedPlip]}</p>
                    </div>
                )}

            </div>
            
        </div>
    );
}