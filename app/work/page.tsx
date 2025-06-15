import Image from "next/image";
// Personal Portfolio Website
// Work Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function Contact() {
    return (
        <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
            <div className="grid grid-rows-[20px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <p>Choose a project.</p>
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
                    className="rotate-2 transition-transform ease-in-out hover:scale-120"
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
                    className="rotate-357 transition-transform ease-in-out hover:scale-120"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        className="drop-shadow-lg"
                        src="/Sprites/Reward_Sprout_Big_Icon.webp"
                        width={300}
                        height={300}
                        alt="Reward Sprout Logo Button"
                        />
                </a>
            </div>
        </div>
    );
}