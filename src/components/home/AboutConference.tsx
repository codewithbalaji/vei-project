
import ieeeLogo from "../../assets/ieee_logo.png"; 

const AboutConference = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-24 px-4 ">
      <h1 className="text-4xl font-bold mb-2">About the Conference</h1>
      <div className="max-w-4xl space-y-6 backdrop-blur-sm shadow-lg rounded-xl p-8">
        <div>
          <p className="text-purple-800 text-lg font-semibold">
            The International Conference on "Intelligent Signal Processing and
            Effective Communication Technologies" is a dynamic platform designed
            to foster interdisciplinary dialogue, share cutting-edge research, and
            catalyze meaningful collaborations. Whether you're an academic,
            industry professional, or enthusiast, this conference offers
            unparalleled opportunities to engage with the latest trends,
            breakthroughs, and best practices in the Signal Processing &
            Communication field.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:flex-1">
            <p className="text-purple-800 text-lg font-semibold">
              Further, this conference is <span className="font-semibold">sponsored by the IEEE MP Section</span>,
              underscoring its alignment with the highest standards of academic
              and technical excellence. Authors will have the unique opportunity
              to have their papers published in IEEE proceedings, amplifying the
              visibility and impact of their research on a global scale.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex justify-center">
            <img src={ieeeLogo} alt="IEEE Logo" className="w-72 h-32" />
          </div>
        </div>

        <div>
          <p className="text-purple-800 text-lg font-semibold">
            Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
