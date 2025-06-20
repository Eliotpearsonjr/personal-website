import Image from "next/image";
// Personal Portfolio Website
// About Page
// Eliot Pearson Jr
// Developement Started: 5/2/25
export default function About() {
    return (
    // inner postcard background
        <div className="bg-orange-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 ml-10 mr-10 my-10 p-4 rounded-2xl border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">

            {/* text box div, makes the top border of the postcard visible from the header */}
            <div className="flex flex-col mt-10">

                {/* Section Title - Welcome */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-stone-600/50 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-4xl font-semibold">Welcome To My Website!</p>
                </div>

                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                    {/* Section Body - Summary */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
                        <p className="bg-orange-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-orange-900/30 dark:border-stone-600 transition-opacity duration-300 text-lg font-regular">
                            Hello! My name is Eliot, and I am a front-end developer and UX Designer.
                            I am also an illustrator! Ever since I was little I have always loved art
                            and design, but I was quite interested in computers as well. Becoming a
                            front-end developer with a focus on UI/UX has allowed for me to bridge the
                            gap between my passions, which is why I made this website; I wanted a place
                            to show off all of the projects, applications, and games that I have worked
                            on, so please enjoy!
                        </p>
                    </div>
                

                    {/* Profile picture of myself */}
                    <div className= "flex flex-col lg:flex-row mx-5">
                        <a className="text-center">
                            <Image
                                className="rounded-full border-10 border-white"
                                src="/Sprites/Website_Profile_Icon.png"
                                width={350}
                                height={350}
                                alt="Image of Eliot Pearson Jr"
                            />
                        </a>

                    </div>
                </div>
                
                {/* Section Title -Eliot's Stats */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-stone-600/50 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">Eliot's Stats</p>
                </div>

                {/* Information about myself */}
                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                
                    {/* Profile picture of myself */}
                    <div className= "flex flex-col lg:flex-row mx-5">
                        <a className="text-center">
                            <Image
                                // className="rounded-full border-8 border-white"
                                src="/Sprites/About_Sticker_Button.png"
                                width={500}
                                height={500}
                                alt="Image of Eliot Pearson Jr"
                            />
                        </a>

                    </div>

                    {/* Section Body - Additional Information */}
                    <div className="flex flex-col sm:flex-col justify-center items-left gap-4 w-full lg:w-full mx-10 my-5">
                        <p className="bg-gradient-to-r from-orange-50 dark:from-stone-900 to-fuchsia-200 dark:to-stone-900 border-2 border-fuchsia-200 dark:border-fuchsia-200 text-stone-700/90 dark:text-white ml-5 mr-5 p-4 rounded-2xl text-xl font-regular">
                            <b>Title: </b>Front End Developer
                        </p>

                        <p className="bg-gradient-to-r from-orange-50 dark:from-stone-900 to-blue-200 dark:to-stone-900 border-2 border-blue-200 dark:border-blue-200 text-stone-700/90 dark:text-white ml-5 mr-5 p-4 rounded-2xl text-xl font-regular">
                            <b>Skills: </b>UI/UX Design, Strong Communication
                        </p>

                        <p className="bg-gradient-to-r from-orange-50 dark:from-stone-900 to-emerald-200 dark:to-stone-900 border-2 border-emerald-200 dark:border-emerald-200 text-stone-700/90 dark:text-white ml-5 mr-5 p-4 rounded-2xl text-xl font-regular">
                            <b>Hobbies: </b>Gaming, Drawing, Baking, Gardening
                        </p>
                       
                        <p className="bg-gradient-to-r from-orange-50 dark:from-stone-900 to-amber-200 dark:to-stone-900 border-2 border-amber-200 dark:border-amber-200 text-stone-700/90 dark:text-white ml-5 mr-5 p-4 rounded-2xl text-xl font-regular">
                            <b>Birthday: </b>May 5
                        </p>
                        
                        <p className="bg-gradient-to-r from-orange-50 dark:from-stone-900 to-rose-200 dark:to-stone-900 border-2 border-rose-200 dark:border-rose-200 text-stone-700/90 dark:text-white ml-5 mr-5 p-4 rounded-2xl text-xl font-regular">
                            <b>Favorite Color: </b>Pink
                        </p>
                        
                    </div>


                </div>


                {/* Section Title - Github Information */}
                <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-stone-600/50 pb-2 ml-7 mr-7 mb-2">
                    <p className="text-2xl font-semibold">While You're Here...</p>
                </div>


                {/* Holds split subsections */}
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                    {/* Section Body - GitHub */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
                        <p className="bg-orange-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-orange-900/30 dark:border-stone-600 transition-opacity duration-300 text-lg font-regular">
                            If you would like to learn more about how I developed my projects, and see
                            the frameworks that I used in the process, please check out my <b>Github!</b>
                        </p>
                    </div>
                

                    {/* Clickable link to GitHub */}
                    <div className= "flex flex-col lg:flex-row mx-5">
                        <a
                            className="transition-transform ease-in-out hover:scale-120"
                            href="https://github.com/Eliotpearsonjr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="rotate-5 drop-shadow-lg"
                                src="/Sprites/GitHub_Stamp.png"
                                width={300}
                                height={200}
                                alt="GitHub Stamp Button"
                            />
                        </a>

                    </div>
                </div>

                

            </div>
            
        </div>
    );
}

    
    