import Image from "next/image";
// Personal Portfolio Website
// Work Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function Contact() {
    return (
        // inner postcard background
        <div className="bg-orange-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">

            <div className="justify-items-center items-center bg-orange-50 dark:bg-stone-800 text-stone-800 dark:text-stone-100 mx-10 mt-10 p-4 rounded-2xl text-left border-2 border-orange-900/30 dark:border-stone-600 transition-opacity duration-300 text-lg font-regular">
                <p>Choose a project!</p>
            </div>
            
            {/* list of projects */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                
                <a
                    className="rotate-350 transition-transform ease-in-out hover:scale-120"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        className="drop-shadow-lg"
                        src="/Sprites/Plip_Pets_Logo_Sticker_Transparent_.webp"
                        width={500}
                        height={300}
                        alt="Plip Pets Logo Button"
                        />
                </a>

                <a
                    className="transition-transform ease-in-out hover:scale-120"
                    href="/project_pages/beer_n_bots"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        className="drop-shadow-lg"
                        src="/Sprites/Beer_N_Bots_Logo_Sticker.webp"
                        width={600}
                        height={300}
                        alt="Beer N Bots Logo Button"
                        />
                </a>

                <a
                    className="transition-transform ease-in-out hover:scale-120"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        className="drop-shadow-lg"
                        src="/Sprites/Reward_Sprout_Big_Icon.webp"
                        width={200}
                        height={200}
                        alt="Reward Sprout Logo Button"
                        />
                </a>

                <a
                    className="transition-transform ease-in-out hover:scale-120"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        className="drop-shadow-lg"
                        src="/Sprites/Mix_N_Munch_App_Icon.png"
                        width={200}
                        height={200}
                        alt="Mix N Munch Logo Button"
                        />
                </a>
            </div>
        </div>
    );
}