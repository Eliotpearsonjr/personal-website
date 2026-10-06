"use client";
import Image from "next/image";
import { useState } from "react";

// Personal Portfolio Website
// CCL Playbook Subpage
// Eliot Pearson Jr
// Developement Started: 5/7/2026

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-[10px] sm:p-1"
      style={{
        background:
          "repeating-linear-gradient(45deg, rgba(254, 215, 184, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 273, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
      }}
    >
      {/* white inner panel */}
      <div className="rounded-xl">{children}</div>
    </div>
  );
}

export default function CCLPlaybook() {
  // lightbox state
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // gallery images
  const galleryItems = [
    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Cover.png",
        alt: "RoboCEO Promo Material",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Back_Cover.png",
        alt: "RoboCEO Driver Card Example",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Colors.png",
        alt: "RoboCEO Style Sheet",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Banners.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Book_Mockup.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Icons.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Mockup_2.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Mockup_1.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Port_Mockup_3.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Playbook_Style_3.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Playbook_Style_1.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Playbook_Style_2.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },
  ];


  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    if (selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex - 1 + galleryItems.length) % galleryItems.length
    );
  };

  const showNextImage = () => {
    if (selectedImageIndex === null) return;

    setSelectedImageIndex(
      (selectedImageIndex + 1) % galleryItems.length
    );
  };

  return (
    // inner postcard background
    <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 mb-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">
      {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
      <div className="flex flex-col">

        {/* Section Title - RoboCEO */}
        <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2 sm:justify-items-left md:justify-items-center lg:justify-items-center">
          <p className="text-4xl font-semibold">
            The Career-Connected Learning Playbook
          </p>
        </div>

        <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 sm:justify-items-left md:justify-items-center lg:justify-items-center">
          <p className="text-3xl font-regular">Identity, Print, Digital Flipbook</p>
        </div>

        {/* Holds split subsections */}
                <div className="flex flex-row justify-center items-center">
        
                      {/* Section Body - Summary */}
                      <div className="flex flex-row sm:flex-row justify-center items-center w-full lg:w-full mb-5">
                        <p className="text-stone-800 dark:text-stone-100 mx-6 mb-5 p-4 text-left border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 transition-opacity duration-300 text-xl font-regular">
                        My goal for this project was to channel a vibrant aesthetic while maintaining an educational
            look and feel. Branding colors were utilized to draw the reader's attention to core
            information within each page.
                        </p>
                      </div>
        
                      {/* Stamps with logos of software products used */}
                      <div className="flex flex-col sm:flex-cols-2 md:flex-row lg:flex-row mb-2">
                        <a className="text-center">
                          <Image
                            className="rotate-4"
                            src="/Sprites/Canva_Stamp.png"
                            width={150}
                            height={150}
                            alt="Canva Logo Stamp"
                          />
                          <p className="text-lg font-semibold">Canva</p>
                          
                        </a>

                        <a className="text-center">
                          <Image
                            className="rotate-356"
                            src="/Sprites/Flipsnack_Stamp.png"
                            width={150}
                            height={150}
                            alt="Flipsnack Logo Stamp"
                          />
                          <p className="text-lg font-semibold">Flipsnack</p>
                          
                        </a>

                        <a
                          className="transition-transform ease-in-out hover:scale-110"
                          href="https://www.flipsnack.com/8757576F8D6/ccl-playbook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                        <Image
                            className="rotate-2 drop-shadow-lg"
                            src="/Sprites/Playbook_Stamp.png"
                            width={150}
                            height={150}
                            alt="Playbook Stamp Button"
                        />
                        <p className="text-lg font-semibold">View Playbook</p>
                    </a>

                        
                      </div>
                    </div>

        {/* Holds split subsections */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
         

          
        </div>

        {/* Responsive Gallery */}
        <CandyFrame>
          <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 p-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-102 focus:outline-none"
                >
                  {item.type === "image" ? (
                    <Image
                      className="rounded-xl drop-shadow-lg w-full h-auto object-cover"
                      src={item.src}
                      width={600}
                      height={600}
                      alt={item.alt}
                    />
                  ) : (
                    <div className="relative">
                      <Image
                        className="rounded-xl drop-shadow-lg w-full h-auto object-cover"
                        src="/Sprites/roboceo/RoboCEO_Promo_Thumbnail.png"
                        width={600}
                        height={600}
                        alt={item.alt}
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                        <div className="bg-white/90 text-black text-3xl rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                          ▶
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-white/10 transition-colors duration-300 rounded-xl" />
                </button>
              ))}
            </div>
          </div>
        </CandyFrame>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-200/70 dark:bg-stone-600/70 p-4">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-stone-500 dark:text-white text-5xl font-bold hover:scale-110 transition-transform"
              aria-label="Close lightbox"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-4 sm:left-8 text-white text-5xl font-bold bg-stone-500 hover:bg-pink-300 px-4 py-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Main Image */}
            <div className="relative max-w-5xl w-full flex justify-center items-center">
              {galleryItems[selectedImageIndex].type === "image" ? (
                <Image
                  className="rounded-2xl object-contain max-h-[85vh] w-auto h-auto"
                  src={galleryItems[selectedImageIndex].src}
                  width={1400}
                  height={1400}
                  alt={galleryItems[selectedImageIndex].alt}
                />
              ) : (
                <video
                  className="rounded-2xl max-h-[85vh] w-full bg-black"
                  controls
                  autoPlay
                >
                  <source
                    src={galleryItems[selectedImageIndex].src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-4 sm:right-8 text-white text-5xl font-bold bg-stone-500 hover:bg-pink-300 px-4 py-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

