import heroImage from "../../assets/hero_poster.png"; 

const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center mt-2 mb-24">
        {/* add border right and bottom to the image */}
        <div className="w-4/5 h-4/5 pt-2 justify-center items-center mb-4 border-r-8 border-gray-500 border-b-8 rounded-xl">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        {/* add gap to all the text */}

        <div className="pt-2 w-4/5 h-4/5 flex flex-col gap-4">
          <h1 className="text-center text-4xl font-bold">
            {/* color changing text animation css */}
            International Conference INSPECT-2024 <span className="animate-colorChange ml-2">(Hybrid Mode)</span>
          </h1>
          <h2 className="text-center text-2xl font-semibold">
            to be held from 7-8th December 2024 at ABV-IIITM Gwalior, India
          </h2>
          <p className="text-lg font-normal">
            We are thrilled to announce the <span className="font-semibold">2024 IEEE International Conference
            on Intelligent Signal Processing and Effective Communication
            Technologies (INSPECT)</span>, to be held in a groundbreaking hybrid
            format, seamlessly blending in-person and virtual participation.
            Mark your calendars for 7-8 December 2024, as we embark on a journey
            to explore, innovate, and connect with global leaders in Intelligent
            Signal Processing and Effective Communication Technologies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
