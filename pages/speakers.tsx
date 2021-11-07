import SpeakerCard from '../components/SpeakerCard';

export default function speakers() {
  return (
    <div className="speakersPage">
      <div className="speakersMainPage flex flex-col items-center">
        <h4 className="speakersTitle">Speakers</h4>
        <div id="SpeakerCards" className="flex flex-wrap justify-center sm:w-5/6 w-screen">
          {/* path is relative path from speakers.tsx file(this file) to assets*/}
          {/* general path -  /../public/assets/speakerImages/{speaker file}*/}
          <SpeakerCard
            path="/../public/assets/speakerImages/default_image.jpg"
            name="Name"
            company="company"
            description="Short bio containing information provided by the speaker, will likely contain a paragraph
                of words. Here is filler so we can better visualize the space this will take. Here is
                filler so we can better visualize the space this will take. Here is filler so we can
                better visualize the space this will take. Here is filler so we can better visualize the
                space this will take."
            website="www.speakerwebsitehere.com"
          />
          <SpeakerCard
            path="/../public/assets/speakerImages/default_image.jpg"
            name="Name"
            company="company"
            description="Short bio containing information provided by the speaker, will likely contain a paragraph
                of words. Here is filler so we can better visualize the space this will take. Here is
                filler so we can better visualize the space this will take. Here is filler so we can
                better visualize the space this will take. Here is filler so we can better visualize the
                space this will take."
            website="www.speakerwebsitehere.com"
          />
          <SpeakerCard
            path="/../public/assets/speakerImages/default_image.jpg"
            name="Name"
            company="company"
            description="Short bio containing information provided by the speaker, will likely contain a paragraph
                of words. Here is filler so we can better visualize the space this will take. Here is
                filler so we can better visualize the space this will take. Here is filler so we can
                better visualize the space this will take. Here is filler so we can better visualize the
                space this will take."
            website="www.speakerwebsitehere.com"
          />
          <SpeakerCard
            path="/../public/assets/speakerImages/default_image.jpg"
            name="Name"
            company="company"
            description="Short bio containing information provided by the speaker, will likely contain a paragraph
                of words. Here is filler so we can better visualize the space this will take. Here is
                filler so we can better visualize the space this will take. Here is filler so we can
                better visualize the space this will take. Here is filler so we can better visualize the
                space this will take."
            website="www.speakerwebsitehere.com"
          />
          <SpeakerCard
            path="/../public/assets/speakerImages/default_image.jpg"
            name="Name"
            company="company"
            description="Short bio containing information provided by the speaker, will likely contain a paragraph
                of words. Here is filler so we can better visualize the space this will take. Here is
                filler so we can better visualize the space this will take. Here is filler so we can
                better visualize the space this will take. Here is filler so we can better visualize the
                space this will take."
            website="www.speakerwebsitehere.com"
          />
        </div>
      </div>
    </div>
  );
}
