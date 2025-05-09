import Image from "next/image";
// Personal Portfolio Website
// Work Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function Contact() {
    return (
        <div className="postcard-bg">
            <div className="grid grid-rows-[20px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <p>Choose a project.</p>
                <a
                    //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/Sprites/Plip_Pets_Logo_Sticker_Transparent_.png"
                        width={500}
                        height={300}
                        alt="Plip Pets Logo Button"
                        />
                </a>

                <a
                    //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/Sprites/Beer_N_Bots_Logo_Sticker.png"
                        width={600}
                        height={300}
                        alt="Beer N Bots Logo Button"
                        />
                </a>

                <a
                    //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
                    href="/project_pages/plip_pets"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Image
                        src="/Sprites/Reward_Sprout_Big_Icon.png"
                        width={300}
                        height={300}
                        alt="Reward Sprout Logo Button"
                        />
                </a>
            </div>
        </div>
    );
}