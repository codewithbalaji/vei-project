
import jordanCheer from "../../assets/jordan_cheer.jpeg";
import changWookAhn from "../../assets/chang_wook_ahn.jpg";
import mKBhuyan from "../../assets/m_k_bhuyan.jpeg";
import profSNSingh from "../../assets/prof_s_n_singh.jpg"; 

const CommitteeSection = () => {
    const generalChairs = [
        {
          name: "Prof. Chang Wook Ahn",
          institution: "GIST, South Korea",
          image: changWookAhn,
        },
        {
          name: "Prof. Jordan Cheer",
          institution: "University of Southampton, UK",
          image: jordanCheer,
        },
        {
          name: "Prof. M. K. Bhuyan",
          institution: "IIT Guwahati, India",
          image: mKBhuyan,
        },
      ]
  return (
    <div className="min-h-screen  py-16 px-4">
    {/* Patron Section */}
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
        Patron
      </h2>
      
      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <img
              src={profSNSingh}
              alt="Patron"
              className="w-full h-96 object-cover object-center mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              Prof. S. N. Singh
            </h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Director, ABV-IIITM, India
            </p>
            <div className="text-center">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* General Chairs Section */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          General Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {generalChairs.map((chair, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-96 object-cover object-center mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {chair.name}
                </h3>
                <p className="text-gray-600 text-center text-sm mb-4">
                  {chair.institution}
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 text-sm"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommitteeSection