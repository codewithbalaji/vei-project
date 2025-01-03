import iiitmImage from "../../assets/abv_iiitm.jpg"; 

const AboutInstitute2 = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center mb-24 px-4">
      <div className="max-w-4xl space-y-6  backdrop-blur-sm shadow-lg rounded-xl p-8">
        <div className="flex flex-col gap-4">
          <p className="text-purple-800 text-lg font-semibold">
            All pervasive growth of IT in India was triggered by Software Policy
            in 1986, Electronic Policy in 1985, and Computer Policy in 1984.
            These three policies in unison led to extensive use of computerised
            methods across different sectors of business, industries, and public
            administration thereby necessitating the need for competent
            professionals at different levels. Infrastructures like Internet,
            INDONET, NICNET, ERNET, and INFLIBNET were established for
            supporting this demand for widespread usage of computerised
            processes. IIITM was set up as an autonomous institute under
            Societies Registration Act. This centrally funded body run by a
            Board of Governors aims at offering education, research, training,
            and consultancy in fields of management and IT in an integrated way.
            ABV-IIITM is located on Morena Link Road at a distance of about
            3.5km and 8.5km from Gwalior railway station and Rajmata Vijay Raje
            Scindia city airport respectively. Its location at the foothills of
            Gwalior fort is idyllic for an institute of this stature. Though it
            is not far from city centre it has a tranquil ambiance as desired of
            an academic institute. With nearly four-fifths of the institute
            covered with greenery, the environment is pristine and tranquil.
            Together with academics it offers an ideal surrounding for
            extra-curricular activities. The institute is easily accessible by
            road, and there are cabs and auto-rickshaws to commute from railway
            station or airport. Shopping centres and market places are located
            nearby and about ten minutes driving distance away.
          </p>
        </div>
        
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mb-24 px-4">
      <div className="max-w-4xl space-y-6  backdrop-blur-sm shadow-lg rounded-xl">
        <div className="hover:scale-105 transition-all duration-300">
          <img src={iiitmImage} alt="IIITM Image" className="w-full h-full object-cover" />
        </div>
      </div>

    </div>
    </>
  );
};

export default AboutInstitute2;
