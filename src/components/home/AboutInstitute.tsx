import iiitmImage from "../../assets/iiitm_image.jpeg"; 

const AboutInstitute = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4 px-4">
      <h1 className="text-4xl font-bold mb-2">About Institute</h1>
      <div className="max-w-4xl space-y-6  backdrop-blur-sm shadow-lg rounded-xl p-8">
        <div>
          <p className="text-purple-800 text-lg font-semibold">
            Indian Institute of Information Technology and Management (IIITM) in
            Gwalior, Madhya Pradesh is an autonomous institute set by Government
            of India, MHRD (Presently Ministry of Education, Govt. of India) in
            1997. It is an effort by MHRD (Presently Ministry of Education,
            Govt. of India) towards creating professionals in areas of
            management and information technology from the same institute. This
            institute was created for facilitating higher education, research,
            and consultancy in areas of information technology (IT) and business
            management. Initially started as IIITM, this institute was prefixed
            with ABV in 2002 to honour the then Prime Minister Atal Bihari
            Vajpayee. The beginning of IIITM could be traced back to 1992, when
            MHRD (Presently Ministry of Education, Govt. of India) under Dr. P.
            G. Reddy contemplated setting up of advanced information systems in
            the likes of IIMs and IITs in different locations of India.
            Subsequently in 1995, Government of India based on a report prepared
            by AICTE (All India Council for Technical Education) comprising
            eminent academicians, policy makers, and professionals decided on
            establishing national centres focussed on IT and management
            training. PGDMIT (Post Graduate Diploma in Management and
            Information Technology) was the maiden course initiated in 1998 with
            thirty students, followed by PGDIT (Post Graduate Diploma in
            Information Technology) in 1999, and Ph.D. and 5-year Dual Post
            Graduate programs in 2000.
          </p>
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <img src={iiitmImage} alt="IIITM Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;
