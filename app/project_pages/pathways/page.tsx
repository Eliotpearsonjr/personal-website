"use client";
import Image from "next/image";
import { useState } from "react";

// Personal Portfolio Website
// STEM Pathways Subpage
// Eliot Pearson Jr
// Developement Started: 5/7/2026

// cute candy stripe border for each gallery element
function CandyFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-[10px] sm:p-1"
      style={{
        background:
          "repeating-linear-gradient(45deg, rgba(255, 221, 182, 0.8) 0 14px, rgba(255, 255, 255, 0.8) 14px 28px, rgb(150, 218, 241, 0.8) 28px 42px, rgb(255, 255, 255, 0.8) 42px 56px)",
      }}
    >
      {/* white inner panel */}
      <div className="rounded-xl">{children}</div>
    </div>
  );
}

export default function STEMPathways() {
  // lightbox state
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // gallery images
  const galleryItems = [
    {
        type: "image",
        src: "/Sprites/pathways/STEM_Pathways_Bmore_Flyer.png",
        thumbnail:"",
        alt: "RoboCEO Promo Material",
    },

    {
        type: "image",
        src: "/Sprites/pathways/STEM_Pathways_One_Pager.png",
        thumbnail:"",
        alt: "RoboCEO Driver Card Example",
    },

    {
        type: "video",
        src: "/Sprites/pathways/Lapsed_Donor_Video.mp4",
        thumbnail: "/Sprites/pathways/Lapsed_Donor_Thumbnail.png",
        alt: "LET'S GO RoboCEO Promo Reel",
    },

    {
        type: "video",
        src: "/Sprites/pathways/LETSGO_Promo_Video.mp4",
        thumbnail: "/Sprites/pathways/LETSGO_Pathways_Promo_Thumbnail.png",
        alt: "LET'S GO RoboCEO Promo Reel",
    },

    {
        type: "image",
        src: "/Sprites/pathways/Baltimore_Promo.png",
        thumbnail:"",
        alt: "STEM Pathways Baltimore Social Post",
    },

    {
        type: "image",
        src: "/Sprites/pathways/Washington_DC_Promo.png",
        thumbnail:"",
        alt: "STEM Pathways DC Social Post",
    },

    {
      type: "image",
      src: "/Sprites/pathways/STEM_Pathways_Graphic.png",
      thumbnail:"",
      alt: "Primary Pathways Graphic",
    },

    {
      type: "image",
      src: "/Sprites/pathways/STEM_Pathways_Student_Journey.png",
      thumbnail:"",
      alt: "Student Journey Graphic",
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
          src="/Sprites/pathways/Pathways_Banner.png"
          width={2000}
          height={400}
          alt="LET'S GO Logo Header"
        />

        {/* Section Title - STEM Pathways */}
        <div className="text-stone-700 dark:text-white border-b-2 border-orange-900/10 dark:border-rose-300/10 pb-2 ml-7 mr-7 mb-2">
          <p className="text-4xl font-semibold">
            LET'S GO - STEM Pathways
          </p>
        </div>

        {/* Holds split subsections */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Section Body - Summary */}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full lg:w-full mb-5">
            <p className="bg-pink-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 ml-5 mr-5 mb-5 p-4 rounded-2xl text-left border-2 border-rose-900/30 dark:border-rose-300/30 transition-opacity duration-300 text-2xl font-regular">
            LET'S GO STEM Pathways is more than summer learning—it's a launchpad to high-paying STEM careers
            through 125 hours of paid, industry-aligned training in biomedical science, robotics, and 3D design. 
            I utilized <b>Canva </b> to produce compelling recruitment and fundraising materials for the program.
            </p>
          </div>

          {/* Stamps with logos of software products used */}
          <div className="flex flex-row ml-5 mb-5">
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
            I wanted to curate a bright and visually distinct aesthetic for this project, since STEM Pathways serves as LET'S GO's 
            flagship Summer program! I edited a few videos to serve as fundraising tools to support and showcase programming.
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
                        src= {item.thumbnail}
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

