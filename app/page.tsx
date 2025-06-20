import Image from "next/image";
import Link from "next/link";
// Personal Portfolio Website
// Home Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

export default function Home() {
  return (
    <div className="bg-orange-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
      <div className="grid grid-rows font-semibold text-3xl items-center justify-items-center min-h-screen p-2 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <p>Greetings From,</p>

        <div className="font-bold text-6xl text-amber-900 dark:text-orange-200">
          <p>Eliot Pearson Jr</p>
        </div>

        <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:p-4 justify-items-center rounded-sm font-[family-name:var(--font-geist-sans)]">

        <a
            className="flex flex-col items-center font-semibold text-4xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
            href="/work"
            target="_blank"
            rel="noopener noreferrer"
          >

            <p className="bg-blue-200 text-neutral-800 p-4 rounded-4xl ml-5 mr-5 shadow-md border-4 border-white">Projects</p>
            <Image 
                className="rotate-355 drop-shadow-lg"
                src="/Sprites/Projects_Sticker_Button.png"
                width={700}
                height={700}
                alt="Project Info Image"
                // priority
              />

        </a>
          
          
          <a
            className="flex flex-col items-center font-semibold text-4xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="bg-green-200 text-neutral-800 p-4 rounded-4xl ml-5 mr-5 shadow-md border-4 border-white">Contact</p>
            <Image 
                className="rotate-10 drop-shadow-lg"
                src="/Sprites/Contact_Sticker_Button.png"
                width={700}
                height={700}
                alt="Contact Info Image"
                // priority
              />


          </a>

          <a
            className="flex flex-col items-center font-semibold text-4xl text-center cursor-pointer transition-transform ease-in-out hover:scale-110 text-center"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="bg-rose-200 text-neutral-800 p-4 rounded-4xl ml-5 mr-5 shadow-md border-4 border-white">About</p>
            <Image 
                className="rotate-5 drop-shadow-lg"
                src="/Sprites/About_Sticker_Button.png"
                width={700}
                height={700}
                alt="About Image"
                // priority
              />

              
          </a>
        </main>
        
      </div>
    </div>
    
  );
}

// <a> tag contains hyperlinks for each page
// <p> tag for paragraph text
