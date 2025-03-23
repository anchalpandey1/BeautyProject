import React from 'react'



import DiscountProduct from '../../components/DiscountOnServices/DiscountProduct'

//// add social icon for website view
import  { useState } from 'react';

const AboutArtist = () => {
  const [activeSection, setActiveSection] = useState('description');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=' md:flex w-full bg-[#F3EFEF] py-[1rem] h-fit flex'>
      <div className="bg-white shadow-lg p-4 rounded-lg mx-auto w-[65%] font-SulphurPoint">
        <div>
          <div className='flex justify-between gap-x-4'>
            <h3
              className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                activeSection === 'description' ? 'text-[#D66F11]' : ''
              }`}
              onClick={() => handleSectionClick('description')}
            >
              Description
            </h3>

            <h3
              className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                activeSection === 'ingredient' ? 'text-[#D66F11]' : ''
              }`}
              onClick={() => handleSectionClick('ingredient')}
            >
              Ingredient
            </h3>

            <h3
              className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                activeSection === 'howToUse' ? 'text-[#D66F11]' : ''
              }`}
              onClick={() => handleSectionClick('howToUse')}
            >
              How to Use
            </h3>
          </div>
              <hr />
          <div className={`my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D] ${activeSection === 'description' ? '' : 'hidden'}`}>
            <p>
            Discover the timeless beauty of our Classic Nude Eyeshadow Palette.This versatile collection of 4 neutral tones eye shadow palette innovated with one swipe, pure pigmented is a must-have for creating effortlessly elegant eye looks. 
            From subtle daytime sophistication to sultry evening allure, this palette is your go-to for enhancing your beauty!
            </p>
            {!showMore && (
        <button className="border w-full border-[#A21D3C] bg-white text-[#A21D3C] px-4 py-2 rounded mt-14" onClick={() => setShowMore(true)}>
          Read More
        </button>
      )}
      
      {showMore && (
        <div>
      <p>This carefully curated collection of shades is designed to transport you to a world of enchantment, allowing you to create mesmerizing eye looks for any occasion.</p>
      <h3 className="text-[#A21D3C] font-bold">Key Features:</h3>

            <ul>
            <li>1.Versatile Color Range:</li>           
          <ul class = "list-outside list-disc ml-6">
          <li>The palette features a harmonious blend of neutral and celestial shades, perfect for both everyday wear and special occasions.</li>
         </ul>
            <li>2.Velvety Texture:</li>
            <ul class = "list-outside list-disc ml-6">
         <li>Each eyeshadow is formulated with a velvety smooth texture for effortless application and seamless blending.</li>
          </ul>
            <li>3.High Pigmentation:</li>
            <ul class = "list-outside list-disc ml-6">
          <li>Enjoy intense color payoff with just a single swipe, allowing you to build layers for customized looks.</li>
          </ul>
            <li>4.Long-Lasting Wear:</li>
            <ul class = "list-outside list-disc ml-6">
          <li>The eyeshadows are designed to stay vibrant and crease-free throughout the day, ensuring a lasting impact.</li>
         </ul>


            </ul>



          </div>
          )}
    </div>

          <div className={`my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D] ${activeSection === 'ingredient' ? '' : 'hidden'}`}>
          <p>
          Our Ethereal Dreams Palette is enriched with high-quality ingredients:</p>
          <h3>SHADES:</h3>
          <ul class = "list-outside list-disc ml-6">
         <li><b className="text-[#A21D3C]">Kohi glow:</b>Talc, Mica, Calcium Sodium Borosilicate, Octyldodecyl Stearoyl Stearate, Dimethicone, Zinc Stearate, Calcium Aluminum Borosilicate, Diisostearyl Malate, Caprylic/capric Triglyceride, Zea Mays (Corn) Starch, Silica, Hydrogenated Castor Oil Hydroxystearate, Pentaerythrityl Tetraisostearate, Potassium Sorbate, Chlorphenesin, Polyethylene, Isononyl Isononanoate, 1,2-hexanediol, Caprylyl Glycol, Tin Oxide, Caprylyl Methicone, Tetrasodium Edta, Zeolite, Dimethiconol, Sorbic Acid, Methylparaben, Propylparaben, Butylparaben, Bht, Trimethylsiloxysilicate, [may Contain: Ultramarines Ci 77007, Carmine Ci 75470, Ferric Ammonium Ferrocyanide Ci 77510, Ferric Ferrocyanide Ci 77510, Blue 1 Lake Ci 42090, Titanium Dioxide Ci 77891, Manganese Violet Ci 77742, Iron Oxides Ci 77492, Iron Oxides Ci 77499, Iron Oxides Ci 77491]</li>
         </ul>
            {!showMore && (
        <button className="border w-full border-[#A21D3C] bg-white text-[#A21D3C] px-4 py-2 rounded" onClick={() => setShowMore(true)}>
          Read More
        </button>
      )}
      
      {showMore && (
        <div>
        <ul class = "list-outside list-disc ml-6">
         <li><b className="text-[#A21D3C]">Rosy Tone:</b> Talc, Mica, Calcium Sodium Borosilicate, Octyldodecyl Stearoyl Stearate, Dimethicone, Zinc Stearate, Calcium Aluminum Borosilicate, Diisostearyl Malate, Caprylic/capric Triglyceride, Zea Mays (Corn) Starch, Silica, Hydrogenated Castor Oil Hydroxystearate, Pentaerythrityl Tetraisostearate, Potassium Sorbate, Chlorphenesin, Polyethylene, Isononyl Isononanoate, 1,2-hexanediol, Caprylyl Glyco


         </li>
         </ul>

          </div>
          )}
    </div>

          <div className={`my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D] ${activeSection === 'howToUse' ? '' : 'hidden'}`}>
          <ul >
            <li className="text-[#A21D3C] font-bold">1.Prime the Eyes:</li>           
            <ul class = "list-outside list-disc ml-6">
          <li >Begin by applying an eyeshadow primer to create a smooth base and enhance color vibrancy.</li>
         </ul>
            <li className="text-[#A21D3C] font-bold">2.Select Base Shade:</li>
            <ul class = "list-outside list-disc ml-6">
         <li>Start with a matte base shade that closely matches your skin tone. Apply it all over the eyelid and up to the brow bone.</li>
          </ul>
            <li className="text-[#A21D3C] font-bold">3.Define the Crease:</li>
            <ul class = "list-outside list-disc ml-6">
          <li>Choose a matte shade slightly darker than your natural skin tone to define the crease. Blend gently for a soft transition.</li>
          </ul>
            <li className="text-[#A21D3C] font-bold">4.Add Depth:</li>
            <ul class = "list-outside list-disc ml-6">
          <li>Apply a darker shade to the outer corner of the eye to add depth and dimension. Blend well to avoid harsh lines.</li>
         </ul>


            </ul>
            {!showMore && (
        <button className="border w-full border-[#A21D3C] bg-white text-[#A21D3C] px-4 py-2 rounded" onClick={() => setShowMore(true)}>
          Read More
        </button>
      )}
      
      {showMore && (
        <div>
     
            <ul>
            <li className="text-[#A21D3C] font-bold">5.Highlight the Inner Corner:</li>           
           <ul class = "list-outside list-disc ml-6">
          <li>Use a shimmery or light shade to highlight the inner corners of the eyes for a bright, awakened look.</li>
         </ul>
         <li className="text-[#A21D3C] font-bold">6.Blend and Soften</li>           
           
            <ul class = "list-outside list-disc ml-6">
         <li>Blend the eyeshadows seamlessly to create a gradient effect and achieve a polished finish.</li>
          </ul>
          <li className="text-[#A21D3C] font-bold">7.Optional: Eyeliner and Mascara:</li>           
           <ul class = "list-outside list-disc ml-6">
          <li>Complete your eye makeup with eyeliner and mascara for added definition.</li>
          </ul>
             </ul>



          </div>
          )}
    </div>


        </div>
        </div>




        <DiscountProduct/>
          </div> 
    )
}

export default AboutArtist
