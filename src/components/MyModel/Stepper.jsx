import React, { useState } from "react";
// acquiescence
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
    // const steps = [{"name":"first", "age": "last"},{"name":"first", "age": "last"},{"name":"first", "age": "last"}];
    const steps = [
        {"details" : "Confirmed", "date": "08 Dec, 2023" , 'status': "true"},
        {"details" : "Packed", "date": "09 Dec, 2023" , 'status': "true"},
        {"details" : "Shipped", "date": "09 Dec, 2023" , 'status': "true"},
        {"details" : "Out for Delivery", "date": "12 Dec, 2023" , 'status': "true"},
        {"details" : "Delivered", "date": "12 Dec, 2023" , 'status': "true"},
]
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    return (
        <div className=" ">
        <div className="flex flex-col justify-between">
    {steps?.map((step, i) => (
        <div
            key={i}
            className={`step-item ${currentStep === i  + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
            } 
            
            relative flex flex-row justify-centes gap-x-3 md:gap-x-6 items-center w-36s`}
        >
            {/* jo circle bna h */}
            <div className="relative inside-step-inside rela w-[2.5rem]s h-[4rem] flex items-center">
                <div className="step w-[20px] h-[20px] flex items-center border-[2px] border-[#DCDCDC] justify-center z-10 relative bg-[#FFFFFF] rounded-full font-semibold text-white">
                    {/* {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1} */}
                </div>
                {/* <div 
            className="absolute bottom-0 left-1/2 translate-x-1/2 translate-y-1/2  h-[50px] border border-black"
            ></div> */}
                {/* .step-item:not(:first-child):before { */}
    {/* // @apply content-['']  bg-slate-200 absolute w-[3px] h-full border border-black left-1/2 -top-1/2 transform -translate-x-1/2 -translate-y-1/2; */}
            
{/* } */}
            </div>
            {/* jo text likha h */}
            <p className="text-gray-500">

            <div className='py-1 font-SulphurPoint font-normal'>
                    <p className='text-[#2D2D2D] text-sm md:text-[16px] lg:text-[18px]'>{step.details}</p>
                    <p className='text-[#989898] text-xs md:text-[14px] lg:text-[16px]'>{step.date}</p>
                </div>
            </p>
        </div>
    ))}
</div>
        {!complete && (
            <button
            className="btn"
            onClick={() => {
                currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
            >
            {currentStep === steps.length ? "Finish" : "Next"}
            </button>
        )}
        </div>
    );
};

export default Stepper;