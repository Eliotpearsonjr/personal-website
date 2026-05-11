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
        src: "/Sprites/ccl_playbook/Playbook_Cover.png",
        alt: "RoboCEO Promo Material",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/Back_Cover_Page_Blue.png",
        alt: "RoboCEO Driver Card Example",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Playbook_Style_1.png",
        alt: "RoboCEO Style Sheet",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/CCL_Playbook_Style_2.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/Companion_OST_Programs_Corrected.png",
        alt: "LET'S GO RoboCEO April 2026 Informational Flyer",
    },

    {
        type: "image",
        src: "/Sprites/ccl_playbook/Case_Studies_Page_Blank.png",
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
    <div className="bg-pink-100 dark:bg-stone-800 text-stone-700 dark:text-stone-100 my-10 p-4 border-2 border-rose-200 dark:border-stone-400 transition-opacity duration-300">
      {/* text box div, mt-35 makes the top border of the postcard visible from the header */}
      <div className="flex flex-col">
        <Image
          className="mx-auto block w-screen mt-2 mb-7"
          src="/Sprites/ccl_playbook/CCL_Banner.png"
          width={2000}
          height={400}
          alt="Career Connected Learning Playbook Header"
        />

        {/* Section Title - RoboCEO */}
        <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2">
          <p className="text-4xl font-semibold">
            The Career-Connected Learning Playbook
          </p>
        </div>

        {/* Holds split subsections */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Section Body - Summary */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
            <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
              The Career-Connected Learning Playbook serves as a step-by-step guide to educators on preparing their high school
              aged youth for credntialling and workforce development. I used <b>Canva </b> to create refreshing designs for the
              organization's digital presence.
            </p>
          </div>

          {/* Stamps with logos of software products used */}
          <div className="flex flex-row ml-5 mb-5">

            <a
                className="transition-transform ease-in-out hover:scale-120"
                href="https://www.flipsnack.com/8757576F8D6/ccl-playbook"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className="rotate-354 drop-shadow-lg"
                    src="/Sprites/Playbook_Stamp.png"
                    width={250}
                    height={250}
                    alt="Swatches Stamp Button"
                />
                <p className="text-lg font-semibold">Look at the Playbook here!</p>
            </a>

            <a className="text-center">
              <Image
                className="rotate-4"
                src="/Sprites/Canva_Stamp.png"
                width={250}
                height={250}
                alt="Canva Logo Stamp"
              />
              <p className="text-lg font-semibold">Canva</p>
            </a>
          </div>
        </div>

        {/* Section Title - Promotional Materials */}
        <div className="text-stone-700 dark:text-white border-b-2 border-rose-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2">
          <p className="text-2xl font-semibold">Promotional Materials</p>
        </div>

        <div className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 my-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 font-regular">
          <p className="text-2xl font-regular">
            My goal for this project was to channel a vibrant aesthetic while maintaining an educational
            look and feel. Branding colors were utilized to draw the reader's attention to core
            information within each page.
          </p>
        </div>

        {/* Responsive Gallery */}
        <CandyFrame>
          <div className="bg-stone-50 dark:bg-stone-700 my-2 mx-2 p-6 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
              className="absolute top-5 right-5 text-white text-5xl font-bold hover:scale-110 transition-transform"
              aria-label="Close lightbox"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-4 sm:left-8 text-white text-5xl font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
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
              className="absolute right-4 sm:right-8 text-white text-5xl font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
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

