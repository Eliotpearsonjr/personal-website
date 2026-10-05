import Image from "next/image";
import Link from "next/link";
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
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "bg-white",
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
      <div className="relative w-full max-w-screen-2xl h-15 sm:h-20 md:h-30 lg:h-35 rounded-xl overflow-hidden ring-3 ring-white dark:ring-rose-300/70">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 p-10 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">
      <div className="grid grid-rows font-semibold text-3xl items-center justify-items-center min-h-screen gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        

        <FullBleedBanner src="/Sprites/Banner_Stripe.png" />

        <PostcardTitle/>

        {/* main menu, each page will open in the same tab */}
        <CandyFrame>
          <div className="bg-neutral-50 dark:bg-stone-700 my-1 mx-1 px-10 py-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 sm:p-4 justify-items-left rounded-sm font-[family-name:var(--font-geist-sans)]">

                {/* Projects Page Clickable Card*/}
                <a
                  className="flex flex-col items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/work"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <Image 
                      className="rounded-2xl drop-shadow-lg overflow-hidden"
                      src="/Sprites/menu/Menu_Card_Projects.png"
                      width={250}
                      height={250}
                      alt="Project Info Image"
                    />
                  <p className="text-neutral-700 dark:text-neutral-100 p-4">Projects</p>
                </a>

                {/* Contact Page Clickable Card*/}
                <a
                  className="flex flex-col items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/contact"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  
                  <Image 
                      className="rounded-2xl drop-shadow-lg overflow-hidden"
                      src="/Sprites/menu/Menu_Card_Contact_Light.png"
                      width={250}
                      height={250}
                      alt="Contact Info Image"
                    />
                  <p className="text-neutral-700 dark:text-neutral-100 p-4">Contact</p>
                </a>

                {/* About Page Clickable Card*/}
                <a
                  className="flex flex-col items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/about"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  
                  <Image 
                      className="rounded-2xl drop-shadow-lg overflow-hidden"
                      src="/Sprites/menu/Menu_Card_About.png"
                      width={250}
                      height={250}
                      alt="About Image"
                    />
                  <p className="text-neutral-700 dark:text-neutral-100 p-4">About</p>
                </a>          
              </div>
            </div>
          </CandyFrame>
      </div>
    </div>
    
  );
}

// <a> tag contains hyperlinks for each page
// <p> tag for paragraph text