import Image from "next/image";
// Personal Portfolio Website
// Plip Pets Subpage
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function PlipPets() {
    return (
        // inner postcard background
        <div className="bg-orange-100 p-1 mt-15 ml-15 mr-15 mb-15 rounded-lg">

            {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
            <div className="flex flex-col gap-2 mt-10">
            
                <Image
                    className="rotate-350 mb-4 mx-auto block h-auto"
                    src="/Sprites/Plip_Pets_Logo_Sticker_Transparent_.png"
                    width={300}
                    height={300}
                    alt="Plip Pets Logo Header"
                />

                {/* Section Title - Plip Pets */}
                <div className="text-stone-700 p-4 rounded-md ml-10 mr-10">
                    <p className="text-lg font-semibold">Plip Pets</p>
                </div>

                {/* Section Body - Summary */}
                <div className="bg-orange-900/5 text-stone-700/90 p-4 pb-8 rounded-md ml-10 mr-10 mb-2">
                    <p className="text-lg font-regular">
                        Plip Pets is an indie game that I started development on in 2024.
                        The game features cute collectible creatures called 'Plips' that you
                        care for and call your own. You can feed them, play with them and much
                        more. I developed this game using Unity, and created all of my assets
                        in Procreate.
                    </p>
                </div>

                {/* Section Title - Plip Types */}
                <div className="text-stone-700 p-4 rounded-md ml-10 mr-10">
                    <p className="text-lg font-semibold">Types of Plips</p>
                </div>

                {/* Section Body - Types Introduction */}
                <div className="bg-orange-900/5 text-stone-700/90 p-4 pb-8 rounded-md ml-10 mr-10">
                    <p className="text-lg font-regular">
                        Plips can be one of four different types: Cozy, Fluffy, Winter, or Woodsy.
                        Each different type generally prefers certain types of activities and foods.
                        In game, feeding Plips their favorite foods will increase their affection more!
                        Click the icons to learn more about what each type likes!
                    </p>
                </div>

                <div className="grid grid-cols-4 items-center justify-items-center gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">

                    {/* Icons to learn more about the types */}
                    <a
                        className="transition-transform ease-in-out hover:scale-120"
                        href="/project_pages/plip_pets"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            
                            src="/Sprites/Cozy_Button.png"
                            width={200}
                            height={200}
                            alt="Cozy Type Button"
                        />
                    </a>

                    <a
                        className="transition-transform ease-in-out hover:scale-120"
                        href="/project_pages/plip_pets"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Sprites/Fluffy_Button.png"
                            width={200}
                            height={200}
                            alt="Fluffy Type Button"
                        />
                    </a>

                    <a
                        className="transition-transform ease-in-out hover:scale-120"
                        href="/project_pages/plip_pets"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Sprites/Winter_Button.png"
                            width={200}
                            height={200}
                            alt="Winter Type Button"
                        />
                    </a>

                    <a
                        className="transition-transform ease-in-out hover:scale-120"
                        href="/project_pages/plip_pets"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/Sprites/Woodsy_Button.png"
                            width={200}
                            height={200}
                            alt="Woodsy Type Button"
                        />
                    </a>

                    <p className="text-lg font-semibold">Cozy</p>
                    <p className="text-lg font-semibold">Fluffy</p>
                    <p className="text-lg font-semibold">Winter</p>
                    <p className="text-lg font-semibold">Woodsy</p>
                    
                </div>
                
            </div>
            
        </div>
    );
}