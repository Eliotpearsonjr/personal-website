import Image from "next/image";
// Personal Portfolio Website
// Contact Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function Contact() {
    return (
        <div className="bg-orange-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                
                <p>Feel free to get in touch with me check out my social medias!</p>

                <p>eliotnumber2@gmail.com</p>
                <a>LinkedIn</a>
                <a>Instagram</a>
                <a>Github</a>

            </div>
        </div>
    );
}