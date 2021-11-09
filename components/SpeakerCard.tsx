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
        <div className="h-[22rem] w-[60rem] mx-5 my-3 flex border-pink border-2 rounded-lg">
          <div className="h-[20rem] w-[160rem] flex flex-center justify-center p-4 ">
            <Image
              className="rounded-lg border-blue border-2"
              src={props.path}
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
    </>
  );
}

export default SpeakerCard;
