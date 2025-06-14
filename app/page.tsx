import Image from "next/image";
import Link from "next/link";
// Personal Portfolio Website
// Home Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

export default function Home() {
  return (
    <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <p>Greetings From,</p>

        <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:p-4 justify-items-center rounded-sm font-[family-name:var(--font-geist-sans)]">

        <a
            className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
            href="/work"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/Projects_Sticker_Button.png"
                width={700}
                height={700}
                alt="Project Info Image"
                // priority
              />

              <p>Projects</p>
        </a>
          
          
          <a
            className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
                
                src="/Sprites/Contact_Sticker_Button.png"
                width={700}
                height={700}
                alt="Contact Info Image"
                // priority
              />

              <p>Contact</p>
          </a>

          <a
            className="flex flex-col items-center text-center cursor-pointer transition-transform ease-in-out hover:scale-120 text-center"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/About_Sticker_Button.png"
                width={700}
                height={700}
                alt="About Image"
                // priority
              />

              <p>About</p>
          </a>

          
          
            


          

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            
            
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          
        </footer>
      </div>
    </div>
    
  );
}

// <a> tag contains hyperlinks for each page
// <p> tag for paragraph text
