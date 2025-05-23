import Image from "next/image";
import Link from "next/link";
// Personal Portfolio Website
// Home Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

export default function Home() {
  return (
    <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <p>Greetings From,</p>

        <main className="mt-4 mb-4 mr-8 ml-8 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 sm:p-10 justify-items-center rounded-sm font-[family-name:var(--font-geist-sans)]">

        <a
            //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/work"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/Stamp_Web_Button_Work_Slant.png"
                width={300}
                height={300}
                alt="Work Info Stamp image"
                // priority
              />
        </a>

        <a
            //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/Stamp_Web_Button_Links_Slant.png"
                width={300}
                height={300}
                alt="Links Info Stamp image"
                // priority
              />
          </a>
          
          
          <a
            //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/Stamp_Web_Button_Contact_Slant.png"
                width={300}
                height={300}
                alt="Contact Info Stamp image"
                // priority
              />
          </a>

          <a
            //className="hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              // className=
                src="/Sprites/Stamp_Web_Button_About_Slant.png"
                width={300}
                height={300}
                alt="About Stamp image"
                // priority
              />
          </a>

          
          
            


          

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            
            
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </div>
    
  );
}

// <a> tag contains hyperlinks for each page
// <p> tag for paragraph text
