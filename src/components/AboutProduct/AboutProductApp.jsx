import React, { useState, useEffect } from 'react';

const AboutProductApp = () => {
    const [activeSection, setActiveSection] = useState('description');
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    const handleSectionClick = (section) => {
      setActiveSection(section);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };
  
      // Initial check on mount
      handleResize();
  
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div className='w-full bg-[#F3EFEF] py-[1rem] h-fit '>
      <div className={`bg-white shadow-lg p-4 rounded-lg mx-auto ${isSmallScreen ? 'md:w-[65%]' : 'hidden'} w-full font-SulphurPoint`}>
        <div>
          <div className='flex justify-between gap-x-4'>
            {isSmallScreen && (
              <h3
                className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                  activeSection === 'description' ? 'text-[#D66F11]' : ''
                }`}
                onClick={() => handleSectionClick('description')}
              >
                Description
              </h3>
            )}

            {isSmallScreen && (
              <h3
                className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                  activeSection === 'ingredient' ? 'text-[#D66F11]' : ''
                }`}
                onClick={() => handleSectionClick('ingredient')}
              >
                Ingredient
              </h3>
            )}

            {isSmallScreen && (
              <h3
                className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#504949] cursor-pointer ${
                  activeSection === 'howToUse' ? 'text-[#D66F11]' : ''
                }`}
                onClick={() => handleSectionClick('howToUse')}
              >
                How to Use
              </h3>
            )}
          </div>
          <hr />


          {/* Description Section */}
          {isSmallScreen && activeSection === 'description' && (
            <div className="my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]">
               <p>
                Discover the timeless beauty of our Classic Nude Eyeshadow Palette. This versatile collection of 4 neutral
                tones eye shadow palette innovated with one swipe, pure pigmented is a must-have for creating effortlessly
                elegant eye looks. From subtle daytime sophistication to sultry evening allure, this palette is your go-to
                for enhancing your beauty!<br/>This carefully curated collection of shades is designed to transport you to a world of enchantment, allowing you to create mesmerizing eye looks for any occasion.
                <br></br>
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



              </p>
            </div>
          )}

          {/* Ingredient Section */}
          {isSmallScreen && activeSection === 'ingredient' && (
            <div className="my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]">
               <p>
                Our Ethereal Dreams Palette is enriched with high-quality ingredients:
              </p>
              <h3>SHADES:</h3>
              <ul className="list-outside list-disc ml-6">
                <li>
                  <b className="text-[#A21D3C]">Kohi glow:</b>Talc, Mica, Calcium Sodium Borosilicate, Octyldodecyl
                  Stearoyl Stearate, Dimethicone, Zinc Stearate, Calcium Aluminum Borosilicate, Diisostearyl Malate,
                  Caprylic/capric Triglyceride, Zea Mays (Corn) Starch, Silica, Hydrogenated Castor Oil Hydroxystearate,
                  Pentaerythrityl Tetraisostearate, Potassium Sorbate, Chlorphenesin, Polyethylene, Isononyl Isononanoate,
                  1,2-hexanediol, Caprylyl Glycol, Tin Oxide, Caprylyl Methicone, Tetrasodium Edta, Zeolite, Dimethiconol,
                  Sorbic Acid, Methylparaben, Propylparaben, Butylparaben, Bht, Trimethylsiloxysilicate, [may Contain:
                  Ultramarines Ci 77007, Carmine Ci 75470, Ferric Ammonium Ferrocyanide Ci 77510, Ferric Ferrocyanide Ci
                  77510, Blue 1 Lake Ci 42090, Titanium Dioxide Ci 77891, Manganese Violet Ci 77742, Iron Oxides Ci 77492,
                  Iron Oxides Ci 77499, Iron Oxides Ci 77491]
                </li>
              </ul>
              <ul class = "list-outside list-disc ml-6">
         <li><b className="text-[#A21D3C]">Rosy Tone:</b> Talc, Mica, Calcium Sodium Borosilicate, Octyldodecyl Stearoyl Stearate, Dimethicone, Zinc Stearate, Calcium Aluminum Borosilicate, Diisostearyl Malate, Caprylic/capric Triglyceride, Zea Mays (Corn) Starch, Silica, Hydrogenated Castor Oil Hydroxystearate, Pentaerythrityl Tetraisostearate, Potassium Sorbate, Chlorphenesin, Polyethylene, Isononyl Isononanoate, 1,2-hexanediol, Caprylyl Glyco


         </li>
         </ul>
            </div>
          )}

          {/* How to Use Section */}
          {isSmallScreen && activeSection === 'howToUse' && (
            <div className="my-2 md:my-4 lg:my-6 font-SulphurPoint font-normal text-base md:text-lg lg:text-xl xl:text-2xl text-[#2D2D2D]">
               <ul>
                <li className="text-[#A21D3C] font-bold">1.Prime the Eyes:</li>
                <ul className="list-outside list-disc ml-6">
                  <li>Begin by applying an eyeshadow primer to create a smooth base and enhance color vibrancy.</li>
                </ul>
                <li className="text-[#A21D3C] font-bold">2.Select Base Shade:</li>
                <ul className="list-outside list-disc ml-6">
                  <li>Start with a matte base shade that closely matches your skin tone. Apply it all over the eyelid and up to the brow bone.</li>
                </ul>
                <li className="text-[#A21D3C] font-bold">3.Define the Crease:</li>
                <ul className="list-outside list-disc ml-6">
                  <li>Choose a matte shade slightly darker than your natural skin tone to define the crease. Blend gently for a soft transition.</li>
                </ul>
                <li className="text-[#A21D3C] font-bold">4.Add Depth:</li>
                <ul className="list-outside list-disc ml-6">
                  <li>Apply a darker shade to the outer corner of the eye to add depth and dimension. Blend well to avoid harsh lines.</li>
                </ul>
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
              </ul>
            </div>
          )}
        </div>          
      </div>
     
   
      {isSmallScreen && (
        <div className="mx-auto h-16 mt-4">
          <button className="text-[#F3EFEF] bg-[#A21D3C] w-full h-full py-2 font-roboto">Add to Cart</button>
        </div>
      )}
    </div>
     
           
   
  );
};

export default AboutProductApp;
