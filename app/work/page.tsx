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
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-orange-50 dark:bg-stone-800 rounded-xl items-center justify-items-center p-5 gap-4 font-[family-name:var(--font-geist-sans)]">

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_RoboCEO_26.png')",
                        }}
                        href="/project_pages/roboceo"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_RoboCEO_26.png"
                            width={600}
                            height={400}
                            alt="LET'S GO RoboCEO Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_STEM_Pathways.png')",
                        }}
                        href="/project_pages/plip_pets"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_STEM_Pathways.png"
                            width={600}
                            height={400}
                            alt="LET'S GO STEM Pathways Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_CCL_Playbook.png')",
                        }}
                        href="/project_pages/swatches"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_CCL_Playbook.png"
                            width={600}
                            height={400}
                            alt="Career Connected Learning Playbook Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_Football.png')",
                        }}
                        href="/project_pages/beer_n_bots"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_Football.png"
                            width={600}
                            height={400}
                            alt="Football Portfolio Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_LETSGO.png')",
                        }}
                        href="/project_pages/lets_go"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_LETSGO.png"
                            width={600}
                            height={400}
                            alt="LET'S GO Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_Swatches.png')",
                        }}
                        href="/project_pages/swatches"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_Swatches.png"
                            width={600}
                            height={400}
                            alt="Swatches App Branding and Design Work Button"
                            />
                        </div>
                    </a>

                    <a
                        className="relative group shimmer-button transition-transform ease-in-out hover:scale-102"
                        style={{
                            ['--image-mask' as any]: "url('/Sprites/thumbnails/Thumbnail_JHOC.png')",
                        }}
                        href="/project_pages/beer_n_bots"
                        target="_self"
                        rel="noopener noreferrer"
                        >
                        <div className="motion-target">
                            <Image
                            className="drop-shadow-lg"
                            src="/Sprites/thumbnails/Thumbnail_JHOC.png"
                            width={600}
                            height={400}
                            alt="Beer N Bots Logo Button"
                            />
                        </div>
                    </a>
                </div>
            </CandyFrame>
        </div>
    );
}