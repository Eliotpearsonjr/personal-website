import Image from "next/image";
// Personal Portfolio Website
// Contact Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function Contact() {
    return (
        <div className="bg-orange-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
            {/* Section Title - Contact Information */}
            <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-stone-600/50 pb-2 ml-7 mr-7 mt-5 mb-2">
                <p className="text-4xl font-semibold">Contact Me</p>
            </div>
            
            <p className="justify-items-center items-center bg-orange-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 mx-10 mt-10 p-4 rounded-2xl text-left border-2 border-orange-900/30 dark:border-stone-600 transition-opacity duration-300 text-lg font-regular"
            >Feel free to get in touch with me, or even check out my social medias!</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">               
                <p>eliotnumber2@gmail.com</p>
                <a>LinkedIn</a>
                <a>Instagram</a>
                <a>Github</a>

            </div>
        </div>
    );
}