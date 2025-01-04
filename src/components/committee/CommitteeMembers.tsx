import profSNSingh from "../../assets/prof_s_n_singh.jpg"; 
import { generalChairs, generalCoChairs, organizingChairs, advisoryCommittee, technicalProgramCommittee, websiteAndPublicityChairs, registrationChairs, hospitalityChairs, publicationChairs, technicalChairs, financeChairs, conferenceChairs } from "./committeeData";
const CommitteeMembers = () => {
  return (
    <div className="min-h-screen py-10 px-4">
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
      {/* General co-chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          General Co-chairs
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {generalCoChairs.map((chair, index) => (
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
      {/* organizing chair */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Organizing Chair
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {organizingChairs.map((chair, index) => (
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
      {/* Advisory Committee */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Advisory Committee
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-3 text-lg">
            {advisoryCommittee.map((member, index) => (
                
              <ol key={index} className="text-purple-800">

                <div className="flex items-center">
                  <span className="text-purple-800 mr-2">■</span>
                  <span>{member.name}, {member.institution}</span>
                </div>
              </ol>
            ))}
          </div>
        </div>
      </div>
      {/* Technical Program Committee */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Technical Program Committee
        </h2>
        <div className="max-w-4xl  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {/* Left Column */}
            <div className="space-y-3">
              {technicalProgramCommittee.slice(0, Math.ceil(technicalProgramCommittee.length/2)).map((member, index) => (
                <li key={index} className="text-purple-800 list-none flex items-start">
                  <span className="text-purple-800 mr-2">■</span>
                  <span>{member.name}, {member.institution}</span>
                </li>
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-3">
              {technicalProgramCommittee.slice(Math.ceil(technicalProgramCommittee.length/2)).map((member, index) => (
                <li key={index} className="text-purple-800 list-none flex items-start">
                  <span className="text-purple-800 mr-2">■</span>
                  <span>{member.name}, {member.institution}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Website and Publicity Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Website and Publicity Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
          {websiteAndPublicityChairs.map((chair, index) => (
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
      {/* Registration Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Registration Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
          {registrationChairs.map((chair, index) => (
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
      {/* Hospitality & Facility Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Hospitality & Facility Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
          {hospitalityChairs.map((chair, index) => (
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
      {/* Publication Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Publication Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
          {publicationChairs.map((chair, index) => (
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
      {/* Technical Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Technical Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
            {technicalChairs.map((chair, index) => (
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
      {/* Finance Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Finance Chairs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl  mx-auto">
            {financeChairs.map((chair, index) => (
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
      {/* Conference Chairs */}
      <div className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">
          Conference Chairs
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {conferenceChairs.map((chair, index) => (
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
  </div>
  )
}

export default CommitteeMembers