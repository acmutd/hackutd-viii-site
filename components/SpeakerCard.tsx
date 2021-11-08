import React from 'react';
import Image from 'next/image';

/**
 * Speaker Cards Component
 *
 * Cards for Speaker section
 */
function SpeakerCard(props) {
  return (
    <>
      <div id="SpeakerCards" className="hidden md:flex flex-wrap justify-center w-full">
        <div className="h-[22rem] w-full mx-5 my-3 flex border-pink border-2 rounded-lg">
          <div className="h-[20rem] w-[160rem] flex flex-center justify-center p-4 ">
            <Image
              className="rounded-lg border-blue border-2"
              src={`/../pages/speakers.tsx/..${props.path}`}
              alt="Speaker Picture"
              width={500}
              height={500}
            />
          </div>
          <div className="h-1/3 p-8">
            <h1 className="text-3xl">{props.name}</h1>
            <h2 className="text-xl">{props.company}</h2>
            <p className="text-sm">{props.description}</p>
            <h3 className="text-sm">{props.website}</h3>
          </div>
        </div>
      </div>
      <div id="SpeakerCards" className=" md:hidden flex flex-wrap justify-center">
        <div className="h-[26rem] w-[18rem] mx-5 my-3 flex flex-col border-pink border-2 rounded-lg">
          <div className="h-2/5 flex justify-center items-center">
            <Image
              className="rounded-full"
              src={`/../pages/speakers.tsx/..${props.path}`}
              alt="Speaker Picture"
              width={150}
              height={150}
            />
          </div>
          <div className="h-3/5 p-5">
            <h1>{props.name}</h1>
            <h2>{props.company}</h2>
            <p className="text-xs">{props.description}</p>
            <h3 className="text-sm">{props.website}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakerCard;
