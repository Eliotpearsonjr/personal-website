import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
// Personal Portfolio Website
// Home Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-[10px] sm:p-1 shadow-md"
      style={{
        background:
          "repeating-linear-gradient(45deg, rgba(255, 182, 193, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 218, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
      }}
    >
      {/* Your original white panel stays intact inside here */}
      <div className="rounded-x">
        {children}
      </div>
    </div>
  );
}

function PostcardTitle() {
  return (
    <div className="relative w-full flex items-center justify-center my-8">
      <div className="relative inline-block select-none">
        {/* Sticker-y text with gradient fill, white outline, and soft shadow */}
        <h1
          className={[
            "text-center font-black tracking-tight",
            "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
            "bg-neutral-800",
            "bg-clip-text text-transparent",
            "drop-shadow-md",
          ].join(" ")}
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow:
              "0 0 0 #fff, 0 2px 4px rgba(0,0,0,0.15)",
          }}
        >
          Eliot Pearson Jr
        </h1>

        {/* Tiny "stamp" badge in the corner */}
        <div
          className="absolute -top-6 -right-4 rotate-6 bg-white/90 dark:bg-stone-900/90 text-[10px] sm:text-xs px-4 py-2 rounded-[8px] border border-rose-300 shadow"
          style={{
            boxShadow: "2px 2px 0 rgba(0,0,0,.12)",
            
          }}
        >
          ✦ GREETINGS FROM
        </div>
      </div>
    </div>
  );
}

function FullBleedBanner({
  src,
  alt = "Portfolio banner",
}: {
  src: string;
  alt?: string;
}) {
  return (
    // full-bleed banner
    <div className="relative flex justify-center w-full">
      {/* thin, responsive height */}
      <div className="relative w-full max-w-screen h-35 sm:h-20 md:h-45 lg:h-65 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />

          <div className="absolute inset-x-0 inset-y-0 flex items-center justify-right text-2xl sm:text-5xl ml-50 text-white">
            <p>Curating iconic brand design that sticks.</p>
          </div>
          
          <div className="absolute inset-x-0 inset-y-45 flex items-center justify-right text-xl sm:text-2xl ml-50 text-white">
            <p>I blend design and visual storytelling to craft cohesive brand identities worth loving.</p>
          </div>

        
      </div>
      
    </div>
  );
}

// latest portfolio work shown in the horizontally scrolling gallery
const latestWork = [
  {
    href: "/project_pages/pathways",
    src: "/Sprites/thumbnails/Thumbnail_STEM_Pathways_Large.png",
    alt: "LET'S GO STEM Pathways Design Work",
  },
  {
    href: "/project_pages/ccl_playbook",
    src: "/Sprites/thumbnails/Thumbnail_CCL_Playbook.png",
    alt: "Career Connected Learning Playbook Design Work",
  },
  {
    href: "/project_pages/MIM",
    src: "/Sprites/thumbnails/Thumbnail_MIM.png",
    alt: "Math Identity Matters Design Work",
  },
  {
    href: "/project_pages/football",
    src: "/Sprites/thumbnails/Thumbnail_Football.png",
    alt: "Football Portfolio Design Work",
  },
  {
    href: "/project_pages/plip_pets",
    src: "/Sprites/thumbnails/Thumbnail_Plip_Pets_Inner.png",
    alt: "Plip Pets Design Work",
  },
];

// The track holds this many identical back-to-back copies of the slides. It loops by
// sliding exactly one copy's width, and the extra copies keep it seamless on very wide screens.
const GALLERY_COPIES = 4;

function LatestWorkGallery() {
  return (
    // negative margins cancel the page's padding (40px, plus 80px more from sm up)
    // so this band runs edge to edge across the screen
    <div className="justify-self-stretch min-w-0">
      {/* same candy stripe as the other frames, as a band above and below */}
      <div
        className="py-[10px]"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgba(255, 182, 193, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 218, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
        }}
      >
        <div className="bg-neutral-50 dark:bg-stone-700 pt-6 pb-4 font-[family-name:var(--font-geist-sans)]">

          {/* window onto the moving track; people who prefer reduced motion get a normal scrollable row instead */}
          <div
            role="region"
            aria-label="Latest work gallery"
            className="overflow-x-clip motion-reduce:overflow-x-auto py-3"
          >
            {/* slowly slides sideways; paused while a project is hovered or focused (see globals.css) */}
            <div
              className="latest-work-track flex w-max"
              style={{ "--loop-shift": `-${100 / GALLERY_COPIES}%` } as React.CSSProperties}
            >
              {Array.from({ length: GALLERY_COPIES }, (_, copy) => (
                <div
                  key={copy}
                  // copies after the first are only there for the looping, so screen readers,
                  // keyboard users and reduced-motion users never see them
                  aria-hidden={copy > 0 ? true : undefined}
                  className={copy > 0 ? "flex shrink-0 motion-reduce:hidden" : "flex shrink-0"}
                >
                  {latestWork.map((item) => (
                    <a
                      key={item.href}
                      // slide size: w-72 (phones) / sm:w-96 (larger screens).
                      // mr-5 is the space after every slide, so the gap is identical everywhere, including where the loop restarts.
                      // hover:z-10 / focus-visible:z-10 lift the active slide in front of its neighbors.
                      className="relative group shimmer-button shrink-0 w-72 sm:w-135 mr-5 transition-transform ease-in-out hover:scale-130 hover:z-10 focus-visible:z-10"
                      style={{ "--image-mask": `url('${item.src}')` } as React.CSSProperties}
                      href={item.href}
                      target="_self"
                      rel="noopener noreferrer"
                      tabIndex={copy > 0 ? -1 : undefined}
                    >
                      <div className="motion-target">
                        <Image
                          className="drop-shadow-lg w-full h-auto"
                          src={item.src}
                          width={600}
                          height={400}
                          sizes="(min-width: 640px) 384px, 288px"
                          alt={copy > 0 ? "" : item.alt}
                          draggable={false}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
    <SiteHeader />
    <div className="bg-neutral-50 dark:bg-stone-800 text-stone-700 dark:text-stone-100 pb-10 transition-opacity duration-300">

    <FullBleedBanner src="/Sprites/Nymblu_Banner_Crop.png" />

      <div className="font-semibold text-3xl items-center justify-items-center min-h-screen gap-5">

        

         {/* Occupational Line */}
         <div className="text-stone-700 dark:text-white sm:justify-items-left md:justify-items-center lg:justify-items-center">

          <p className="text-2xl font-regular mt-5">Graphic Designer, Brand Strategist, Web Designer</p>
        </div>

        <div className="bg-pink-100 relative w-full max-w-screen text-stone-700 dark:text-white pb-10 sm:justify-items-left md:justify-items-center lg:justify-items-center">

          <h2 className="text-5xl font-semibold text-center text-neutral-700 dark:text-neutral-100 pt-10 my-6">
            Featured Work
          </h2>

          {/* latest work, horizontally scrolling gallery */}
        <LatestWorkGallery />
        </div>


      </div>
    </div>
    </>
  );
}

// <a> tag contains hyperlinks for each page
// <p> tag for paragraph text