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
      className="rounded-2xl p-[10px] sm:p-1"
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

function PostcardTitle() {
  return (
    <div className="relative w-full flex items-center justify-center px-2">
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

export default function Home() {
  return (
    <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-10 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">
      <div className="grid grid-rows font-semibold text-3xl items-center justify-items-center min-h-screen p-2 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <PostcardTitle/>

        <CandyFrame>
          <div className="bg-orange-50 dark:bg-stone-700 my-1 mx-1 px-3 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:p-4 justify-items-left rounded-sm font-[family-name:var(--font-geist-sans)]">

                <a
                  className="flex flex-row items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/work"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <p className="bg-blue-200 w-70 text-neutral-800 p-4 rounded-2xl shadow-md border-4 border-white">Projects</p>
                  <Image 
                      className="rotate-355 drop-shadow-lg overflow-hidden"
                      src="/Sprites/Projects_Sticker_Button.png"
                      width={250}
                      height={250}
                      alt="Project Info Image"
                    />

                </a>

                <a
                  className="flex flex-row items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/characters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="bg-green-200 w-70 text-neutral-800 p-4 rounded-2xl shadow-md border-4 border-white">Characters</p>
                  <Image 
                      className="drop-shadow-lg overflow-hidden"
                      src="/Sprites/Capymel_Character_Tab.png"
                      width={250}
                      height={250}
                      alt="Characters Image"
                    />

              
                </a>

                <a
                  className="flex flex-row items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="bg-orange-200 w-70 text-neutral-800 p-4 rounded-2xl shadow-md border-4 border-white">Contact</p>
                  <Image 
                      className="rotate-10 drop-shadow-lg overflow-hidden"
                      src="/Sprites/Contact_Sticker_Button.png"
                      width={250}
                      height={250}
                      alt="Contact Info Image"
                    />

                </a>

                <a
                  className="flex flex-row items-center font-semibold text-xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="bg-rose-200 w-70 text-neutral-800 p-4 rounded-2xl shadow-md border-4 border-white">About</p>
                  <Image 
                      className="rotate-5 drop-shadow-lg overflow-hidden"
                      src="/Sprites/About_Sticker_Button.png"
                      width={250}
                      height={250}
                      alt="About Image"
                    />

              
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