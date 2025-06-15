import Image from "next/image";
// Personal Portfolio Website
// About Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function About() {
    return (
        <div className="bg-orange-100 p-1 mt-10 ml-10 mr-10 mb-10 rounded-lg">
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="bg-orange-900/5 font-semibold text-lg text-stone-700/90 p-4 pb-8 rounded-md ml-5 mr-5">
                    <p>Hello! My name is Eliot, and I am a front-end developer and UX Designer.
                        I am also an illustrator! Ever since I was little I have always loved art
                        and design, but I was quite interested in computers as well. Becoming a
                        front-end developer with focus on UI/UX has allowed for my to bridge the
                        gap between my passions, which is why in made this website. This site serves
                        as a place for all of the projects, applications, and game that I have worked
                         on, so please enjoy!
                    </p>
                </div>
            </div>
        </div>
    );
}