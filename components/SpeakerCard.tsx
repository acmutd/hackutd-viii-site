import React from 'react';
import Image from 'next/image';

/**
 * Speaker Cards Component
 *
 * Cards for Speaker section
 */
// ${props.path}
function SpeakerCard(props) {
  return (
    <>
      <div id="SpeakerCards" className="flex flex-wrap justify-center">
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
