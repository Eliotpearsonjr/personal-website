import Image from "next/image";
// Personal Portfolio Website
// Work/Projects Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-2 mx-10 mb-10"
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

export default function Work() {
    return (
        // inner postcard background
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

            <div className="justify-items-center items-center bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 mx-10 my-10 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
                <p>Choose a project!</p>
            </div>

            
            
            {/* list of projects */}
            <CandyFrame>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-orange-50 dark:bg-stone-800 rounded-xl items-center justify-items-center min-h-screen p-4 gap-8 font-[family-name:var(--font-geist-sans)]">

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Lets_Go_Logo_Sticker.webp')",
                        }}
                        href="/project_pages/lets_go"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Lets_Go_Logo_Sticker.webp"
                            width={400}
                            height={400}
                            alt="LET'S GO Logo Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Plip_Pets_Logo_Sticker_Transparent_.webp')",
                        }}
                        href="/project_pages/plip_pets"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Plip_Pets_Logo_Sticker_Transparent_.webp"
                            width={500}
                            height={300}
                            alt="Plip Pets Logo Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Swatches_Logo_Big.webp')",
                        }}
                        href="/project_pages/swatches"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Swatches_Logo_Big.webp"
                            width={500}
                            height={500}
                            alt="Swatches Logo Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Reward_Sprout_Big_Icon.webp')",
                        }}
                        href="/project_pages/beer_n_bots"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Reward_Sprout_Big_Icon.webp"
                            width={200}
                            height={200}
                            alt="Reward Sprout Logo Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Mix_N_Munch_App_Icon.webp')",
                        }}
                        href="/project_pages/beer_n_bots"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Mix_N_Munch_App_Icon.webp"
                            width={200}
                            height={200}
                            alt="Mix N Munch Logo Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-120"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/Beer_N_Bots_Logo_Sticker.webp')",
                        }}
                        href="/project_pages/beer_n_bots"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/Beer_N_Bots_Logo_Sticker.webp"
                            width={500}
                            height={300}
                            alt="Beer N Bots Logo Button"
                            />
                        </div>
                    </a>
                </div>
            </CandyFrame>
        </div>
    );
}