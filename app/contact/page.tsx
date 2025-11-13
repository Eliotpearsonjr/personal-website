import Image from "next/image";
// Personal Portfolio Website
// Contact Page
// Eliot Pearson Jr
// Developement Started: 5/2/25

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="rounded-2xl p-[10px] sm:p-1 w-90"
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

export default function Contact() {
    return (
        <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">
            
            {/* Section Title - Contact Information */}
            <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mt-5 mb-2">
                <p className="text-4xl font-semibold">Contact Me</p>
            </div>
            
            <div className="justify-items-center items-center">
                <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 mx-10 my-10 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-lg font-regular"
                >Feel free to get in touch with me, or even check out my social medias!</p>
            </div>
            
            {/* Section Title - Social Media Buttons */}

            <CandyFrame>
                      <div className="bg-orange-50 dark:bg-stone-700 my-2 mx-2 py-8 rounded-xl">

                        <div className="flex flex-col sm:flex-col gap-4 w-full lg:w-full my-5 items-center">
                            <a
                                className="font-semibold text-4xl cursor-pointer transition-transform ease-in-out hover:scale-105 text-center w-80"
                                href="https://www.linkedin.com/in/eliot-pearson-jr-482270311"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <p className="bg-gradient-to-r from-orange-50 dark:from-stone-700 to-blue-200 dark:to-blue-300/80 border-2 border-blue-200 dark:border-blue-200 text-stone-700/90 dark:text-white mx-5 p-4 rounded-2xl text-xl font-regular">
                                    <b>LinkedIn</b>
                                </p>
                            </a>

                            <a
                                className="font-semibold text-4xl cursor-pointer transition-transform ease-in-out hover:scale-105 text-center w-80"
                                href="https://www.tiktok.com/@eliotsquared"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <p className="bg-gradient-to-r from-orange-50 dark:from-stone-700 to-fuchsia-200 dark:to-fuchsia-300/80 border-2 border-fuchsia-200 dark:border-fuchsia-200 text-stone-700/90 dark:text-white mx-5 p-4 rounded-2xl text-xl font-regular">
                                    <b>TikTok</b>
                                </p>
                            </a>

                            <a
                                className="font-semibold text-4xl cursor-pointer transition-transform ease-in-out hover:scale-105 text-center w-80"
                                href="https://www.instagram.com/bmore.like.el/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <p className="bg-gradient-to-r from-orange-50 dark:from-stone-700 to-rose-200 dark:to-rose-300/80 border-2 border-rose-200 dark:border-rose-200 text-stone-700/90 dark:text-white mx-5 p-4 rounded-2xl text-xl font-regular">
                                    <b>Instagram</b>
                                </p>
                            </a>

                            <a
                                className="font-semibold text-4xl cursor-pointer transition-transform ease-in-out hover:scale-105 text-center w-80"
                                href="/characters"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <p className="bg-gradient-to-r from-orange-50 dark:from-stone-700 to-emerald-200 dark:to-emerald-300/80 border-2 border-emerald-200 dark:border-emerald-200 text-stone-700/90 dark:text-white mx-5 p-4 rounded-2xl text-xl font-regular">
                                    <b>Email Me!</b>
                                </p>
                            </a>

                            
                       
                         
                          </div>
                      </div>
                      </CandyFrame>

                   

                <div className="justify-items-center items-center">
                    <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 mx-10 my-10 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-lg font-regular"
                    >If you have any business inquiries, please email me at <b>eliotnumber2@gmail.com</b>.
                    Thanks for stopping by, and sign my guestbook if you'd like!</p>
                </div>   
            
        </div>
    );
}